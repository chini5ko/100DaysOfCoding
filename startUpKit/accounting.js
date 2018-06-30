
console.log("Accounting is running");

//dealing with HTML
var monthsID = new Array();
for (var i = 0; i < 12; i++) {
    monthsID.push("month" + i);
}

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

var netMonth = new Array() ;
for (var i = 0; i < 12; i++) {
    if(i<2){
        netMonth.push (new months(monthNames[i], 1000 * (i + 1), 1005 * (i + 1)));
    }
    else{
        netMonth.push (new months(monthNames[i], 300 * (i + 1), 200 * (i + 1)));
    }
    
}
console.log(netMonth);



//object
function months(month, income, expense) {
    this.month = month;
    this.income = income;
    this.expense = expense;
    this.net = income - expense;
}

//what to do next (made it a loop)
//add edit function
//function 
function janBtn(){
    document.getElementById("accountingOption").innerHTML = "January";
    document.getElementById("myTable").innerHTML = "";
    document.getElementById("showIncome").innerHTML = "Inncome: " +  netMonth[0].income;
    document.getElementById("showExpense").innerHTML ="Expense: " +  netMonth[0].expense;
    document.getElementById("showNet").innerHTML =" <hr> Net: " + netMonth[0].net;
}

function febBtn(){
    document.getElementById("accountingOption").innerHTML = "February";
    document.getElementById("myTable").innerHTML = "";
    document.getElementById("showIncome").innerHTML = "Income: " +  netMonth[1].income;
    document.getElementById("showExpense").innerHTML ="Expense: " +  netMonth[1].expense;
    document.getElementById("showNet").innerHTML ="<hr> Net: " + netMonth[1].net;
}

function marBtn(){
    document.getElementById("accountingOption").innerHTML = "March";
    document.getElementById("myTable").innerHTML = "";
    document.getElementById("showIncome").innerHTML = "Income: " +  netMonth[2].income;
    document.getElementById("showExpense").innerHTML ="Expense: " +  netMonth[2].expense;
    document.getElementById("showNet").innerHTML ="<hr> Net: " + netMonth[2].net;
}

//table year data 


//accounting options
function balanceSheetBtn(){
    //blank other stuff first:
    document.getElementById("showIncome").innerHTML = "";
    document.getElementById("showExpense").innerHTML = "";
    document.getElementById("showNet").innerHTML = "";

    document.getElementById("accountingOption").innerHTML = "Balance sheet 2018";
    var table = document.getElementById("myTable");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    cell1.innerHTML = "Month";
    cell2.innerHTML = "Income";
    cell3.innerHTML = "Expense";
    cell4.innerHTML = "Net";

    for (var i = 11; i > -1; i--) {
        var table = document.getElementById("myTable");
        var row = table.insertRow(1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        
        cell1.innerHTML = netMonth[i].month;
        cell2.innerHTML = netMonth[i].income;
        cell3.innerHTML = netMonth[i].expense;
        cell4.innerHTML = netMonth[i].net;
        }
}