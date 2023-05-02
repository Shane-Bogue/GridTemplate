document.querySelectorAll('div').forEach((div,i) => {
    div.style.backgroundColor = `hsl(0, 0%, ${i}0%)`
    div.style.color = 'white'
    div.style.display = 'grid'
    div.style.placeItems = 'center'
    div.style.fontSize = '2rem'
})

