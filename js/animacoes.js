export function exit(element){
    element.style.animation = 'exit .8s'
    setTimeout(()=>{
        element.style.display = 'none'
    }, 800)
}

export function entrar(element){
    element.style.animation = 'enter .8s'
    setTimeout(()=>{
        element.style.display = 'flex'
    }, 800)
}
export function esmaecer(element,reverso=false){
    element.style.animation = `esmaecer${reverso? '-reverso': ''} .8s`
    setTimeout(()=>{
        element.style.opacity = `${reverso? '0': '1'} `
    }, 500)
}