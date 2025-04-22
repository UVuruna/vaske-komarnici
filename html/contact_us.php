<?php
$ids = [
    "Fixed_Both",
    "Rolled",
    "PliseDoor_Both",
    "PliseDoor_One",
    "PliseWindow_Both",
    "PliseWindow_One",
];
$alts = [
    "Fiksni komarnik porudžbina",
    "Rolo komarnik porudžbina",
    "Dvodelni Plise komarnik za vrata porudžbina",
    "Jednodelni Plise komarnik za vrata porudžbina",
    "Dvodelni komarnik za prozor porudžbina",
    "Jednodelni komarnik za prozor porudžbina",
];
?>

<div id="contact_us">
    <section class="order">
        <table>
            <thead>
                <tr>
                    <th>Tip</th>
                    <th>Količina</th>
                    <th>Dimenzije</th>
                    <th>Cena</th>
                </tr>
            </thead>
            <tbody>
                <?php foreach ($ids as $index => $id): ?>
                    <tr id="<?php echo $id ?>">
                        <td>
                            <div class="tableColumn">
                                <img src="<?php echo $basePath ?>img/items/product/<?php echo $id ?>_White_Light.webp"
                                    class="category" alt="<?php echo $alts[$index] ?>" width="80" height="80"
                                    onclick="swapType(this)">
                                <div class="color">
                                    <img src="<?php echo $basePath ?>img/other/White.webp" class="frame" alt="Boja rama"
                                        width="30" height="30" onclick="swapType(this)">
                                    <img src="<?php echo $basePath ?>img/other/Light.webp" class="net" alt="Boja rama"
                                        width="30" height="30" onclick="swapType(this)">
                                </div>
                            </div>
                        </td>
                        <td>
                            <div class="tableColumn">
                                <span class="quantity">0</span>
                                <div class="controls">
                                    <button onclick="changeQuantity(this, 1); calculatePrice(this)">
                                        +
                                    </button>
                                    <button onclick="changeQuantity(this, -1); calculatePrice(this)">
                                        -
                                    </button>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div class="tableColumn">
                                <div class="measureDimension">
                                    <div>
                                        <input class="width" type="number" min="0" step="0.1" placeholder="širina (m)"
                                            oninput="calculateArea(this); calculatePrice(this)">
                                        <span>m</span>
                                    </div>
                                    <div>
                                        <input class="height" type="number" min="0" step="0.1" placeholder="visina (m)"
                                            oninput="calculateArea(this); calculatePrice(this)">
                                        <span>m</span>
                                    </div>
                                </div>
                                <div class="Area">0 m²</div>
                            </div>
                        </td>
                        <td>
                            <div class="tableColumn">
                                <span class="Price">0 € </span>
                                <button class="Add" onclick="addOrder(this)">Dodaj</button>
                            </div>
                        </td>
                    </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
    </section>
    <section class="form">
        <h2>Spremni za besplatno merenje?</h2>
        <p>
            Kontaktirajte nas odmah i rezervišite besplatno merenje za komarnike po vašoj meri!
        </p>

        <form id="order" name="order" action method="post">
            <input
                type="text"
                id="name"
                name="name"
                placeholder="Ime"
                required
                autocomplete="on"/>
            <input
                type="text"
                id="email"
                name="email"
                placeholder="Email"
                pattern="[^@]+@[^@]+\.[^@]+"
                required
                autocomplete="on"/>
            <input
                type="text"
                id="phone"
                name="phone"
                placeholder="Broj telefona"
                pattern="^\+?[0-9]{10,15}$"
                required
                autocomplete="on"/>
                <textarea
                    id="orderDetail"
                    name="orderDetail"
                    placeholder="Detalji Porudžbine"
                    required>
                </textarea>
            <button type="submit" class="cta-button">
                Pošaljite zahtev
            </button>
        </form>
    </section>
</div>