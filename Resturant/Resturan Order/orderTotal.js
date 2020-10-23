function orderTotal(div, totalBill){
    div.innerHTML = "";
    let labl = document.createElement("div");
    labl.classList.add("billTotal");
    labl.innerText = "Total Due ";
    div.appendChild(labl);
    let billTotal = document.createElement("div");
    billTotal.classList.add("productName");
    billTotal.innerText = "0";

    let tot = 0;
    for (let itm in totalBill){
        tot += totalBill[itm];
    };
    console.log(tot);

    billTotal.innerText = tot;
    div.appendChild(billTotal);
}