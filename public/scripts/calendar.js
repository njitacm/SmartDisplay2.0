$(document).ready(function(){
	$('#calendar').fullCalendar({
		events : 'https://www.google.com/calendar/feeds/9niid0lakg17i3rblct46bcafo%40group.calendar.google.com/public/basic',
		defaultView : 'agendaWeek',
		minTime : '08:00:00',
		maxTime : '18:00:00',
		height : 550
	});
});