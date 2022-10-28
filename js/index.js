 var index = 0;
 var i=0;
 var slider = document.getElementsByClassName("slider");
 var line = document.getElementsByClassName("line");

 auto();

 function show(n){
    for (i = 0; i < slider.length; i++) {//slider.length = 6
        slider[i].style.display = "none";        
    }
    for (i = 0; i < line.length; i++) { //line.length = 6
        line[i].className = line[i].className.replace("active");
        
    }
    slider[n-1].style.display=("block");
    line[n-1].className+= " active"; //add space
 } 

 function auto(){
    index++;
    if(index>slider.length){//to move from last slide to first slide
        index=1;
    }
    show(index);
    setTimeout(auto,5000); //next slider will appar after 5s
 }

 function plusSlide(n){
    index+=n; //n-1 or n+1
    if(index > slider.length){ //to move from last slide to first slide
        index = 1;
    }
    if(index<1){ //TO Move from  first to last
        index = slider.length;
    }
    show(index);
 }
function currentSlide(n){
    index=n;
    show(index);
}


