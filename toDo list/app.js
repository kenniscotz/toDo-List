
let button = document.getElementById('button');
let input = document.getElementById('input');
let containers = document.getElementById('container');

 button.addEventListener("click", function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling')
    containers.appendChild(paragraph)
    paragraph.innerText = input.value;
    input.value = "";

    paragraph.addEventListener("click", function(){
        paragraph.style.textDecoration= "line-through";
        paragraph.style.backgroundColor= "black";
    })

    paragraph.addEventListener("dblclick", function(){
       containers.removeChild(paragraph);
    })


 })