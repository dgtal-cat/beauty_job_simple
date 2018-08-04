const nextButton = document.getElementsByClassName('slide_changer_next')[0];
const prevButton = document.getElementsByClassName('slide_changer_prev')[0];
const slidesList = document.getElementsByClassName('slides_list')[0];
const maxIndex = document.getElementsByClassName('slide_item').length;
const sliderCounterActive = document.getElementsByClassName('slider_counter_active');
const sliderCounterAverage = document.getElementsByClassName('slider_counter_average');

let index = 1;
for (i=0;i<sliderCounterActive.length;i++) {
    sliderCounterActive[i].innerHTML = '0' + index;
    sliderCounterAverage[i].innerHTML = '0' + maxIndex;
}


console.log(index);
console.log(maxIndex);

nextButton.onclick = function () {
    if (index < maxIndex) {
        slidesList.style.left = '-' + index + '00%';
        index = index + 1;
    } else {
        slidesList.style.left = '0';
        index = 1;
    }
    for (i=0;i<sliderCounterActive.length;i++) {
        sliderCounterActive[i].innerHTML = '0' + index;
    }
    console.log('after click on NEXT index = ' + index);
};

prevButton.onclick = function () {
    if (index == 1) {
        index = maxIndex - 1;
    } else {
        index = index - 2;
    }
    slidesList.style.left = '-' + index + '00%';
    index = index + 1;
    for (i=0;i<sliderCounterActive.length;i++) {
        sliderCounterActive[i].innerHTML = '0' + index;
    }
    console.log('after click on PREV index = ' + index);
};