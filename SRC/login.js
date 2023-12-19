const emailInput = document.getElementById("email");
const submitButton = document.getElementById("btn-submit");
const emailREGEX = /^[\w.+\-]+@gmail\.com$/;

//deshabilitar el button 
submitButton.disabled = true;

//Evento para input y que nos mande a index.html

emailInput.addEventListener("input", (e) =>{
    const text = e.target.value;

    if(emailREGEX.test(text) == true) {
        submitButton.disabled = false;
    }
})