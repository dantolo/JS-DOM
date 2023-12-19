/*
Manipulacion del DOM.
-Leer y traer nodos del arbol del DOM.
    document.getElementsById (trae elementos por Id)
    document.getElementsByClassName (Trae elementos con class)
    document.getElementsByTagName (trae elementos con etiquetas)
    */

    //getElementById
    const titulo = document.getElementById("title1");
    console.log(titulo);
    console.log(titulo.innerText);

    //getElementsByClassName

    const titulos = document.getElementsByClassName("title");
    console.log(titulos);
    console.log(titulos.lenght);
    console.log(typeof titulos);

    // getElementsByTagName

    const tituloH3 = document.getElementsByTagName("h3");
    console.log(tituloH3);
    console.log(tituloH3[0].innerText);

    /* Metodos para llamar elementos mediante selectores de CSS
    Se usa para procesos mas especificos y la sintaxis querySelector
        -document.querySelector("selector"); #, ., <>
        -document.quuerySelectorAll(). Seleccionar cualquier elemento que se especifique.
    siempre van a traer el primer elemento con el selector indicado.
    */
   //querySelector
   const query = document.querySelector("#title4");
   console.log(query.innerText);

   const queryClass = document.querySelector(".title");
   console.log(queryClass);

   //querySelectorAll
   const queryClassAll = document.querySelectorAll(".title");
   console.log(queryClassAll);

   // Manipular elementos del DOM (styles) con JS
   titulo.style.textAlign = "center";
   titulo.style.color = "#5058F2";

   //Manipular el texto de un elemento 
   const titulo2 = document.querySelector("#title2");
   titulo2.innerText = "Sesion de Manipulacion del DOM-CH35"
   titulo2.style.color = "#F23D3D";

   /* Metodos para crear y agregar elementos en el DOM. Este proceso se divide en dos: "crear el nodo y agregar el nodo".
        -Crear nodos
            *document.creatElement("Element")--> crea elementos a partir de etiquetas.
            *document.creatTextNode("text")--> crea texto dentro de las etiquetas.
            */
const nodo1 = document.createElement("h4");
const imgNodo = document.createElement("img");

/*
    -agregar nodos{Mandamos a llamar al elemento padre y le pasammos la propiedad con la constante que guarda el nodo creado}
        *parentElement.appendChild(const);
        *parentElement.append(const);
        *parentElement.insertBefore(const);
        *parentElement.insertAdjacentElement(const);
    utilizamos mayormente appendChild
*/

//obtengo el elemento padre por tag, class o ID
const parentElement = document.getElementById("dif");

//Agregar texto al nodo1
const textNodo1 = document.createTextNode ("Imagen agregada desde el DOM");
//insertar el texto en el nodo1
nodo1.appendChild(textNodo1);
//insertar nodos en el elemento padre
parentElement.appendChild(nodo1);
parentElement.style.fontFamily = "'Karla', sans-serif";
parentElement.style.color = "#A62F03";
/* agregando imagen */
//Inserto el imgNodo en el elemento padre para definirilo posteriormente
parentElement.appendChild(imgNodo);
//accedo a las propiedades de la imagen
imgNodo.src = "../src/assets/octocat.jpg";
imgNodo.alt = "Octocat-github";
imgNodo.width = "300";

/* otra forma de leer y modificar nodos
    document.outherHTML (leer)
    node.innerHTML (escribir sobre el nodo) 
*/
const ElementoOuter = titulo2.outerHTML;
console.log(ElementoOuter);
titulo2.innerHTML = "Manipulacion del DOM - CH35";


