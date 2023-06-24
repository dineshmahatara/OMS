// emailTemplates.js

exports.registrationTemplate = (phoneNumber) => {
    return `
      <h1>Welcome ${phoneNumber}!</h1>
      <p>Thank you for registering.</p>
    `;
  };