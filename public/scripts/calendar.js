$(document).ready(function(){
	$('#calendar').fullCalendar({
		events : 'https://www.google.com/calendar/feeds/9niid0lakg17i3rblct46bcafo%40group.calendar.google.com/public/basic',
		defaultView : 'agendaWeek',
		minTime : '08:00:00',
		maxTime : '18:00:00',
		height : 550,
		allDaySlot : false,
		hiddenDays : [0,6]
	});
	setTimeout(cb, 1000);
});

var tutors = [{
	title : 'Christopher Guerra',
	description : 'IT 113, 114, 266 Java'
},{
	title : 'Matthew Cifelli',
	description : 'C, C++, Python, Java, ARM, Javascript, PHP, C# CS 10-16, 252, 280'
},{
	title : 'Justin Mangaoang',
	description : 'CS 100, 113 Python, Java'
},{
	title : 'Dante Urso',
	description : 'Python, C, C++, Java/Android CS 113'
},{
	title : 'Binoy Patel',
	description : 'CS 113, IS 322 HTML, CS, Javascript, PHP, Java, Matlab (Beginner)'
},{
	title : 'John Cafiero',
	description : 'Java, C, C++ CS 100, 113, IT 120, 265, 26, 286, 386, and 485'
},{
	title : 'Mohammad Omer',
	description : 'Java, Python, C# CS 100, 113, 114, 280'
}];

function cb(){
	$.each(tutors, function(index, value){
		$('#skills').append('<p><b>' + value.title + '</b><br>' + value.description + '</p>');
	});
}

