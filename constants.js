const CONSTANTS = {
	FALSE: false,
	TRUE: true,
	SERVER_STARTED: "Server is up and running... ",
	INTERNAL_SERVER_ERROR: "Internal Server Error",

	NODEMAILER_HOST: "smtp.gmail.com",
	NODEMAILER_PORT: 465,
	NODEMAILER_SECURE: true,
	NODEMAILER_SERVICE: "Gmail",

	MAIL_SUBJECT: "Mail from nodemailer using node-scheduler",
	MAIL_BODY: "This is a system generated mail! Generated at",
	PORT: 5000,

	// Timings
	START_TIME: {
		HOUR: 11,
		MINUTE: 30,
	},
	END_TIME: {
		HOUR: 17,
		MINUTE: 30,
	},
	TIMEZONE: "Asia/Kolkata",
};

module.exports = CONSTANTS;
