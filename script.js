let navbar=document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick=function(){
    navbar.classList.toggle('active');
    cartitem.classList.remove('active');
    searchitem.classList.remove('active');

};
let cartitem=document.querySelector('.cart-items-container');
document.querySelector('#cart-btn').onclick=function(){
    cartitem.classList.toggle('active');
    navbar.classList.remove('active');
    searchitem.classList.remove('active');

};
let searchitem=document.querySelector('.search-form');
document.querySelector('#search-btn').onclick=function(){
    searchitem.classList.toggle('active');
    navbar.classList.remove('active');
    cartitem.classList.remove('active');
};
window.onscroll=function(){
    navbar.classList.remove('active');
    cartitem.classList.remove('active');
    searchitem.classList.remove('active');
};


function SAVEiNfo(){
    alert("you have signed up");
    var date= new Date();
    if(document.getElementById('k').checked){
                date.setMonth(date.getMonth()+3);

    }
  
    
       
        var val=document.getElementById("usrname").value;
        var add=document.getElementById("usremail").value;
        document.cookie="usernamecookie="+val+";expires="+date;
        document.cookie="useremail="+add+";expires="+date;


           
    
}
function getallcookie(){
    var assoitativecookie=[];
    var splitcookie=document.cookie.split(";");
    for ( i=0;i<splitcookie.length;i++){
        assoitativecookie[splitcookie[i].split("=")[0].trim()]=splitcookie[i].split("=")[1]
    }
    return assoitativecookie;
}
function greet(){
    var cookie=getallcookie();
   var f= document.createElement("h2");
   document.body.insertBefore(f,document.getElementById("div1"));
    var name=cookie["usernamecookie"];
    var addr=cookie["useremail"];
    var g="hi : " + name + " your email : " + addr;
    var m=document.createTextNode(g);
    f.appendChild(m);
}
function DELETEINfo(){
    var q=getallcookie();
    for (i in q){
        document.cookie=i+"=;expires=9-9-2009";
}
} 
