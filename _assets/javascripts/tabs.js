$(document).ready(function(){

	$('ul.tabs.faq li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs.faq li').removeClass('current');
		$('.faq-tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
    console.log(this);
	})

	$('ul.tabs.sched li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs.sched li').removeClass('current');
		$('.sched-tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
		console.log(this);
	})

})
