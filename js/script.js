// 01001100

const input_byte = document.getElementById('input-byte');
const graficar = document.getElementById('graficar');
const graph_nrzs = document.querySelectorAll('#nrz-conteiner .graph-nrz');
const graph_amis = document.querySelectorAll('#ami-conteiner .graph-ami');
const graph_manchester = document.querySelectorAll('#manchester-conteiner .graph-manchester');


var bits = '';

const expresiones ={
    bits: /^[0-1]{8}$/
}

function graficarNRZ(){
    var sw = '';
    for (var i = 0; i < bits.length; i++) {
        if (bits.charAt(i) == 0){
            sw += "0";
        }
        else{
            sw += "1";
        }
        if ((i + 1) <= bits.length){
            if (i > 0){
                if (bits.charAt(i) == bits.charAt(i - 1)){
                    sw += "0";
                }
                else{
                    sw += "1";
                }
            }
            else{
                sw += "0";
            }
        }
        else{
            sw += "0";
        }
        switch (sw) {
            case '00':
                graph_nrzs[i].classList.add('cero');
                break;
            case '01':
                graph_nrzs[i].classList.add('uno-cero');
                break;
            case '10':
                graph_nrzs[i].classList.add('uno');
                break;
            case '11':
                graph_nrzs[i].classList.add('cero-uno');
        }
        sw = '';
    }
}

function graficarAMI(){
    var uno = 0;
    var sw = '';
    var code = ['']
    for (let i = 0; i < bits.length; i++) {
        if (bits.charAt(i) == '0'){
            sw += '0';
            if (uno % 2 == 0){
                sw += '0';
            }
            else{
                sw += '1';
            }
        }
        else{
            sw += '1';
            if (uno % 2 == 0){
                sw += '0';
            }
            else{
                sw += '1';
            }
            uno++;
        }
        if(i > 0){
            if (bits.charAt(i) == bits.charAt(i -1)){
                sw += '0';
            }
            else{
                sw += '1';
            }
        }
        else{
            sw += '0';
        }
        switch (sw) {
            case '000':
                graph_amis[i].classList.add('ami-cero');
                break;
            case '001':
                graph_amis[i].classList.add('ami-unob-cero');
                break;
            case '010':
                graph_amis[i].classList.add('ami-cero');
                break;
            case '011':
                graph_amis[i].classList.add('ami-unoa-cero');
                break;
            case '100':
                graph_amis[i].classList.add('ami-unob-unoa');
                break;
            case '101':
                graph_amis[i].classList.add('ami-cero-unoa');
                break;
            case '110':
                graph_amis[i].classList.add('ami-unoa-unob');
                break;
            case '111':
                graph_amis[i].classList.add('ami-cero-unob');
                break;
        }
        sw = '';
    }
}

function graficarManchester() {
    var sw = 'a';
    for (var i = 0; i < bits.length; i++) {
        if (bits.charAt(i) == 0){
            sw += "0";
        }
        else{
            sw += "1";
        }
        if ((i + 1) <= bits.length){
            if (i > 0){
                if (bits.charAt(i) == bits.charAt(i - 1)){
                    sw += "0";
                }
                else{
                    sw += "1";
                }
            }
            else{
                sw += "0";
            }
        }
        else{
            sw += "0";
        }
        switch (sw) {
            case 'a00':
                graph_manchester[i].classList.add('manchester-cero');
                break;
            case 'a10':
                graph_manchester[i].classList.add('manchester-uno');
                break;
            case '00':
                graph_manchester[i].classList.add('manchester-cero-cero');
                break;
            case '01':
                graph_manchester[i].classList.add('manchester-cero');
                break;
            case '10':
                graph_manchester[i].classList.add('manchester-uno-uno');
                break;
            case '11':
                graph_manchester[i].classList.add('manchester-uno');
        }
        sw = '';
    }
}

function reiniciarNRZ(){
    for (var i = 0; i < graph_nrzs.length; i++) {
        graph_nrzs[i].classList.remove('cero');
        graph_nrzs[i].classList.remove('cero-uno');
        graph_nrzs[i].classList.remove('uno');
        graph_nrzs[i].classList.remove('uno-cero');
    }
}

function reiniciarAMI(){
    for (var i = 0; i < graph_nrzs.length; i++) {
        graph_amis[i].classList.remove('ami-cero');
        graph_amis[i].classList.remove('ami-unob-cero');
        graph_amis[i].classList.remove('ami-unoa-cero');
        graph_amis[i].classList.remove('ami-unob-unoa');
        graph_amis[i].classList.remove('ami-cero-unoa');
        graph_amis[i].classList.remove('ami-unoa-unob');
        graph_amis[i].classList.remove('ami-cero-unob');
    }
}

graficar.addEventListener('click', () =>{
    bits = input_byte.value;
    if (expresiones.bits.test(bits)){
        reiniciarNRZ();
        graficarNRZ();
        reiniciarAMI();
        graficarAMI();

        graficarManchester();
    }
    else{
        alert('Ingrese 8 dígitos que vayan del 0 al 1');
    }  
})