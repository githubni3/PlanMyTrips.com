var index=0;
var forms = document.getElementsByClassName("right-side-items");
var way = document.getElementsByClassName("way-items");
var i=0;

function change(index){
    for (i = 0; i < forms.length; i++) {
        forms[i].style.display = "none";        
    }
    for (i = 0; i < way.length; i++) {
        way[i].classList.remove("active");
        
    }
    way[index].className+= " active";
    forms[index].style.display = "flex";
}