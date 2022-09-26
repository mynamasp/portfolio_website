const delay = (delayInms) => {
    return new Promise(resolve => setTimeout(resolve, delayInms));
  }

function ScrollToFrame2()
{
  document.querySelector('#bg-image2').scrollIntoView({
        behavior: 'smooth'
    });
    

}
    
function ScrollToFrame1()
{
    document.querySelector('#bg-image1').scrollIntoView({
        behavior: 'smooth'
    });
}

