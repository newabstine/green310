$(document).ready(function(){
// article 의 가로값을 구하고
// article 의 갯수를 구하고 
// article 가로 값과 갯수를 곱해서 section 가로값에 대입해라

// 갯수 구하기 
let numAc = $('article').size();
console.log(numAc)

// 가로값 구하기 
let widAc = $('article').width();
console.log(widAc)

// 세로값 구하기
let htAc = $('article').height()
console.log(htAc)

let winht = $(window).height()
console.log(winht)

let secTop = (winht/2)-(htAc/2)
console.log(secTop)


// section 가로값 설정하기
$('section').width(600+(widAc+20)*numAc)
$('body').height((widAc+20)*numAc)
$('section').css({"top": secTop})
$('nav').css({"top": secTop-50})



$(window).scroll(function(){
let sc = $(this).scrollTop()
$('h1').text(sc)
$('section').css({"left": -sc})
});

$('article h2').click(function(){
    // $('section').width()
    $('article').stop().animate({width: 180},500)
    $(this).parent('article').stop().animate({width: 600},800)
})


// 
})