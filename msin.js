
$(document).ready(function(){
    var d=new Date();
    var h=d.getHours();
    var m=d.getMinutes();
    var s=d.getSeconds();
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    
    var day = days[ d.getDay() ];
    var month = months[ d.getMonth() ];
    var num=d.getDate();
    
    $(".date").html(`<p>${day}, ${num} ${month}</p>`);
    $(".time").html(`<p>${h}:${m}:${s}</p>`);
});

setInterval(function() {
    var d=new Date();
    var h=d.getHours();
    var m=d.getMinutes();
    var s=d.getSeconds();
    if(h==0 && s==0 && m==0)
    {
        var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

var day = days[ d.getDay()];
var month = months[ d.getMonth() ];
var num=d.getDate();

$(".date").html(`<p>${day}, ${num} ${month}</p>`);
$(".time").html(`<p>${h}:${m}:${s}</p>`);
    }
    
    else
    $(".time").html(`<p>${h}:${m}:${s}</p>`);
}, 1000);

