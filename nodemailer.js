const nodemailer = require("nodemailer");
const CONSTANTS = require("./constants");

const transporter = nodemailer.createTransport({
	service: CONSTANTS?.NODEMAILER_SERVICE,
	host: CONSTANTS?.NODEMAILER_HOST,
	port: CONSTANTS?.NODEMAILER_PORT,
	secure: CONSTANTS?.NODEMAILER_SECURE,
	auth: {
		user: process.env?.GOOGLE_MAIL,
		pass: process.env?.GOOGLE_APP_PASSWORD,
	},
});

const sendMail = () => {
	try {
		const date = new Date().toString();
		console.log(date);
		const mailOptions = {
			from: process.env?.GOOGLE_MAIL,
			to: process.env?.CTO_MAIL,
			// to: process.env?.GOOGLE_MAIL,
			subject: CONSTANTS?.MAIL_SUBJECT,
			text: `${CONSTANTS?.MAIL_BODY}: ${date}`,
		};
		console.log("mail options set");
		transporter.sendMail(mailOptions, (err, info) => {
			if (err) {
				console.log(err);
			} else {
				console.log(info);
			}
		});
		console.log("mail sent");
	} catch (error) {
		console.log(error);
	}
};

module.exports = { sendMail };
