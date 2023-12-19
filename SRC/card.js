/*
para manipular la informacion de un usuario necesito crear un perfil mediante un objeto de javascript
*/

const user = {
    username: 'danieldlcm86',
    age: 37,
    email: 'daniel@gmail.com',
    favfilms: ['Interstellar', 'Se7en', 'Mindhunter', 'Mean Girls', 'Shrek']
}

// Crear una funcion que me permita ingresar el objeto del perfil en el nodo padre

const creatUser = (user) => {
    document.getElementById("username").textContent = user.username;
    document.getElementById("age").textContent = user.age;
    document.getElementById("email").textContent = user.email;
    
    const ul = document.getElementById("fav-films");
    user.favfilms.forEach(film => {
        const li = document.createElement("li");
        li.textContent = film;
        ul.appendChild(li);
    });
    ul.style.listStyleType = "none";
    ul.style.padding = "0";
    ul.style.color = "#D9B70D";
}



//invocando la funcion 
creatUser(user);

//eventos para actualizar el username mediante el input boton
const inputName = document.getElementById("name");
const profileBtn = document.getElementById("btn-main");
const userName = document.getElementById("username");

profileBtn.addEventListener("click", () => {
    userName.textContent = inputName.value;
})