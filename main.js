menu_list_array = [
    "Chicken Tandoori Pizza",
    "Veg Supreme Pizza",
    "Panner Tikka Pizza",
    "Deluxe Veggie Pizza",
    "Veg Extravaganza Pizza"
];
function getmenu(){
    var htmldatas;
    htmldatas="<ol class='menulist'>";
    menu_list_array.sort();
    for(var i=0;i<menu_list_array.length;i++){
        htmldatas=htmldatas+"<li>" + menu_list_array[i] + "</li>";
    }
    htmldatas=htmldatas+"</ol>";
    document.getElementById("display_menu").innerHTML = htmldatas;
}
function add_item(){
    var htmldatas;
    var item =document.getElementById("add_item").value;
    menu_list_array.push(item);
    menu_list_array.sort();
    htmldatas="<section class='cards'>";
    for(var j=0;j<menu_list_array.length;j++){
        htmldata=htmldata+"<div class='card'>" +'<img src="images/pizzaImg.png"/>' + menu_list_array[j] + '</div>';
    }
    htmldatas=htmldatas+"</section>";
    document.getElementById("display_addedmenu").innerHTML = htmldatas;
}
