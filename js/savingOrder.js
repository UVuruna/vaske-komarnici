window.addEventListener('beforeunload', () => {
    const inputs = document.querySelectorAll('form input, form textarea');
    

    inputs.forEach(input => {
        sessionStorage.setItem(input.name, input.value);
    });
    
    const orderList = document.querySelectorAll('#orderList tr')
    const orderData = [];

    orderList.forEach(row => {
        if (row.classList.contains('empty')) return;
        const cells = row.querySelectorAll('td');
        const orderRow = Array.from(cells).map(cell => cell.textContent.trim());
        orderData.push(orderRow);
    });

    sessionStorage.setItem('orderList', JSON.stringify(orderData));

});

window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('form input, form select, form textarea').forEach(input => {
        const savedValue = sessionStorage.getItem(input.name);
        if (savedValue !== null) {
            input.value = savedValue;
        }
    })

    const savedOrderList = JSON.parse(sessionStorage.getItem('orderList'));

    if (savedOrderList && savedOrderList.length > 0) {
        const orderList = document.getElementById('orderList');
        orderList.querySelector('tr').remove()
        
        savedOrderList.forEach(orderRow => {
            const newRow = document.createElement('tr');
            let totalRow = false
            orderRow.forEach((orderItem, index) => {

                const newCell = document.createElement('td');
                if (index === 0) {
                    if (orderItem ==='Ukupno:') {
                        newRow.classList.add('total')
                        totalRow = true
                        newCell.colSpan = 4
                        newCell.style.textAlign = 'right'
                        newCell.style.fontSize = '1rem'
                        newCell.textContent = orderItem
                        
                    } else {
                        newCell.innerHTML = `
                            <i onclick="deleteOrder(this.closest('tr'))" style="margin:0 0.15rem 0 0; cursor: pointer" class="fa-solid fa-ban"></i>
                            ${orderItem}
                        `
                    }
                } else {
                    if (totalRow) {
                        console.log(orderItem)
                        if (orderItem.includes('RSD')) {
                            newCell.id = 'totalRSD'
                        } else if (orderItem.includes('€')) {
                            newCell.id = 'totalEUR'
                        }
                        newCell.style.fontSize = '1rem'
                    } else {
                        if (index === orderRow.length - 1) {
                            newCell.classList.add('orderValue')
                        }
                    }
                    newCell.textContent = orderItem
                    
                }
                newRow.appendChild(newCell);
            });
            orderList.appendChild(newRow);
        });
    }
});