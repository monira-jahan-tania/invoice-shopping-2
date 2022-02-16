const date = new Date();
document.getElementById("show-date").innerText = date.toLocaleDateString()


document.getElementById("detail-submit-btn").addEventListener('click', function () {
    const buyerDetails = document.getElementById("buyer-details-input")
    document.getElementById("buyer-info").innerText = buyerDetails.value
    buyerDetails.value = ""
})

document.getElementById("add-details-btn").addEventListener('click', function () {
    const infoTable = document.getElementById("info-table")
    const itemNameInput = document.getElementById("item-name-input")
    const itemPriceInput = document.getElementById("item-price-input")
    const itemQuantityInput = document.getElementById("item-quantity-input")

    const tr = document.createElement('tr');
    const th = document.createElement('th');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');

    th.innerText = itemNameInput.value
    td1.innerText = itemPriceInput.value
    td2.innerText = itemQuantityInput.value
    td3.classList.add('item-total-price')
    td3.innerText = parseInt(itemPriceInput.value) * parseInt(itemQuantityInput.value);

    tr.appendChild(th)
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    infoTable.appendChild(tr)

    itemNameInput.value = ""
    itemPriceInput.value = ""
    itemQuantityInput.value = ""


    const subTotal = calcSubTotal()
    document.getElementById("sub-total").innerText = subTotal

    const tax = subTotal * 0.2
    document.getElementById("tax").innerText = tax.toFixed(2)

    const grandTotal = subTotal + tax
    document.getElementById("grand-total").innerText = grandTotal
    document.getElementById("grand-total-2").innerText = grandTotal
})


function calcSubTotal() {
    let subTotal = 0
    const costs = document.getElementsByClassName("item-total-price")
    for (let i = 0; i < costs.length; i++) {
        subTotal = subTotal + parseInt(costs[i].innerText)
    }
    return subTotal

}
