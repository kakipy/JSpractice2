(function(){
    'use strict';

    let btn =document.getElementById('btn');
    btn.addEventListener('mousedown',function(){
        const result =['大吉','中吉','凶','末吉'];
        // let n = Math.floor(Math.random()*3);
        let n = Math.floor(Math.random()*result.length);

        this.textContent = result[n];
    });
    btn.addEventListener('mousedown',function(){
        this.className ='pushed';
    });
    btn.addEventListener('mouseup',function(){
        // this.textContent = 'hit!'
        this.className ='';
    });


})();
