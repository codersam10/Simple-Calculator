let string = "";

let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else{
        console.log(e.target);
        string = string + e.target.innerHTML;
        document.querySelector('input').value = string;
        }
        
    })

})

let spclKeys = document.querySelectorAll('.row1-button');
Array.from(spclKeys).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML == 'C' || e.target.innerHTML == 'AC'){
            string = "";
            document.querySelector('input').value = string
        }
        
    })

})