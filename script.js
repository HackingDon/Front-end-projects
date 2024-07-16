let input = document.getElementById('input');
let buttons = document.getElementsByClassName('buttons');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click',(e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'D'){
            string = string.substring(0,string.length-1);
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string; 
            
        }
        
    })
});
const toggle = document.querySelector('.toggler-icon');
const calculator = document.querySelector('.calculator')
toggle.addEventListener('click',() =>{
    
    calculator.classList.toggle('dark');
    calculator.classList.toggle('light');
})
