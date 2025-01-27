let type_discount_wrapper = document.querySelector('.type_discount_wrapper');
let type_button = document.querySelector('.type_button');
let dropdown_Wrapper = document.querySelector('.dropdown_Wrapper');
let type_discount_input = document.querySelector('.type_discount_input');
let bdt = document.querySelector('.bdt');
let percent = document.querySelector('.percent');
let discount_input = document.querySelector('.discount_input');
let orginal_price_input = document.querySelector('.orginal_price_input');
let you_pay = document.querySelector('.you_pay');
let saving = document.querySelector('.saving');
let type_discount_value = document.getElementsByClassName('type_discount_value');

function type_discount_Handler() {
    type_discount_wrapper.addEventListener('click', () => {
        if( dropdown_Wrapper.classList.contains('hidden')){
            dropdown_Wrapper.classList.remove('hidden') ; 
            type_button.innerHTML = `<i class="ph ph-caret-up"></i>`;
        }else{
            dropdown_Wrapper.classList.add('hidden') ; 
            type_button.innerHTML = `<i class="ph ph-caret-down"></i>`;
        }
    });
    for(let i = 0; i < type_discount_value.length; i++) {
        type_discount_value[i].addEventListener('click', () =>{
            type_discount_input.value = type_discount_value[i].textContent;
            percent_fixedAmount_handelar(i)
        });
    }
}

function percent_fixedAmount_handelar(index){
    if(index == 0){
        percent.classList.remove('hidden');
        bdt.classList.add('hidden');
        discount_percentToTaka();
    }else{
        bdt.classList.remove('hidden');
        percent.classList.add('hidden');
        discount_bdtToTaka()
    }

  function discount_percentToTaka(){
    orginal_price_input.addEventListener('keyup', () =>{
        orginal_price_input.value;
        total_calculate_percent_handelar();
    });
    discount_input.addEventListener('keyup', () =>{
        discount_input.value;
        total_calculate_percent_handelar();
    });

    function total_calculate_percent_handelar(){
        let price = orginal_price_input.value;
        let discount = discount_input.value;
        percent_discount = ( price * discount ) / 100;
        total_price = price - percent_discount
        you_pay.value = total_price;
        saving.value = percent_discount;
    }
  }
  function discount_bdtToTaka(){
    orginal_price_input.addEventListener('keyup', () =>{
        orginal_price_input.value;
        total_calculate_taka_handelar()
    });
    discount_input.addEventListener('keyup', () =>{
        discount_input.value;
        total_calculate_taka_handelar()
    });

    function total_calculate_taka_handelar(){
        let price = orginal_price_input.value;
        let discount = discount_input.value;
        taka_discount = price - discount;
        you_pay.value = taka_discount;
        saving.value = discount;
    }
  }

}

type_discount_Handler();
