window.onload=function(){
    function resize(){
        let canvas = document.getElementById("canvas")
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
        let ctx = canvas.getContext("2d")
        game.resize(window.innerWidth,window.innerHeight,ctx)
    }
    window.addEventListener("resize",resize)
    resize()
    game.start()
}