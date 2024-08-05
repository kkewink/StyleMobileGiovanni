const nome = document.querySelector("#nome");
const idade = document.querySelector("#idade");
const telefone = document.querySelector("#telefone");

const button = document.querySelector("button");
const listaN = document.querySelector(".listaN");
const listaI = document.querySelector(".listaI");
const listaT = document.querySelector(".listaT");

/* Eventos de JavaScript*/
button.addEventListener("click", (event) =>{
event.preventDefault()

const inputNameValue = nome.value;
const inputAgeValue = idade.value;
const inputPhoneValue = telefone.value;

const templateHTMLNome =`<li>${inputNameValue} </li>`;
const templateHTMLIdade = `<li>${inputAgeValue}</li>`;
const templateHTMLTelefone = `<li>${inputPhoneValue}</li>`;
/* Condição*/

if(inputNameValue === ""){
    alert("Nome a partir de 3 caracteris")
    return false;
};
if(inputAgeValue <= 15){
    alert("Idade a partir dos 15 anos!!!!")
    return false;
};
if(inputPhoneValue <= 13){
    alert("Telefone apenas de 13 caracteris")
    return false;
};

/* Incluindo itens no HTML*/
listaN.innerHTML += templateHTMLNome; 
listaI.innerHTML += templateHTMLIdade;
listaT.innerHTML += templateHTMLTelefone;
/* Limpando meu campo*/
nome.value = "";
idade.value = "";
telefone.value = "";
});