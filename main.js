let input_1 = document.querySelector('.input_1');
let input_2 = document.querySelector('.input_2');
let action_btn = document.querySelector('.action_btn');
let show_value = document.querySelector('.show_value');
let amount_error = document.querySelector('.amount_error');
let percent_error = document.querySelector('.percent_error');

action_btn.addEventListener('click', () => {
    let amount = Number(input_1.value);
    let Percent = Number(input_2.value);
    let totalAmount = amount + (amount * Percent / 100);

    if(amount){
        show_value.innerText = totalAmount ;
        if(!Percent){
            percent_error_hander()
        }
    }else if(amount == "" && Percent == ""){
        percent_error_hander()
        amount_error_hander()
    }
    else{
        amount_error_hander()
    }
    
    function amount_error_hander(){
        amount_error.innerText = "Enter Your Billing Amount ! "; 
        amount_error.classList.remove('hidden');
        setTimeout(() => {
            amount_error.innerText = " "; 
            amount_error.classList.add('hidden');
        },3000)
        show_value.innerText = '0.00' ;
   }

    function percent_error_hander(){
        percent_error.innerText = "Enter Your percentage % !"; 
        percent_error.classList.remove('hidden');
        setTimeout(()=>{
            percent_error.innerText = " "; 
            percent_error.classList.add('hidden');
        } , 3000)
        show_value.innerText = '0.00' ;
    }
});

    