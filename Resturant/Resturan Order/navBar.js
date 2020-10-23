function navBar(div, data){
let navBar = [];

data.forEach(function(item){
    if (!navBar.includes(item["category"])){navBar.push(item["category"])}
})

let navBarDiv = document.createElement('div');
navBarDiv.classList.add("navBarDiv");
navBar.forEach(function(item){
    let navBarItem = document.createElement("div");
    navBarItem.classList.add("navBarItem");
    navBarItem.classList.add(item);
    navBarItem.innerText = item;


    navBarItem.addEventListener("click",function () {

        let visible = document.querySelectorAll(".productCartItemVisible");
        visible.forEach(function(item){
            item.classList.remove("productCartItemVisible");
        })

        let itemList = document.querySelectorAll("."+item+"");
        itemList.forEach(function(item){
            item.classList.add("productCartItemVisible");
        })
    })
    navBarDiv.appendChild(navBarItem);
})

div.appendChild(navBarDiv);}
