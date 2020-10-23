function orderBill (div){

    let billBlock = document.createElement("div");
    billBlock.classList.add("billBlock")

    let billHeader = document.createElement("div");
    billHeader.classList.add("billHeader");
    billBlock.appendChild(billHeader);

    let billTotal = document.createElement("div");
    billTotal.classList.add("billTotal");
    billTotal.innerText = "Total Due";
    billHeader.appendChild(billTotal);

    let billContent = document.createElement("div");
    billContent.classList.add("billContent");
    billBlock.appendChild(billContent);


div.appendChild(billBlock);
}
