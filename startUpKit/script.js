  document.querySelector('#p3').addEventListener('mdl-componentupgraded', function() {
    this.MaterialProgress.setProgress(50);
    this.MaterialProgress.setBuffer(5);
  });

  var grossProfit = 0;
  var revenue = 0;
  var cost = 0;

  function save(){

    revenue = document.getElementById("revenue").value;
    cost = document.getElementById("cost").value;

    console.log(revenue);
    console.log(cost);

    grossProfit = revenue-cost;

    document.getElementById("show").innerHTML = "$" + grossProfit;
  }
