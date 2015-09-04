$(document).ready(function(){
	$('#calendar').fullCalendar({
		googleCalendarApiKey: 'AIzaSyDMz_FvSnQ4_Lg-tamBTc_IPwIyyeKP5vE',
    events: {
        googleCalendarId: '9niid0lakg17i3rblct46bcafo@group.calendar.google.com'
    },
		defaultView : 'agendaWeek',
		minTime : '08:00:00',
		maxTime : '18:00:00',
		height : 550,
		allDaySlot : false,
		hiddenDays : [0,6]
	});
});
