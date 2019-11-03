
var rateval = [] 
var desc = []
var week = []

function buttonboi() {
  var test = document.getElementById("rateInput")
  var testText = document.getElementById("mooddescribe")
  var dateControl = document.querySelector('input[type="date"]');
  //var turtle = dateControl.value.toString()
  rateval.push(test.value)
  desc.push(testText.value)
  week.push(dateControl.value)
  alert("buttonboi ran")
}


function setuptable(){
  alert("function ran")
  var values = [
      ['Rating', 'Journal'],
      [rateval[0], desc[0]],
      [rateval[1], desc[1]],
      [rateval[2], desc[2]],
      [rateval[3], desc[3]],
      [rateval[4], desc[4]],
      [rateval[5], desc[5]],
      [rateval[6], desc[6]]
      ]

var data = [{
  type: 'table',
  header: {
    values: [["<b>Days</b>"], [week[0]],[week[1]], [week[2]], [week[3]],[week[4]],[week[5]],[week[6]]],
    align: "center",
    line: {width: 1, color: 'black'},
    height: 60,
    fill: {color: "pink"},
    font: {family: "Roboto", size: 15, color: "white"}
  },
  cells: {
    values: values,
    align: "center",
    height: 60,
    line: {color: "black", width: 1},
    font: {family: "Roboto", size: 15, color: ["black"]}
  },
}]

var titleString = "Week of " + week[0].toString()
var layout = {
  title: titleString
}

Plotly.plot('graph', data, layout);
}

function setupgraph(){
var trace1 = {
  x: ["Day1","Day2","Day3","Day4","Day5","Day6","Day7"],
  y: [rateval[0],rateval[1],rateval[2],rateval[3],rateval[4],rateval[5],rateval[6]],
  type: 'scatter'
};
var data2 = [trace1];
var layout = {
  title:'Week Progress'
};

Plotly.newPlot('line', data2,layout);
}


