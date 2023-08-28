const bar= document.getElementById('bar');
const nav= document.getElementById('navbar');
const close= document.getElementById("close");
var btn= document.getElementById("btn");

function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("myTable").deleteRow(i);
}

if(bar){
    bar.addEventListener("click", () => {
        nav.classList.add('active');
    })
}
if(close){
    close.addEventListener("click", () => {
        nav.classList.remove('active');
    })
}

