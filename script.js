const starsEl = document.querySelectorAll('.fa-star');
const emojiEl = document.querySelectorAll('.me');
const colorArray = ['red', 'orange', 'lightblue', 'lightgreen', 'green' ];

updaterating(0)

starsEl.forEach((starsEl, index) =>{
    starsEl.addEventListener('click', () =>{
        console.log('clicked');
        updaterating(index) 
    });
});

function updaterating(index) {
    starsEl.forEach((starsEl, idx)=>{
        if(idx < index + 1){
            starsEl.classList.add('active')
        }else{
            starsEl.classList.remove('active')
        }
    });
emojiEl.forEach(emojiEl=>{
    emojiEl.style.transform = `translateX(-${index * 34.2}px)`;
    emojiEl.style.color = colorArray[index]
});
}




    
