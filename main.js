let input_1 = document.querySelector('.input_1');
let input_2 = document.querySelector('.input_2');
let result = document.querySelector('.value_show');
let action_btn = document.querySelector('.action_btn');


action_btn.addEventListener('click', () => {
    let amount = Number(input_1.value);
    let persentage = Number(input_2.value);
    let totalAmount = amount + (amount * persentage / 100);
    if(amount){
        result.innerText = totalAmount;
        if(!persentage){
            alert("Enter Your percentage");
            result.innerText = '0';
        }
    }else{
        alert("Enter Your Billing Amount");
        result.innerText = '0';
    }

});

    