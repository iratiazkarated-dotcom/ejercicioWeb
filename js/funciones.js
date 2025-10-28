//alert("hola mundo!");
const miBoton = document.getElementById("toggle");
//alert(miBoton);

function themeChange() {
const miBody = document.getElementsByTagName("body")[0];
   //alert(miBody);
if(miBody.classList.contains("dark")) {
miBody.classList.remove("dark")
}else{
 miBody.classList.add("dark")   
}

}

miBoton.addEventListener("click", themeChange);
