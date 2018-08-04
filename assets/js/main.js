const nextButton = document.getElementsByClassName('slide_changer_next')[0];
const prevButton = document.getElementsByClassName('slide_changer_prev')[0];
const slidesList = document.getElementsByClassName('slides_list')[0];
const maxIndex = document.getElementsByClassName('slide_item').length;

let index = 0;
console.log(index);
console.log(maxIndex);

nextButton.onclick = function () {
    if (index < maxIndex) {
        index = index + 1;
        slidesList.style.left = '-' + index + '00%';
    } else {
        index = 0;
    }
    console.log('after click on NEXT index = ' + index);
};

prevButton.onclick = function () {
    if (index = 1) {
        index = maxIndex-1;
        slidesList.style.left = '-' + index + '00%';
    } else {
        index = index-1;
        slidesList.style.left = '-' + index + '00%';
    }
    console.log('after click on PREV index = ' + index);
};