const dateAndTime = document.querySelector("#timer");

setInterval(()=>{
	let instance = new Date();
	const date = `${instance.getMonth() + 1}/${instance.getDate()}/${instance.getFullYear()}`;
	let hrs = instance.getHours();
	const ampm = hrs >= 12 ? "PM" : "AM";
	
	hrs > 12 && (hrs -= 12);

	const time = `${hrs}:${instance.getMinutes()}:${instance.getSeconds()} ${ampm}`;
	dateAndTime.innerText = `${date}, ${time}`;
	
},1000);
