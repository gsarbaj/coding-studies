function billContent(div, bill, priceBill, totalBill){
    div.innerHTML = "";

    let billName = document.createElement("div");
    billName.classList.add("billName");


    let billPrice = document.createElement("div");
    billPrice.classList.add("billPrice");


    let billTotal = document.createElement("div");
    billTotal.classList.add("billTotal");


    for (let itm in bill){
        let productName = document.createElement("div");
        productName.classList.add("productName");
        productName.innerText = itm +" qty "+ bill[itm]+" ... ";
        billName.appendChild(productName);

    };

    for (let itm in priceBill){
        let productPrice = document.createElement("div");
        productPrice.classList.add("productPrice");
        productPrice.innerText = " " + priceBill[itm];
        billPrice.appendChild(productPrice);

    };

    for (let itm in totalBill){
        let productTotal = document.createElement("div");
        productTotal.classList.add("productTotal");
        productTotal.innerText = " " + totalBill[itm];
        billTotal.appendChild(productTotal);

    };

    div.appendChild(billName);
    div.appendChild(billPrice);
    div.appendChild(billTotal);

}