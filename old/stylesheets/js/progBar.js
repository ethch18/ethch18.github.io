/*Adaptation of Stephen Fairbanks' "Super Simple Progress Bar"
  * http://www.ghosthorses.co.uk/production-diary/super-simple-responsive-progress-bar/
  */


// on page load...
//moveProgressBar();
/*window.onload = function() {
	moveProgressBar();
}*/
// on browser resize...
$(window).resize(function() {
  moveProgressBar();
});

// SIGNATURE PROGRESS
/* function moveProgressBar() {
  console.log("moveProgressBar");
  var getPercent = ($('.progress-wrap').data('progress-percent') / 100);
  var getProgressWrapWidth = $('.progress-wrap').width();
  var progressTotal = getPercent * getProgressWrapWidth;
  var animationLength = 2500; */ //only works for one
  function moveProgressBar() {
      console.log("moveProgressBar");
        $('.progress-wrap').each(function(){
      console.log("moveProgressBar");
      console.log($(this).data('progress-percent'));
      var getPercent = ($(this).data('progress-percent') / 100);
      var getProgressWrapWidth = $(this).width();
      var progressTotal = getPercent * getProgressWrapWidth;
      var animationLength = 2500;

  // on page load, animate percentage bar to data percentage length
  // .stop() used to prevent animation queueing
/*   $('.progress-bar').stop().animate({
    left: progressTotal
  }, animationLength);
} */ //for one
      $(this).find('.progress-bar').stop().animate({
        left: progressTotal
      }, animationLength);
  })
    }