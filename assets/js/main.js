var block = document.getElementsByClassName('slider_text')[0];

var initialText = block.innerHTML;

function changeText () {
    console.log(block.innerHTML);
    if (block.innerHTML !== 'pshe') {
    block.innerHTML = 'pshe';
    } else {
        block.innerHTML = initialText;
    }
}

block.onclick = changeText;