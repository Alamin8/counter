const value=document.querySelector('#value')
const btns=document.querySelectorAll('.btn')
let count=0;
btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const buttonTarget=e.target.classList
        if(buttonTarget.contains('decrease')){
            count--
        }else if(buttonTarget.contains('increase')){
            count++
        }else{
            count=0
        }

        if(count>0){
            value.style.color='green'
        }if(count<0){
            value.style.color='red'
        }if(count===0){
            value.style.color='#102A42'
        }
        value.textContent=count;
    })
})