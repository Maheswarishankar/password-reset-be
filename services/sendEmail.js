import nodemailer from 'nodemailer'

function sendEmail(user, otpToken, res) {
     console.log(user.email);
    try {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASS
            }
        });
        // console.log(mail);
        let message = {
            from: process.env.EMAIL,
            to: user.email,
            subject: "OTP Verification Mail✔",
            text: "Hello world?",
            html: `<div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
            <div style="margin:50px auto;width:70%;padding:20px 0">
              <div style="border-bottom:1px solid #eee">
                <a href="" style="font-size:1.4em;color: #00466a;text-decoration:none;font-weight:600">OTP Verification</a>
              </div>
              <p style="font-size:1.1em">Hi,</p>
              <p>Please use the verification code below to complete your SignIn procedures. OTP is valid for 5 minutes</p>
              <h2 style="background: #00466a;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">${otpToken}</h2>
              <p style="font-size:0.9em;">Thanks!</p>
              <hr style="border:none;border-top:1px solid #eee" />
              <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
                <p>Mahi Inc</p>
                <p>Chennai 006</p>
                <p>India</p>
              </div>
            </div>
          </div> `, // html body
        };
        transporter.sendMail(message)
            .then(() => {
                return res.status(201).json({ msg: "Email sent successfully" });
            }).catch((error) => {
                return res.json({ error });
            });
    } catch (error) {
        console.log("email not send");
        console.log(error);
    }
}

export default sendEmail;