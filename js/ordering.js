function swapType(element) {
    const tableRow = element.closest('tr'); 
    const imageSRC = element.src

    let TYPE = getID(imageSRC)
    let newTYPE

    if (element.classList.contains('category')) {
        let typeList = TYPE.split('_');
        TYPE = typeList.slice(0, typeList.length - 2).join('_')
        newTYPE = swappingCategory[(swappingCategory.indexOf(TYPE) + 1) % swappingCategory.length]

        element.src = imageSRC.replace(TYPE, newTYPE)
        element.alt = `${categoryTranslate[newTYPE]} porudžbina`
        tableRow.id = newTYPE

    } else {
        if (element.classList.contains('net')) {
            newTYPE = swappingNet[(swappingNet.indexOf(TYPE) + 1) % swappingNet.length]
            element.src = imageSRC.replace(TYPE, newTYPE)

        } else if (element.classList.contains('frame')){
            newTYPE = swappingFrame[(swappingFrame.indexOf(TYPE) + 1) % swappingFrame.length]
            element.src = imageSRC.replace(TYPE, newTYPE)
        }
        const image = tableRow.querySelector('.category')
        image.src = image.getAttribute('src').replace(TYPE, newTYPE)
    }
}

function changeQuantity(element, delta) {
    const tableRow = element.closest('tr');

    const quantityElement = tableRow.querySelector('.quantity')

    const currentQuantity = parseInt(quantityElement.textContent)
    const newQuantity = currentQuantity + delta

    if (newQuantity >= 0) {
        quantityElement.textContent = newQuantity
    }
}

function calculateArea(element) {
    const tableRow = element.closest('tr');

    const widthInput = tableRow.querySelector('.width');
    const heightInput = tableRow.querySelector('.height');
    const areaSpan = tableRow.querySelector('.Area');

    const width = parseFloat(widthInput.value);
    const height = parseFloat(heightInput.value);

    if (!isNaN(width) && !isNaN(height)) {
        areaSpan.textContent = `${(width * height).toFixed(2)} m²`;
    } else {
        areaSpan.textContent = '0 m²';
    }
}

function calculatePrice(element) {
    const tableRow = element.closest('tr');
    const id = tableRow.id

    priceDict = {
        "Fixed": 25.00,
        "Rolled": 35.00,
        "Plise": 40.00
    }
    const areaValue = parseFloat(tableRow.querySelector('.Area').textContent.split(' ')[0]);
    const quantityValue = parseInt(tableRow.querySelector('.quantity').textContent);
    const priceSpan = tableRow.querySelector('.Price');

    let priceCategory
    for (const [key, value] of Object.entries(priceDict)) {
        if (id.includes(key)) {
            priceCategory = value
            break
        }
    }

    if (!isNaN(areaValue) && !isNaN(quantityValue)) {
        let price = priceCategory * areaValue
        price =  price < priceCategory ? priceCategory : price
        if (areaValue) priceSpan.textContent = `${(price * quantityValue).toFixed(0)} €`;
    } else {
        areaSpan.textContent = '0 €';
    }
}

function deleteOrder(tableRow) {
    const Table = document.getElementById('orderList')
    console.log(Table)

    if (tableRow) {
        tableRow.remove()
    }
    const rows = Table.querySelectorAll('tr')
    console.log(rows)
    if (rows.length === 0) {
        const newRow = document.createElement('tr')
        newRow.classList.add('empty')
        newRow.innerHTML = `<td colspan="6" class="empty">Nema porudžbina</td>`
        Table.appendChild(newRow)
    }
}

function addOrder(element) {
    const tableRow = element.closest('tr');
    const id = tableRow.id
    const Table = document.getElementById('orderList')
    const newRow = document.createElement('tr')
    const emptyTable = Table.querySelector('.empty')

    const elements = ['quantity', 'width', 'height', 'Area', 'Price', 'frame', 'net']
    const elementDict = {}

    elements.forEach(item => {
        elementDict[item] = tableRow.querySelector(`.${item}`)
    })

    const quantityValue = elementDict.quantity.textContent
    const areaValue = elementDict.Area.textContent.split(' ')[0]
    const priceValue = elementDict.Price.textContent.split(' ')[0]

    order = [
        `${quantityValue}`,
        `${categoryTranslate[id]}, ${frameTranslate[getID(elementDict.frame.src)]}, ${netTranslate[getID(elementDict.net.src)]}`, 
        `${elementDict.width.value} m`,
        `${elementDict.height.value} m`,
        `${areaValue} m²`,
        `${priceValue} €`
    ]
    
    
    order.forEach((item, index) => {
        const newCell = document.createElement('td')
        if (index === 0) {
            newCell.innerHTML = `
                <i onclick="deleteOrder(this.closest('tr'))" style="margin:0 0.15rem 0 0; cursor: pointer" class="fa-solid fa-ban"></i>
                ${item}
            `
        } else {
            newCell.textContent = item
        }
        newRow.appendChild(newCell)
    })
    if (emptyTable) {
        emptyTable.remove()
    }
    Table.appendChild(newRow)
}

function getID(src) {
    return (src.split('/').pop()).split('.')[0]
}

const categoryTranslate = {
    Fixed_Both: 'Fiksni komarnik',
    Rolled: 'Rolo komarnik',
    PliseDoor_Both: 'Dvodelni Plise komarnik za vrata',
    PliseDoor_One: 'Jednodelni Plise komarnik za vrata',
    PliseWindow_Both: 'Dvodelni Plise komarnik za prozor',
    PliseWindow_One: 'Jednodelni Plise komarnik za prozor',
}
const frameTranslate = {
    White: 'Beli ram',
    Antracite: 'Antracit ram',
    Brown: 'Braon ram'
}
const netTranslate = {
    Light: 'Svetla mreža',
    Dark: 'Tamna mreža'
}
const swappingCategory = Object.keys(categoryTranslate)
const swappingFrame = Object.keys(frameTranslate)
const swappingNet = Object.keys(netTranslate)

window.swapType = swapType
window.changeQuantity = changeQuantity
window.calculateArea = calculateArea
window.calculatePrice = calculatePrice
window.addOrder = addOrder


document.getElementById('order').addEventListener('submit', function (e) {
    const tbody = document.getElementById('orderList');
    const rows = tbody.querySelectorAll('tr');
    let htmlTable = '<table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse;">';

    rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        if (cells.length === 0) return;

        htmlTable += '<tr>';
        cells.forEach(cell => {
            htmlTable += `<td>${cell.textContent.trim()}</td>`;
        });
        htmlTable += '</tr>';
    });

    htmlTable += '</table>';

    document.getElementById('orderListInput').value = htmlTable;
});