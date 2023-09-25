document.addEventListener('mousemove', e => {
    const content = document.querySelector('.content')
    const bubble = document.createElement('span')

    let x = e.offsetX ;
    let y = e.offsetY

    bubble.style.left = x + 'px'
    bubble.style.top = y + 'px'

    let size = Math.floor(Math.random()*50)
    bubble.style.width = size + 20 + 'px'
    bubble.style.height = size + 20 + 'px'

    let rotate_deg = Math.floor(Math.random()*360)

    bubble.style.transform = `rotate(${rotate_deg}deg)`


    content.appendChild(bubble)
    
    setTimeout(()=>{
        bubble.remove()
    },3000)

})