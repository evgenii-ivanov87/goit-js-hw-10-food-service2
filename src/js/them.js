const themControlRefs = document.querySelector('#theme-switch-toggle')
const bodyRefs = document.querySelector('body')
console.log(bodyRefs)
console.dir(themControlRefs)
themControlRefs.addEventListener('change', changeThem)

function changeThem(e) {
    console.log(e)
    if (bodyRefs.classList.contains('dark-theme')){
        bodyRefs.classList.replace('dark-theme', 'light-theme')
    }
     bodyRefs.classList.add('dark-theme')
}