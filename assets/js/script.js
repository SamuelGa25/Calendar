$(document).ready(function(){

    let timeEl = $('<p>');
    let dayEl = $('<p>');
    let box1 = $('#div9');
    let box2 = $('#div10');
    let box3 = $('#div11');
    let box4 = $('#div12');
    let box5 = $('#div1');
    let box9 = $('#div2');
    let box10 = $('#div3');
    let box11 = $('#div4');
    let box12 = $('#div5');

    box1.val(localStorage.getItem('Entry1'));
    box2.val(localStorage.getItem('Entry2'));
    box3.val(localStorage.getItem('Entry3'));
    box4.val(localStorage.getItem('Entry4'));
    box5.val(localStorage.getItem('Entry5'));
    box9.val(localStorage.getItem('Entry9'));
    box10.val(localStorage.getItem('Entry10'));
    box11.val(localStorage.getItem('Entry11'));
    box12.val(localStorage.getItem('Entry12'));

    let button9 = $('#btn9');
    let button10 = $('#btn10');
    let button11 = $('#btn11');
    let button12 = $('#btn12');
    let button1 = $('#btn1');
    let button2 = $('#btn2');
    let button3 = $('#btn3');
    let button4 = $('#btn4');
    let button5 = $('#btn5');
    let clearBtn = $('#clearBtn');

    var timeNow = parseInt( moment().format('HH'));




























});

