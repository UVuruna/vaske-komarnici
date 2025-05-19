const categoryTranslate = {
    Fixed_Both: 'Fiksni komarnik',
    Rolled: 'Rolo komarnik',
    PliseDoor_Both: 'Dvodelni Plise komarnik za vrata',
    PliseDoor_One: 'Jednodelni Plise komarnik za vrata',
    PliseWindow_Both: 'Dvodelni Plise komarnik za prozor',
    PliseWindow_One: 'Jednodelni Plise komarnik za prozor'
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
const mainCategory = {
    Fixed: 'Fiksni',
    Rolled: 'Rolo',
    Plise: 'Plise'
}
const swappingMainCategory = Object.keys(mainCategory)
const swappingCategory = Object.keys(categoryTranslate)
const swappingFrame = Object.keys(frameTranslate)
const swappingNet = Object.keys(netTranslate)

let priceDict

function swapMeta(tableRow, imageURL, imgNAME) {
    const metaName = tableRow.querySelector('.metaName')
    const metaImage = tableRow.querySelector('.metaImage')
    const metaDescription = tableRow.querySelector('.metaDescription')
    const newDescription = `Porudžbina - Kvalitetni ${imgNAME} izrađeni po meri`

    metaName.setAttribute('content', imgNAME)
    metaImage.setAttribute('content', imageURL)
    metaDescription.setAttribute('content', newDescription)
}

// Function for changing the type of insect screen and colors of the frame and net
function swapType(element) {
    const tableRow = element.closest('tr')
    let newTYPE

    if (element.classList.contains('orderCategory')) {
        
        const text = element.querySelector('p')
        const image = element.querySelector('img')
        const imageSRC = image.src

        let TYPE = getID(imageSRC)
        let typeList = TYPE.split('_')
        TYPE = typeList.slice(0, typeList.length - 2).join('_')

        newTYPE =
            swappingCategory[
            (swappingCategory.indexOf(TYPE) + 1) % swappingCategory.length
            ]

        const newSRC = imageSRC.replace(TYPE, newTYPE)
        const newNAME = categoryTranslate[newTYPE]
        image.src = newSRC
        image.alt = `${newNAME} porudžbina`
        tableRow.id = newTYPE

        for (const item of swappingMainCategory) {
            if (newTYPE.includes(item)) {
                text.textContent = `${mainCategory[item]}`
                break
            }
        }
        swapMeta(tableRow, newSRC, newNAME)

    } else {
        const imageSRC = element.src
        const TYPE = getID(imageSRC)

        if (element.classList.contains('net')) {
            newTYPE =
                swappingNet[(swappingNet.indexOf(TYPE) + 1) % swappingNet.length]
            element.src = imageSRC.replace(TYPE, newTYPE)
        } else if (element.classList.contains('frame')) {
            newTYPE =
                swappingFrame[(swappingFrame.indexOf(TYPE) + 1) % swappingFrame.length]
            element.src = imageSRC.replace(TYPE, newTYPE)
        }
        const image = tableRow.querySelector('.category')
        image.src = image.getAttribute('src').replace(TYPE, newTYPE)
    }
}

// Function for changing the quantity of the order
function changeQuantity(element, delta) {
    const tableRow = element.closest('tr')

    const quantityElement = tableRow.querySelector('.quantity')

    const currentQuantity = parseInt(quantityElement.textContent)
    const newQuantity = currentQuantity + delta

    if (newQuantity >= 0) {
        quantityElement.textContent = newQuantity
    }
}

// Function for calculating the area of the specific order
function calculateArea(element) {
    const tableRow = element.closest('tr')

    const widthInput = tableRow.querySelector('.width')
    const heightInput = tableRow.querySelector('.height')
    const areaSpan = tableRow.querySelector('.Area')

    const width = parseFloat(widthInput.value)
    const height = parseFloat(heightInput.value)

    if (!isNaN(width) && !isNaN(height)) {
        areaSpan.textContent = `${(width * height).toFixed(2)} m²`
    } else {
        areaSpan.textContent = '0 m²'
    }
}

// Function for calculating the price of the specific order
function calculatePrice(element) {
    let priceCategory
    const tableRow = element.closest('tr')
    const id = tableRow.id
    const color = getID(tableRow.querySelector('.frame').src)

    const areaValue = parseFloat(
        tableRow.querySelector('.Area').textContent.split(' ')[0]
    )
    const quantityValue = parseInt(
        tableRow.querySelector('.quantity').textContent
    )
    const priceSpan = tableRow.querySelector('.Price')

    for (const [key, value] of Object.entries(priceDict)) {
        if (id.includes(key)) {
            priceCategory = value
            break
        }
    }
    if (color !== 'White') {
        priceCategory += 3
    }

    if (!isNaN(areaValue) && !isNaN(quantityValue)) {
        let price = priceCategory * areaValue
        price = price < priceCategory ? priceCategory : price
        if (areaValue)
            priceSpan.textContent = `${(price * quantityValue).toFixed(0)} €`
    } else {
        areaSpan.textContent = '0 €'
    }
}

// Function for deleting the order from the table
function deleteOrder(tableRow) {
    const Table = document.getElementById('orderList')
    if (tableRow) {
        tableRow.remove()
    }
    const rows = Table.querySelectorAll('tr')
    if (rows.length === 1) {
        const totalRow = Table.querySelector('.total')
        totalRow.remove()

        const newRow = document.createElement('tr')
        newRow.classList.add('empty')
        newRow.innerHTML = `<td colspan="6" class="empty">Nema porudžbina</td>`
        Table.appendChild(newRow)
    } else {
        totalPrice()
    }
}

// Function for adding the order to the table
function addOrder(element) {
    const tableRow = element.closest('tr')
    const id = tableRow.id
    const Table = document.getElementById('orderList')
    const newRow = document.createElement('tr')
    const emptyTable = Table.querySelector('.empty')

    const elements = [
        'quantity',
        'width',
        'height',
        'Area',
        'Price',
        'frame',
        'net'
    ]
    const elementDict = {}

    elements.forEach(item => {
        elementDict[item] = tableRow.querySelector(`.${item}`)
    })

    const quantityValue = elementDict.quantity.textContent
    const areaValue = elementDict.Area.textContent.split(' ')[0]
    const priceValue = elementDict.Price.textContent.split(' ')[0]

    const order = [
        `${quantityValue}`,
        `${categoryTranslate[id]}, ${frameTranslate[getID(elementDict.frame.src)]
        }, ${netTranslate[getID(elementDict.net.src)]}`,
        `${elementDict.width.value} m`,
        `${elementDict.height.value} m`,
        `${areaValue} m²`,
        `${priceValue} €`
    ]

    order.forEach((item, index) => {
        const newCell = document.createElement('td')
        if (index === 0) {
            newCell.innerHTML = `
                <button style="color:${window.elementMain}" class="false" onclick="deleteOrder(this.closest('tr'))">
                    <i style="margin:0 0.15rem 0 0; cursor: pointer" class="fa-solid ban"></i>
                </button>
                ${item}
            `
        } else if (index === order.length - 1) {
            newCell.classList.add('orderValue')
            newCell.textContent = item
        } else {
            newCell.textContent = item
        }
        newRow.appendChild(newCell)
    })

    if (emptyTable) {
        emptyTable.remove()
        addTotalRow(Table)
    }
    const lastRow = Table.querySelector('tr:last-child')
    Table.insertBefore(newRow, lastRow)
    totalPrice()
}

// Function for adding the total row to the table
function addTotalRow(Table) {
    const totalRow = document.createElement('tr')
    totalRow.classList.add('total')
    totalRow.innerHTML = `
        <td colspan="2" style="font-size:1rem">Ukupno:</td>
        <td id="totalRSD" colspan="2" style="font-size:1rem"></td>
        <td id="totalEUR" colspan="2" style="font-size:1rem"></td>
    `
    Table.appendChild(totalRow)
}

// Function for calculating the total price of the order
function totalPrice() {
    const Table = document.getElementById('orderList')
    const rows = Table.querySelectorAll('tr')
    let total = 0
    for (const row of rows) {
        const priceCell = row.querySelector('.orderValue')
        if (priceCell) {
            const priceValue = parseInt(priceCell.textContent.split(' ')[0])
            if (!isNaN(priceValue)) {
                total += priceValue
            }
        }
    }
    document.getElementById('totalRSD').textContent = `${parseInt(
        117.52 * total
    ).toLocaleString()} RSD`
    document.getElementById(
        'totalEUR'
    ).textContent = `${total.toLocaleString()} €`
}

// Function to extract the ID (NAME) from the image source URL
function getID(src) {
    return src.split('/').pop().split('.')[0]
}

// Function to initialize the order table and set up event listeners
export async function orderTableInit(pricedict) {
    // Event listener for the "Place Order" button
    document.getElementById('order').addEventListener('submit', function (e) {
        const tbody = document.getElementById('orderList')
        const rows = tbody.querySelectorAll('tr')
        let htmlTable =
            '<table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse;">'

        rows.forEach(row => {
            const cells = row.querySelectorAll('td')
            const isTotalRow = row.classList.contains('total')
            if (cells.length === 0) return

            htmlTable += isTotalRow
                ? '<tr style="background-color: #d6d6d6;">'
                : '<tr>'

            cells.forEach(cell => {
                htmlTable += isTotalRow
                    ? `<td colspan="2">${cell.textContent.trim()}</td>`
                    : `<td>${cell.textContent.trim()}</td>`
            })
            htmlTable += '</tr>'
        })
        htmlTable += '</table>'

        document.getElementById('orderListInput').value = htmlTable
    })

    window.swapType = swapType
    window.changeQuantity = changeQuantity
    window.calculateArea = calculateArea
    window.calculatePrice = calculatePrice
    window.addOrder = addOrder
    window.deleteOrder = deleteOrder

    priceDict = pricedict
}
