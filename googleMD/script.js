document.querySelector('#p1').addEventListener('mdl-componentupgraded', function() {
    this.MaterialProgress.setProgress(5);
  });
  document.querySelector('#p2').addEventListener('mdl-componentupgraded', function() {
    this.MaterialProgress.setProgress(30);
  });

  document.querySelector('#p3').addEventListener('mdl-componentupgraded', function() {
    this.MaterialProgress.setProgress(30);
  });

  document.querySelector('#p4').addEventListener('mdl-componentupgraded', function() {
    this.MaterialProgress.setProgress(8);
  });


  
  
  //countdown 
  var countDownDate = new Date("Sep 17, 2018 01:00:00").getTime();
  var countDownDateMe = new Date("Aug 23, 2018 01:00:00").getTime();
  var countDownDateMo = new Date("Aug 23, 2018 01:00:00").getTime();
  var countDownDateEd = new Date("Sep 12, 2018 01:00:00").getTime();

 var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now an the count down date
    var distance = countDownDate - now;
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));

    //days for all challengers 
    var distanceMe = countDownDateMe -  now;
    var distanceMo = countDownDateMo - now;
    var distanceEd = countDownDateEd - now; 

    var daysMe = Math.floor(distanceMe / (1000 * 60 * 60 * 24));
    var daysMo = Math.floor(distanceMo / (1000 * 60 * 60 * 24));
    var daysEd = Math.floor(distanceEd / (1000 * 60 * 60 * 24));

    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    var daysLeft = 100 - days;
    // Output the result in an element with id="demo"
    document.getElementById("dayLeftChallenger_1").innerHTML = "Hector: " +  daysLeft+"%";
    document.getElementById("dayLeftChallenger_2").innerHTML = "Mehmet: " +  (100 - daysMe)+"%";
    document.getElementById("dayLeftChallenger_3").innerHTML = "Momo:   " +  (100- daysMo)+"%";
    document.getElementById("dayLeftChallenger_4").innerHTML = "Eddie:  " +  (100 - daysEd)+"%";
    //console.log("day left : " + daysLeft);
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("dayLeft").innerHTML = "Done!";
    }
}, 1000);

document.querySelector('#p5').addEventListener('mdl-componentupgraded', function() {
  this.MaterialProgress.setProgress(60);
});
