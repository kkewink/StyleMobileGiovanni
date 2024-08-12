const nome = document.querySelector("#nome");
const idade = document.querySelector("#idade");
const telefone = document.querySelector("#telefone");

const button = document.querySelector("button");

const listona = document.querySelector(".listona")
 
/* Eventos de JavaScript*/
button.addEventListener("click", (event) =>{
event.preventDefault()



const inputNameValue = nome.value;
const inputAgeValue = idade.value;
const inputPhoneValue = telefone.value;
const removeHTML = `
   <div class="dados">
        <h4>NOME:<p>${inputNameValue}</p></h4>       
        <h4>IDADE:<p>${inputAgeValue}</p></h4>   
        <h4>TELEFONE:<p>${inputPhoneValue}</p></h4>

         <button class="jogafora"><img src="/img/lixo-removebg-preview.png" alt=""></button>
    </div>

`;

/* Condição*/

if(inputNameValue === ""){
    alert("Nome a partir de 3 caracteris")
    return false;
}
if(inputAgeValue <= 15){
    alert("Idade a partir dos 15 anos!!!!")
    return false;
};
if(inputPhoneValue <= 13){
    alert("Telefone apenas de 13 caracteris")
    return false;
};

/* Incluindo itens no HTML*/
// listona.innerHTML += templateHTMLNome; 
// listona.innerHTML += templateHTMLIdade;
// listona.innerHTML += templateHTMLTelefone;

listona.innerHTML += removeHTML;    

/* Limpando meu campo*/
nome.value = "";
idade.value = "";
telefone.value = "";
funcDeletar()

});


const jorafora = document.getElementsByClassName("jogafora");
console.log(jorafora);




async function funcDeletar() {

    for (let index = 0; index < jorafora.length; index++) {

        jorafora[index].addEventListener("click", (event) =>{
            event.preventDefault()
            if(jorafora.length === 1){
                jorafora[0].parentElement.remove()
            }else {
                jorafora[index].parentElement.remove()
            }
            
            }); 
    }
    


}