
var countDownTime = new Time ("00:30").getTime();

var display = setInterval(function() {

}
)



//  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
var minutes = Math.floor(t / 60);
  var seconds = t - (minutes * 60);

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  if (minutes === 0) {
    minutes = "00";
  }

  else if (minutes < 10) {
    minutes = "0" + minutes;
  }

  return minutes + ":" + seconds;

