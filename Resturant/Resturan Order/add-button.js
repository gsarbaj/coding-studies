function addCartCounter(priceBill, total, object, name, id, price){

let module = document.createElement("div");
let plus = document.createElement("div");
let minus = document.createElement("div");
let count = document.createElement("div");
let value = object.quantity;

module.classList.add("module");
plus.classList.add("plus");
minus.classList.add("minus");
count.classList.add("count");

minus.innerText = "-";
plus.innerText  = "+";
count.innerText = "0";

plus.addEventListener("click", function () {
    count.textContent = (parseInt(count.innerText) + 1).toString();
    value = parseInt(count.innerText);
    object[name] = value;
    total[name] = value * price;
    priceBill[name] = price;

    billContent(cont, bill, priceBill, totalBill);
    orderTotal(totl, totalBill);

    console.log(object);
    console.log(priceBill);
    console.log(total);
});
minus.addEventListener("click",function () {
    if (parseInt(count.innerText) > 0){ count.innerText = (parseInt(count.innerText) - 1).toString();
        value = parseInt(count.innerText);
        object[name] = value;
        if (!object[name]){delete object[name]; delete priceBill[name]};
        total[name] = value * price;
        if (!total[name]){delete total[name]};

        billContent(cont, bill, priceBill, totalBill);
        orderTotal(totl, totalBill);


        console.log(object);
        console.log(priceBill);
        console.log(total);
    }
});
module.appendChild(plus);
module.appendChild(count);
module.appendChild(minus);
return module;

};




