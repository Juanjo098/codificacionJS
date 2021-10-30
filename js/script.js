const input_byte = document.getElementById('input-byte');
const graficar = document.getElementById('graficar');
const graph_nrzs = document.querySelectorAll('#nrz-conteiner .graph-nrz')

var bits = '';
var sw = '';

const expresiones ={
    bits: /^[0-1]{8}$/
}

function graficarNRZ(){

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

function reiniciar(){
    for (var i = 0; i < graph_nrzs.length; i++) {
        graph_nrzs[i].classList.remove('cero');
        graph_nrzs[i].classList.remove('cero-uno');
        graph_nrzs[i].classList.remove('uno');
        graph_nrzs[i].classList.remove('uno-cero');
    }
}

graficar.addEventListener('click', () =>{
    bits = input_byte.value;
    if (expresiones.bits.test(bits)){
        reiniciar();
        graficarNRZ();
    }
    else{
        alert('Ingrese 8 dígitos que vayan del 0 al 1');
    }
})