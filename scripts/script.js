
const hiddenElements = document.querySelectorAll('.text')

window.addEventListener('scroll', function() {
    let scrollX = document.documentElement.scrollTop

    for (let i = 0; i < hiddenElements.length; i++) 
    {
        let text = hiddenElements[i]
        let sectionTop = text.offsetTop
       
        if (scrollX + window.innerHeight > sectionTop + 100) 
        {
            text.classList.remove('fadeOut')
            text.classList.add('fadeIn')
        } 
        else 
        {
            text.classList.remove('fadeIn')
            text.classList.add('fadeOut')
        }
    }
})

window.onscroll = function() {stickyHeader()};

var header = document.getElementById("header");

var sticky = header.offsetTop;

function stickyHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}