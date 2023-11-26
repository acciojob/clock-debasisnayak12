const dateAndTime = document.querySelector("#timer");

function updateTime() {
	const current = new Date();
	const options = {
		month: "2-digit",
		day: "2-digit",
		year: "2-digit",
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit",
		hour12: true
	};
	const formateDateTime = current.toLocaleString(undefined, options);
	const [date,timePart] = formateDateTime.split(', ');
	const [time, ampm] = timePart.split(' ');
	const capitalAmPm = ampm.toUpperCase();

	const formate = `${date}, ${time} ${capitalAmPm}`;
	dateAndTime.textContent = formate;
	
}

updateTime();

setInterval(updateTime, 1000);