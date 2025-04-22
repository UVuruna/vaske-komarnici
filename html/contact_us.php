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

<div id="contact_us" class="order">
        <table class="light">
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
                                <img class="category" onclick="swapType(this)" src="<?php echo $basePath ?>img/items/product/<?php echo $id ?>_White_Light.webp" alt="<?php echo $alts[$index] ?>" width="80" height="80">
                                <div class="color">
                                    <img class="frame" onclick="swapType(this)" src="<?php echo $basePath ?>img/other/White.webp" alt="Boja rama" width="30" height="30">
                                    <img class="net" onclick="swapType(this)" src="<?php echo $basePath ?>img/other/Light.webp" alt="Boja rama" width="30" height="30">
                                </div>
                            </div>
                        </td>
                        <td>
                            <div class="tableColumn">
                                <span class="quantity">0</span>
                                <div class="controls">
                                    <button onclick="changeQuantity(this, 1); calculatePrice(this)">+</button>
                                    <button onclick="changeQuantity(this, -1); calculatePrice(this)">-</button>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div class="tableColumn">
                                <div class="measureDimension">
                                    <div>
                                        <input oninput="calculateArea(this); calculatePrice(this)" class="width" type="number" min="0" step="0.1" placeholder="širina (m)">
                                        <span>m</span>
                                    </div>
                                    <div>
                                        <input oninput="calculateArea(this); calculatePrice(this)" class="height" type="number" min="0" step="0.1" placeholder="visina (m)">
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
        <p>Kontaktirajte nas odmah i rezervišite besplatno merenje za komarnike po vašoj meri!</p>
        <form id="order" name="order" action="<?php echo $basePath ?>html/order.php" method="post">
            <input id="name" class="light" type="text" name="name" placeholder="Ime" required autocomplete="on"/>
            <input id="email" class="light" type="text" name="email" placeholder="Email" pattern="[^@]+@[^@]+\.[^@]+" required autocomplete="on"/>
            <input id="phone" class="light" type="text" name="phone" placeholder="Broj telefona" pattern="^\+?[0-9]{10,15}$" required autocomplete="on"/>
            <textarea id="orderDetail" class="light" name="orderDetail" placeholder="Detalji Porudžbine" required></textarea>
            <button type="submit" class="cta-button">Pošaljite zahtev</button>
        </form>
    </section>
</div>