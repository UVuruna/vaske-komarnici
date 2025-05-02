
export async function showPopup(basePath) {
    document.getElementById('order').addEventListener('submit', async function(e) {
        e.preventDefault();

        const formData = new FormData(this);

        try {
            const response = await fetch(`${basePath}html/ordering.php`, {
                method: 'POST',
                body: formData
            });

            const text = await response.text();
            const table = document.getElementById('orderListInput').value;

            document.getElementById('popupText').innerHTML = text;
            document.getElementById('popupTable').innerHTML = table;
            document.getElementById('popupMessage').style.display = 'flex';
        } catch (error) {
            document.getElementById('popupText').innerHTML = '❌ Greška pri slanju.';
            document.getElementById('popupMessage').style.display = 'flex';
        }
    });

    function closePopup() {
        document.getElementById('popupMessage').style.display = 'none';
    }

    window.closePopup = closePopup;
}
