    var words = ["hey, go get some rest, you need to make a difference tomorrow", "why are you up?", "top of the mornin' to ya", "have a great day", "keep goin', you got this", "enjoy you're evening"], i=0;
  
 setInterval(function() {         // \/ \/ callback function
  $('#greetingHop').fadeOut(900, function() {
                      // if i = last index ? i = 0 else i++
    $(this).text(words[ (i === words.length - 1) ? i = 0 : i += 1] ).fadeIn(500);
  });
}, 14400000);
