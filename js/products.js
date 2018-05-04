var prodName = ["Vanilla Chocolate Cake","Chocolate Tiramasu","Rasperry Cheesecake","Assorted Macarons",
"Carrot Cupcakes","Tropical Macarons","Strawberry Cupcake", "Butter Pound Cake", "Assorted Cookies" ];
var prodCost = ["14.99","12.99","15.99"];
var cartProd = [];
var cartcost = [];

/*document.getElementById("items").innerHTML= prodName;*/

function addVanillaCake (){
    cartProd.push("Vanilla Chocolate");
}
    
document.getElementById("items").innerHTML= cartProd;

