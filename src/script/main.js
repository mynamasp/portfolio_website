const delay = (delayInms) => {
    return new Promise(resolve => setTimeout(resolve, delayInms));
  }

function ScrollToFrame2()
{
  document.querySelector('#menu').scrollIntoView({
        behavior: 'smooth'
    });
    

}
    
function ScrollToFrame1()
{
    document.querySelector('#landing').scrollIntoView({
        behavior: 'smooth'
    });
}

let header = document.getElementById('landing-wrapper');

function fadeOutOnScroll(element) {
	if (!element) {
        console.log('Div not found')
		return;
	}
	
	let distanceToTop = window.pageYOffset + element.getBoundingClientRect().top;
	let elementHeight = element.offsetHeight;
	let scrollTop = document.documentElement.scrollTop;
	
	let opacity = 1;
	
	if (scrollTop > distanceToTop) {
		opacity = 1 - (scrollTop - distanceToTop) / (elementHeight/2);
	}
	
	if (opacity >= 0) {
		element.style.opacity = opacity;
	}
}

function scrollHandler() {
	fadeOutOnScroll(header);
}

window.addEventListener('scroll', scrollHandler);

const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.7
  };
  
  function observerCallback(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // fade in observed elements that are in view
        entry.target.classList.replace('fade-Out', 'fade-In');
      } else {
        // fade out observed elements that are not in view
        entry.target.classList.replace('fade-In', 'fade-Out');
      }
    });
  }

  const observer = new IntersectionObserver(observerCallback, observerOptions);
  
  const fadeElms = document.querySelectorAll('#menu');
  fadeElms.forEach(el => observer.observe(el));

