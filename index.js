let a = document.querySelector('[data-start]');
let res = document.getElementById("hha")
a.forEach(button => {
    button.addEventListener('click', () => {
        res.innerText('clicked')
    })
})