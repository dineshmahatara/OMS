const Users = require('../model/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const path = require('path');
const fs = require('fs');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const emailTemplates = require('../routes/emailTemplates');

const registerUser = async (req, res) => {
  const data = await Users.findOne({ phoneNumber: req.body.phoneNumber });
  console.log(data)
  if (data) {
    res.json({
      msg: 'User Already Exist',
      success: false
    });
  } else {
    const hash = await bcrypt.hash(req.body.password, 0);

    if (hash) {
      req.body.password = hash;
      req.body.avatarName = req?.file?.filename;

      Users.create(req.body)
        .then(async (createdUser) => {
          const emailContent = emailTemplates.registrationTemplate(createdUser.username);

          // Send email
          try {
            await sendEmail(createdUser.email, emailContent);
            res.json({
              msg: 'Register success',
              success: true
            });
          } catch (error) {
            res.status(500).send('Registration successful, but failed to send email.');
          }
        })
        .catch(error => {
          res.status(500).send('Failed to create user.');
        });
    }
  }
};

// Send email
async function sendEmail(toEmail, emailContent) {
  const transporter = nodemailer.createTransport({
    service:'gmail',
    secure: false,
    auth: {
      user: process.env.gmailID,
      pass: process.env.gmailPW
    }
  });

  const mailOptions = {
    from: process.env.gmailID,
    to: toEmail,
    subject: 'Welcome to your website!',
    html: emailContent
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.messageId);
    return info;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}

const loginUser = async (req, res) => {
  const data = await Users.findOne({ phoneNumber: req?.body?.phoneNumber });
  if (data) {
    const isMatched = await bcrypt.compare(req.body.password, data.password);
    if (isMatched) {
      const token = jwt.sign({ phoneNumber: req.body.phoneNumber }, process.env.SECRET_KEY);
      res.json({ message: 'Login Success', success: true, token: token, role: data.role, id: data._id });
    } else {
      res.json({ message: 'Login Failed', success: false });
    }
  } else {
    res.json({ message: 'User does not exist', success: false });
  }
};

const PutChangePassword = async (req, res) => {
  try {
    const user = await Users.findOne({ _id: req.params.id });
    if (user) {
      const { password } = user;
      const isMatched = bcrypt.compareSync(req.body.currentPassword, password);
      if (isMatched) {
        const hash = await bcrypt.hashSync(req.body.newPassword, 10);
        user.password = hash;
        const data = await Users.findByIdAndUpdate(user._id, user);
        if (data) {
          res.status(200).json({ msg: 'Password has changed' });
        } else {
          res.status(500).json({ msg: 'Something went wrong' });
        }
      } else {
        res.status(500).json({ msg: 'Current password does not match' });
      }
    }
  } catch (err) {
    console.log(err);
  }
};

const getAvatar = async (req, res) => {
  const userData = await Users.findById(req.params.id);
  const userImage = path.join(__dirname, '../../uploads/avatar', userData.avatarName);
  const defaultImage = path.join(__dirname, '../../uploads/avatar', userData.avatarName);
  if (fs.existsSync(userImage)) {
    res.sendFile(userImage);
  } else {
    res.sendFile(defaultImage);
  }
};

module.exports = {
  registerUser,
  loginUser,
  PutChangePassword,
  getAvatar
};
