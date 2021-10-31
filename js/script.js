// 01001100

const input_byte = document.getElementById('input-byte');
const graficar = document.getElementById('graficar');
const graph_nrzs = document.querySelectorAll('#nrz-conteiner .graph-nrz');
const graph_amis = document.querySelectorAll('#ami-conteiner .graph-ami');
const graph_manchester = document.querySelectorAll('#manchester-conteiner .graph-manchester');
const graph_manchester_dif = document.querySelectorAll('#manchester-dif-conteiner .graph-manchester-dif');
const graph_pseudoternaria = document.querySelectorAll('#pseudoternaria-conteiner .graph-pseudoternaria');

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
        if (i == 0 && sw =='100'){
            sw += 'a';
        }
        switch (sw) {
            case '100a':
                graph_amis[i].classList.add('ami-cons');
                break;
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

function graficarManchesterDif() {
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
                if (bits.charAt(i) != bits.charAt(i - 1)){
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
        if(i == 0){
            sw += 'a';
        }
        switch (sw) {
            case '00a':
                graph_manchester_dif[i].classList.add('manchester-dif-cero-d');
                break;
            case '10a':
                graph_manchester_dif[i].classList.add('manchester-dif-uno');
                break;
            case '00':
                graph_manchester_dif[i].classList.add('manchester-dif-cero-d');
                break;
            case '01':
                graph_manchester_dif[i].classList.add('manchester-dif-cero-u');
                break;
            case '10':
                graph_manchester_dif[i].classList.add('manchester-dif-uno');
                break;
                case '11':
                graph_manchester_dif[i].classList.add('manchester-dif-uno-uno');
        }
        sw = '';
    }
}

function graficarPseudoternaria(){
    var uno = 0;
    var sw = '';
    for (let i = 0; i < bits.length; i++) {
        if (bits.charAt(i) == '1'){
            sw += '1';
            if (uno % 2 == 0){
                sw += '0';
            }
            else{
                sw += '1';
            }
        }
        else{
            sw += '0';
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
        if (i == 0 && sw == 000){
            sw += 'a';
        }
        switch (sw) {
            case '000a':
                graph_pseudoternaria[i].classList.add('ami-cons');
                break;
            case '000':
                graph_pseudoternaria[i].classList.add('ami-unob-unoa');
                break;
            case '001':
                graph_pseudoternaria[i].classList.add('ami-cero-unoa');
                break;
            case '010':
                graph_pseudoternaria[i].classList.add('ami-unoa-unob');
                break;
            case '011':
                graph_pseudoternaria[i].classList.add('ami-cero-unob');
                break;
            case '100':
                graph_pseudoternaria[i].classList.add('ami-cero');
                break;
            case '101':
                graph_pseudoternaria[i].classList.add('ami-unob-cero');
                break;
            case '110':
                graph_pseudoternaria[i].classList.add('ami-cero');
                break;
            case '111':
                graph_pseudoternaria[i].classList.add('ami-unoa-cero');
                break;
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
    for (var i = 0; i < graph_amis.length; i++) {
        graph_amis[i].classList.remove('ami-cero');
        graph_amis[i].classList.remove('ami-unob-cero');
        graph_amis[i].classList.remove('ami-unoa-cero');
        graph_amis[i].classList.remove('ami-unob-unoa');
        graph_amis[i].classList.remove('ami-cero-unoa');
        graph_amis[i].classList.remove('ami-unoa-unob');
        graph_amis[i].classList.remove('ami-cero-unob');
        graph_amis[i].classList.remove('ami-cons');
    }
}

function reiniciarManchester() {
    for (let i = 0; i < graph_manchester.length; i++) {
        graph_manchester[i].classList.remove('manchester-cero');
        graph_manchester[i].classList.remove('manchester-cero-cero');
        graph_manchester[i].classList.remove('manchester-uno');
        graph_manchester[i].classList.remove('manchester-uno-uno');
    }
}

function reiniciarManchesterDif() {
    for (let i = 0; i < graph_manchester_dif.length; i++) {
        graph_manchester_dif[i].classList.remove('manchester-dif-cero-d');
        graph_manchester_dif[i].classList.remove('manchester-dif-uno');
        graph_manchester_dif[i].classList.remove('manchester-dif-cero-u');
        graph_manchester_dif[i].classList.remove('manchester-dif-uno-uno');
    }
}

function reiniciarPseudoternaria(){
    for (var i = 0; i < graph_amis.length; i++) {
        graph_pseudoternaria[i].classList.remove('ami-cero');
        graph_pseudoternaria[i].classList.remove('ami-unob-cero');
        graph_pseudoternaria[i].classList.remove('ami-unoa-cero');
        graph_pseudoternaria[i].classList.remove('ami-unob-unoa');
        graph_pseudoternaria[i].classList.remove('ami-cero-unoa');
        graph_pseudoternaria[i].classList.remove('ami-unoa-unob');
        graph_pseudoternaria[i].classList.remove('ami-cero-unob');
        graph_pseudoternaria[i].classList.remove('ami-cons');
    }
}

graficar.addEventListener('click', () =>{
    bits = input_byte.value;
    if (expresiones.bits.test(bits)){
        reiniciarNRZ();
        graficarNRZ();
        reiniciarAMI();
        graficarAMI();
        reiniciarManchester();
        graficarManchester();
        reiniciarManchesterDif();
        graficarManchesterDif();
        reiniciarPseudoternaria();
        graficarPseudoternaria();
    }
    else{
        alert('Ingrese 8 dígitos que vayan del 0 al 1');
    }  
})