const allButtons = [...document.querySelectorAll('.btn')];
const imageItems = [...document.querySelectorAll('.cloth-style')];

allButtons.forEach ( (btn) => {
btn.addEventListener('click', (e) => {
    if (e.target.id === 'all'){
      imageItems.forEach ( (image) => {
        image.style.display = 'block';
      })
    } else if (e.target.id === 'native'){
        imageItems.forEach ( (image) => {
            if(image.classList.contains('native')){
                image.style.display = 'block';
            }else {
                image.style.display = 'none'; 
            }
        })
    } else if ( e.target.id === 'corporate'){
        imageItems.forEach ( (image) => {
            if(image.classList.contains('corporate')){
                image.style.display = 'block';
            }else {
                image.style.display = 'none'; 
            }
        })
    } else if ( e.target.id === 'suits'){
        imageItems.forEach ( (image) => {
            if(image.classList.contains('suits')){
                image.style.display = 'block';
            }else {
                image.style.display = 'none'; 
            }
        })
    }
})

})