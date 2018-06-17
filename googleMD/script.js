 //number of challengers for lopp purposes 
  var numberOfChallengers = 4;
  var chalengersName = new Array();
  chalengersName.push("Hector");
  chalengersName.push("Mehmet");
  chalengersName.push("Momo");
  chalengersName.push("Eddie");

  //countdown 
  //the last date where the challenge is completed 
  var countdown = new Array();
  countdown.push(new Date("Sep 17, 2018 01:00:00").getTime());
  countdown.push(new Date("Aug 23, 2018 01:00:00").getTime());
  countdown.push(new Date("Aug 23, 2018 01:00:00").getTime());
  countdown.push(new Date("Sep 12, 2018 01:00:00").getTime());

  //distance from current time to the last day of the challenge culmination 
  var distance = new Array();

  //days left 
  var days = new Array();
 

  var now = new Date().getTime();

  // Find the distance between now an the count down date
    // var distance = countDownDate - now; //original code
    for(var i=0;i<numberOfChallengers;i++){
      distance.push(countdown[i]-now);
    }
    
    // Time calculations for days, hours, minutes and seconds
    for(var i=0;i<numberOfChallengers;i++){
      days.push(100-(Math.floor(distance[i] / (1000 * 60 * 60 * 24))));
    }
    
  
  var x = setInterval(function() {

    //print in HTML the name and percentage
    var HTMLidDayLeftChallenger;

     //create a string for querySelector for each Challenger
    for(var i=0;i<numberOfChallengers;i++){
      HTMLidDayLeftChallenger = "dayLeftChallenger_" + i;
      document.getElementById(HTMLidDayLeftChallenger).innerHTML = chalengersName[i]+ ": " +  days[i]+" %";

      if (distance[i] < 0) {
        clearInterval(x);
        document.getElementById(HTMLidDayLeftChallenger).innerHTML = "Done!";
    }

    //original for other purposes: Get: hours, minutes , seconds
    /**
    var days = Math.floor(distance / (1000 * 60 * 60 * 24)); //original
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    */


    }
    // If the count down is over, write some text 
}, 1000);


  var p = new Array();
  for(var i=0;i<numberOfChallengers;i++){
    p.push('#p'+i);
  }

  /**
  for(var i=0;i<numberOfChallengers;i++){
    document.querySelector(p[i]).addEventListener('mdl-componentupgraded', function() {
      this.MaterialProgress.setProgress(20);
      console.log(days[i]);
    });
  }
*/
  
  //sorry I dont know why I cant do a loop here
  document.querySelector('#p0').addEventListener('mdl-componentupgraded', function() {
    this.MaterialProgress.setProgress(days[0]);
  });

  document.querySelector('#p1').addEventListener('mdl-componentupgraded', function() {
    this.MaterialProgress.setProgress(days[1]);
  });

  document.querySelector('#p2').addEventListener('mdl-componentupgraded', function() {
    this.MaterialProgress.setProgress(days[2]);
  });

  document.querySelector('#p3').addEventListener('mdl-componentupgraded', function() {
    this.MaterialProgress.setProgress(days[3]);
  });

  var totalFine = 10;
document.querySelector('#p5').addEventListener('mdl-componentupgraded', function() {
  this.MaterialProgress.setProgress(totalFine);
});



document.getElementById("totalAmount").innerHTML = "$" + totalFine;