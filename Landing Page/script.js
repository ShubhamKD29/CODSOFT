const prev = document.querySelector('.prev')
const next = document.querySelector('.next')

next.addEventListener('click', function(){
    const items = document.querySelectorAll('.items')
    document.querySelector('.slider').appendChild(items[0])
    
})

prev.addEventListener('click', function(){
    const items = document.querySelectorAll('.items')
   document.querySelector('.slider').prepend(items[items.length-1])
})
   