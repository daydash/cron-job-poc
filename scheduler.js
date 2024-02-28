const schedule = require("node-schedule");
const CONSTANTS = require("./constants");
const { sendMail } = require("./nodemailer");

const startTime = new schedule.RecurrenceRule();
startTime.dayOfWeek = [0, new schedule.Range(0, 6)];
startTime.hour = CONSTANTS?.START_TIME?.HOUR;
startTime.minute = CONSTANTS?.START_TIME?.MINUTE;
startTime.tz = CONSTANTS?.TIMEZONE;

schedule.scheduleJob(startTime, () => {
	sendMail();
});

const endTime = new schedule.RecurrenceRule();
endTime.dayOfWeek = [0, new schedule.Range(0, 6)];
endTime.hour = CONSTANTS?.END_TIME?.HOUR;
endTime.minute = CONSTANTS?.END_TIME?.MINUTE;
endTime.tz = CONSTANTS?.TIMEZONE;

schedule.scheduleJob(endTime, async () => {
	sendMail();
});

console.info("--------JOBS SCHEDULED------");
