(function(){
    'use strict';

    let btn =document.getElementById('btn');
    const div = document.createElement('div');
    div.classList.add('text');
    div.textContent = ""

    btn.addEventListener('click', function(){
        let n = Math.random();

        if(n < 0.1){
            this.textContent = "大吉"
            div.textContent = "最高に良い流れです。全てがうまくいきます。どんどん挑戦しましょう"
            document.body.appendChild(div);
        }else if(n < 0.2){
            this.textContent = "中吉"
            div.textContent = "良い流れです。たぶんうまくいきます。自信を持って行動しましょう。"
            document.body.appendChild(div);

        }else if(n < 0.6){
            this.textContent = "末吉"
            div.textContent = "良い感じです。落ち着いて行動すれば流れをつかめます。冷静にいきましょう。"
            document.body.appendChild(div);

        }else if(n < 0.95){
            this.textContent = "凶"
            div.textContent = "流れが悪いですね。一度か二度、ゆっくりと深呼吸をしてみましょう。"
            document.body.appendChild(div);

        }else{
            this.textContent = "大凶"
            div.textContent = "流れが悪いですね。生きてるだけで儲けもんと思っておきましょう。"
            document.body.appendChild(div);

        }
    });
    btn.addEventListener('mousedown',function(){
        this.className ='pushed';
    });
    btn.addEventListener('mouseup',function(){
        // this.textContent = 'hit!'
        this.className ='';
    });


})();
