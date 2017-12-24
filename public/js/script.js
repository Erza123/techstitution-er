console.log("Hello world from Script.js");
/*var age= prompt("What is your age?");
/*var calculate=age*365;
alert(age + "years is roughly " + calculate +" days");*/

/*
if(age<18){
  alert("Sorry,you are not old enough to enter here");
}else if(age<21){
  alert("you can enter but cannot drink");
}else{
  alert("come on in.You can drink");
}*/

/*
var age= prompt("My age is ");
var age1=parseInt(age);
if(age1<0){
  alert("You aren't ready");
}else if(age1===21){
  alert("Happy 21s birthday")

}else if (age1 % 2!==0){
alert("Your age is odd")
}*/
/*
var nr=-10;
while( nr>-11 && nr<20){
  console.log("count is : " +nr)
  nr++;
}*/
/*
var count=10;
while(count>= 10 && count<=40){
  if(count % 2==0){
  console.log("numrat cift jane: " +count)
}
count++

}*/

/*for(var count=-10; count>=-10 && count<=19; count++){
  console.log(count);
}*/
/*
function isEven(x){
  if(x % 2===0){
    return true;
  }
  else{
    return false;
  }
}
var a = isEven(40);
console.log("40 eshte " +a);
console.log("31 eshte : " +isEven(31));
*/
/*
var person= {
  name:"Bob",
  age:"24",
  city:"LA"
};
console.log(person.name);
console.log(person.age);
console.log(person.city);
*/
$(document).ready(function(){

  Highcharts.chart('container', {

      title: {
          text: 'Tech'
      },

      subtitle: {
          text: 'Source techstitution'

      },

      yAxis: {
          title: {
              text: 'Number'
          }
      },
      legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle'
      },

      plotOptions: {
          series: {
              label: {
                  connectorAllowed: false
              },
              pointStart: 2010
          }
      },

      series: [{
          name: 'Installation',
          data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
      }, {
          name: 'Manufacturing',
          data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
      }, {
          name: 'Sales & Distribution',
          data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
      }, {
          name: 'Project Development',
          data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
      }, {
          name: 'Other',
          data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
      }],

      responsive: {
          rules: [{
              condition: {
                  maxWidth: 500
              },
              chartOptions: {
                  legend: {
                      layout: 'horizontal',
                      align: 'center',
                      verticalAlign: 'bottom'
                  }
              }
          }]
      }

  });




$('#trigger').click(function(){
  console.log("trigger is clicked!");
   $('body').css("background-color","blue");

});
$('div').css("background-color", "purple");
$('.container-fluid').css("background-color", "white");

$('.highlight').addClass('highlight-width');

$('#third').addClass('third-border');
});
