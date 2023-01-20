window.onload = iniciar;
var tareasArray = [];

function iniciar() {
   var btnAgregar = document.getElementById("btnAgregar");
   btnAgregar.addEventListener("click", clickBtnAgregar)
}

function clickBtnAgregar() {
   var txtTareaElement = document.getElementById("txtTarea");
   var tareaTxt = txtTareaElement.value;
   alert(tareaTxt)
   tareasArray.push(tareaTxt);
   alert(tareasArray)

}
