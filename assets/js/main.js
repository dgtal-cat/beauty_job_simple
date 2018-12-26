const nextButton = document.getElementsByClassName('slide_changer_next')[0];
const prevButton = document.getElementsByClassName('slide_changer_prev')[0];
const slidesList = document.getElementsByClassName('slides_list')[0];
const maxIndex = document.getElementsByClassName('slide_item').length;
const sliderCounterActive = document.getElementsByClassName('slider_counter_active')[0];
const sliderCounterAverage = document.getElementsByClassName('slider_counter_average')[0];
const sliderStripe = document.getElementsByClassName('slide_stripe_list')[0];
const slideStripeItemsList = [];

function slideStripeInit () {
    for (i=0;i<maxIndex;i++) {
        slideStripeItemsList.push(document.createElement('li'));
        slideStripeItemsList[i].className = 'slide_stripe';
        sliderStripe.appendChild(slideStripeItemsList[i]);
        slideStripeItemsList[i].style.width = 100/maxIndex + '%';
    }

    slideStripeItemsList[0].classList.add('slide_stripe_active');
}

slideStripeInit();

let index = 1;

sliderCounterActive.innerHTML = '0' + index;
sliderCounterAverage.innerHTML = '0' + maxIndex;

console.log(index);
console.log(maxIndex);

function nextSlide () {
    slideStripeItemsList[index-1].classList.remove('slide_stripe_active');

    if (index < maxIndex) {
        slidesList.style.left = '-' + index + '00%';
        index = index + 1;
    } else {
        slidesList.style.left = '0';
        index = 1;
    }
    sliderCounterActive.innerHTML = '0' + index;
    console.log('after click on NEXT index = ' + index);
    slideStripeItemsList[index-1].classList.add('slide_stripe_active');
}

function prevSlide () {
    slideStripeItemsList[index-1].classList.remove('slide_stripe_active');

    if (index === 1) {
        index = maxIndex - 1;
    } else {
        index = index - 2;
    }
    slidesList.style.left = '-' + index + '00%';
    index = index + 1;
    sliderCounterActive.innerHTML = '0' + index;
    console.log('after click on PREV index = ' + index);
    slideStripeItemsList[index-1].classList.add('slide_stripe_active');
}

setInterval(nextSlide, 3000);
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;