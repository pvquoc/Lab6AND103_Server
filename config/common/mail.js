var nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "quocpvph49624@fpt.edu.vn",
        pass: "123456"
    }
});
module.exports = transporter 