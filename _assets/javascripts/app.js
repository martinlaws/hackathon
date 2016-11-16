$(document).ready(function() {
  $("li").countdown("2016/11/18 19:00", function(event) {
    $('li.days span').html(
      event.strftime('%D') + '<span> Days</span>'
    );
    $('li.hours span').html(
      event.strftime('%H') + '<span> Hours</span>'
    );
    $('li.minutes span').html(
      event.strftime('%M') + '<span> Minutes</span>'
    );
    $('li.seconds span').html(
      event.strftime('%S') + '<span> Seconds</span>'
    );
  });
});
