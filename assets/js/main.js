var block = document.getElementsByClassName('slider_text')[0];

var initialText = block.innerHTML;

var slideList = document.getElementsByClassName('slide_item');
console.log(slideList);

function changeSlide() {
    for (i=0; i<slideList.length; i++) {
        console.log(slideList[i].style.left);
        console.log(slideList[i]);
        slideList[i].style.left = '-100%';
    }
}

/*function changeText () {
    if (block.innerHTML !== 'pshe') {
    block.innerHTML = 'pshe';
    } else {
        block.innerHTML = initialText;
    }
}*/

block.onclick = changeSlide;