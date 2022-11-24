const cards = document.querySelectorAll('.beta');
const betaInfo = document.querySelectorAll('.show');

console.log(betaInfo)

cards.forEach((card)=>{
    card.addEventListener('click',()=>{
        card.classList.toggle('more-info')
    })
})
