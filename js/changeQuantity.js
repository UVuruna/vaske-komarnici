function changeQuantity(id, delta) {
    var quantityElement = document.getElementById("quantity-" + id);

    var currentQuantity = parseInt(quantityElement.textContent);
    var newQuantity = currentQuantity + delta;

    if (newQuantity >= 0) {
        quantityElement.textContent = newQuantity;
    }
}

window.changeQuantity = changeQuantity