function formatTime(minutes) {
	const restMinutes = minutes % 60;
	const hours = Math.floor((minutes % 1440) / 60);
	const days = Math.floor(minutes / 1440) ;
	return `${days} day(s) ${hours} hour(s) ${restMinutes} minute(s).`;
}

formatTime(120);