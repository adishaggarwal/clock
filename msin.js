
$(document).ready(function(){
    dup();
});

setInterval(function() {
    var d=new Date();
    var h=d.getHours();
    var m=d.getMinutes();
    var s=d.getSeconds();
    if(h<10)
    {
        var st=''+h;
        st='0'+st;
        s=st;
    }
    if(m<10)
    {
        var sr=''+m;
        sr='0'+sr;
        m=sr;
    }
    if(s<10)
    {
        var ss=''+s;
        ss='0'+ss;
        s=ss;
    }
    
    $(".time").html(`<p>${h}:${m}:${s}</p>`);
}, 1000);


function dup()
{
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
}
