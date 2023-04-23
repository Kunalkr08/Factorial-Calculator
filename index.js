let x;
document.getElementById("Q").onclick = function(){
    x=document.getElementById("P").value;
    let y=1;
    for(let i=1; i<=x; i++){
        y*=i;
    }
    document.getElementById("S").innerHTML = y;
}
document.getElementById("R").onclick = function(){
    document.getElementById("S").innerHTML = " "; 
}
