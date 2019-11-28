let game=(function(){
    let context=null;
    return {
        resize:function(w,h,ctx){
            context=ctx;
            context.moveTo(0, 0);
            context.lineTo(w,h);
            context.stroke();
        },
        start:function(){
        }
    }
})()