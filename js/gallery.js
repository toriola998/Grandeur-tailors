const allButtons = [...document.querySelectorAll('.gallery-btn')];
const imageItems = [...document.querySelectorAll('.grid-container img')];

allButtons.forEach( (btn) => {
    btn.addEventListener('click', (e) =>{
        if (e.target.id === 'native'){ 
            imageItems.forEach ( (image) => {
                if(image.classList.contains('native')){
                    image.style.display = 'block';  
                }else {
                    image.style.display = 'none'; 
                }
            })
        } else if (e.target.id === 'suits') {
            imageItems.forEach ( (image) => {
                if(image.classList.contains('suits')){
                    image.style.display = 'block';
                }else {
                    image.style.display = 'none'; 
                }
            })
        } 
    } )
})
