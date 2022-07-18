$(function () {
    var header = $('.header'),
          introH = $('.intro').innerHeight(),
          scrolled = $(window).scrollTop() 


          fixedNav(scrolled)
    
        $(window).on("scroll", function () {
            scrolled = $(this).scrollTop();
    
            fixedNav(scrolled);
    
        });


function fixedNav (num) {
    if(num >= introH) {
        header.addClass(' active')
    } else {
        header.removeClass(' active')
    }  
}


const aniItems = document.querySelectorAll('.anim__item')
if(aniItems.length > 0) {
    window.addEventListener('scroll', animOnScroll)
    function animOnScroll(params) {
        for(let i = 0; i < aniItems.length; i++) {
            const aniItem = aniItems[i]
            const aniItemHeight = aniItem.offsetHeight
            const animOffset = offset(aniItem).top
            const animStart = 4

            let animPoint = window.innerHeight - aniItemHeight / animStart

            if(aniItemHeight > window.innerHeight) {
                animPoint = window.innerHeight - window.innerHeight / animStart
            }
            if (pageYOffset > (animOffset - animPoint) && pageYOffset < (animOffset + aniItemHeight)) {
                aniItem.classList.remove('hide')
            } else {
                if(!aniItem.classList.contains('anim__no__hide')) {
                    aniItem.classList.add('hide')
                }
            }
        }     
    }
    function offset(el) { 
        const rect = el.getBoundingClientRect(),
         scrollLeft = window.pageXOffset || document.documentElement.scrollLeft, 
         scrollTop = window.pageYOffset || document.documentElement.scrollTop; 
         return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
    setTimeout(() => {
        animOnScroll()
    }, 500)
}
})
