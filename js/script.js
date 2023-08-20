function getProductName(id){
    // console.log(id.childNodes[3].childNodes[3].innerText);
    return id.childNodes[3].childNodes[3].innerText;
}

function setProduct(name){
    const li = document.createElement('li');
    li.innerText = counter + '. ' + name;
    cart.appendChild(li);
    ++counter;
}

function getPrice(id){
    console.log(id.childNodes[3].childNodes[5].innerText.split(' ')[0]);
    return parseFloat(id.childNodes[3].childNodes[5].innerText.split(' ')[0]);
}

function setTotalPrice(price){
    const priceString = document.getElementById('total-price');
    let totalPrice = parseFloat(priceString.innerText.split('T')[0]);
    totalPrice += price;
    totalPrice = totalPrice.toFixed(2);
    priceString.innerText =totalPrice + 'TK';
}

const cart = document.getElementById('cart');
let counter = 1;

// document.querySelector('#kp-1').addEventListener('click', function(e){
//     console.log(e.target);
//     const pName = getProductName(e.target);
//     setProduct(pName);
//     const price = getPrice(e.target);
//     setTotalPrice(price);
// })

function process(card){
    // console.log(card);
    const pName = getProductName(card);
    setProduct(pName);
    const price = getPrice(card);
    setTotalPrice(price);
}