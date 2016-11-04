var a = prompt("enter your desire table number");
function MyTable(){
    a.fontsize(6);
    for(var i=1; i<=10; i++){ 
        document.write( a + "*" + i + "=" + a*i + "</br>");
    }
}
MyTable();