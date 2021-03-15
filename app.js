//STICKY NAVBAR
window.addEventListener('scroll',function(){
    const navigation = document.querySelector('.navigation');
    navigation.classList.toggle('sticky',window.scrollY > 0);
});

//BACK TO TOP BUTTON    
const topBtn = document.querySelector('.back-to-top');
topBtn.addEventListener('click',function(){
    window.scrollTo(0,0);
});