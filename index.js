const menu = document.getElementById('menu');
const bar = document.getElementById('bar');
const main__dishes = document.getElementById('main__dishes');
const main__bar = document.getElementById('main__bar');

menu.addEventListener('click', ()=>{
   main__bar.classList.add('__close');
   main__dishes.classList.remove('__close');
})
bar.addEventListener('click', ()=>{
   main__bar.classList.remove('__close');
   main__dishes.classList.add('__close');
})

