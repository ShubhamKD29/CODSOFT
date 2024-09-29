// sidebar open for mobile

function sidebarOpen(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function sidebarClose(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

document.querySelector('#btn-1').addEventListener('click', function(){
    window.open('assets/resume.pdf')
},false)

document.querySelector('#btn-2').addEventListener('click',function(){
    window.location.href = './#contact'
},false)
