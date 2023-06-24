const puppeteer = require("puppeteer");
const generatePdf = async (req, res) => {
  console.log(req.body)
  try {
    const reqData = req.body.id;
    console.log(req.body)
    const { FormName,FormType,FormStatus, __v, ...data } = reqData;

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const content = `
  <html>
  
    <body>
      <img src="https://www.freepnglogos.com/uploads/dhl-png-logo/dhl-business-live-png-logo-3.png" width="200" alt="dhl logo" /></a>
      <br/><br/>

     <h1> Hello Dinesh Mahatara</h1>
    </body>
  </html>
`;
    await page.setContent(content);
    await page.pdf({
      path: `dines.pdf`,
      format: "A4",
      printBackground: true,
    });
    await browser.close();

    res.json({
      msg: "pdf downloaded sucesfully",
    });
  } catch (err) {
    console.log(err);
  }
};

exports.generatePdf = generatePdf;