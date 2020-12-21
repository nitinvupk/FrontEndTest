var value = data;
// ============================
var time = 15;
var initialOffset = '440';
var i = 1

$('.circle_animation').css('stroke-dashoffset', initialOffset-(1*(initialOffset/time)));

var interval = setInterval(function() {
    $('.timer').text(i);
    if (i == time) {  	
    clearInterval(interval);
        return;
    }
    $('.circle_animation').css('stroke-dashoffset', initialOffset-((i+1)*(initialOffset/time)));
    i++;  
}, 1000);
// =================================
var position = 0;
var duration;
function myFunction() {
    if(position>=value.length){
        close();
    }
    document.getElementById("close_section").onclick = function fun() {
        close();
    }
    document.getElementById("open_section").onclick = function fun() {
        open();
    }
    document.getElementById("answers").onclick = function fun() {
        document.getElementById("hide_div").style.display="none";
        document.getElementById("hide_second_div").style.display="none";
        document.getElementById("question").style.display="none";
        document.getElementById("answers").style.background="#ffffff";
        setTimeout(function(){
            document.getElementById("answers").style.display="none";;//this is window as setTimeout is a window function...
        }, 2000);
    }
    document.getElementById("user_name").innerHTML = value[position].name;
    document.getElementById("question").innerHTML = value[position].question;
    document.getElementById("answers").innerHTML = value[position].answers;
    document.getElementById("user_profile_img").src = value[position].image[0];
    duration = value[position].duration
    position += 1;
    setInterval("myFunction()", duration*1000);
}

function close() {
    console.log("close form")
    document.getElementById("profile").style.display="none";
}
// ===================================
function open( ) {
    console.log("open form")
    document.getElementById("profile").style.display="block";
    document.getElementById("hide_div").style.display="block";
    document.getElementById("hide_second_div").style.display="block";
    document.getElementById("question").style.display="block";
}
// ====================================

