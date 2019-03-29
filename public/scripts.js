function offset(el) {
    let rect = el.getBoundingClientRect()
    scrollLeft = window.pageXOffset,
    scrollTop = window.pageYOffset;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}

const clickToScrollHome = document.getElementById('home');
clickToScrollHome.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
})

const about = document.getElementById('about');
const aboutOffset = offset(about);
const clickToScrollAbout = document.getElementById('clickToScrollAbout');
clickToScrollAbout.addEventListener('click', () => {
    window.scrollTo({
        top: aboutOffset.top,
        left: aboutOffset.left,
        behavior: 'smooth'
      });
})

const pictures = document.getElementById('pictures');
const picturesOffset = offset(pictures);
const clickToScrollPictures = document.getElementById('clickToScrollPictures');
clickToScrollPictures.addEventListener('click', () => {
    window.scrollTo({
        top: picturesOffset.top,
        left: picturesOffset.left,
        behavior: 'smooth'
      });
})
