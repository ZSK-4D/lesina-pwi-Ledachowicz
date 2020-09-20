const inputs = document.querySelectorAll('.contact-input');
const red = document.querySelector('.red-text');
let nameCont = document.querySelector('.name-cont');
let textCont = document.querySelector('.text-cont');

function formula() {
    const check = document.querySelector('.regulations').checked;
    const name = document.querySelector('#name').value;
    const surname = document.querySelector('#surname').value;
    const Email = document.querySelector('#Email').value;
    const Text = document.querySelector('#Text').value;

    nameCont.innerHTML=name + '&nbsp;'+surname + '</br>';
    textCont.innerHTML='Odpowiedź na twoją wiadomość o treści: ' + '"' + Text + ' "' + ' zostanie przesłana na podany adres:' + '</br>' + Email;
    red.style='display: none;'

    inputs.forEach (el => {
        if (el.value =='') {
            red.style='display: block;'
            red.innerHTML='Zapisz każdego inputa';
            nameCont.innerHTML='';
            textCont.innerHTML='';
        };
    });

    if (!check) {
        red.style='display: block;'
        red.innerHTML='Musisz zapoznać się z regulaminem';
        nameCont.innerHTML='';
        textCont.innerHTML='';
    }

}

function czy() {
    inputs.forEach (el => {
        el.value='';
    });
}
