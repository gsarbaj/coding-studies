let bill = {};
let totalBill = {};
let priceBill = {};
let productCartDivs = document.createElement('div');
productCartDivs.classList.add("productCartDiv");

let firstPageQuantity = 6

menu.forEach(function(item) {
    let productCartItem = document.createElement('div');
    productCartItem.classList.add("productCartItem");
    productCartItem.classList.add(item["category"]);
    if (firstPageQuantity){
        productCartItem.classList.add("productCartItemVisible");
        --firstPageQuantity;
    }


    let pictureDiv = document.createElement('div');
    pictureDiv.classList.add("pictureDiv");
    pictureDiv.innerHTML = "<img src=" +item["pic"]+ ">";
    productCartItem.appendChild(pictureDiv);

    let descDiv = document.createElement('div');
    descDiv.classList.add("descDiv");
    productCartItem.appendChild(descDiv);

    let nameDiv = document.createElement('div');
    nameDiv.classList.add("nameDiv");
    nameDiv.innerText = item["name"];
    descDiv.appendChild(nameDiv);

    let priceDiv = document.createElement('div');
    priceDiv.classList.add("priceDiv");
    priceDiv.innerText = "Price: " + item["price"];
    descDiv.appendChild(priceDiv);

    let addButton = document.createElement('div');
    addButton.classList.add("addButton");
    addButton.appendChild(addCartCounter(priceBill, totalBill, bill, item["name"], item["id"], item["price"]));
    productCartItem.appendChild(addButton);


    productCartDivs.appendChild(productCartItem);
})

document.body.appendChild(productCartDivs);
