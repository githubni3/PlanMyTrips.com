var index=0;
var page = document.getElementsByClassName("page");
var list = document.getElementsByClassName("list");
var i=0;

function content(index){
    for (i = 0; i < page.length; i++) {
        page[i].style.display = "none";        
    }
    for (i = 0; i < list.length; i++) {
        list[i].className = list[i].className.replace("active");
        
    }
    list[index].className+= " active";
    page[index].style.display = "block";
}