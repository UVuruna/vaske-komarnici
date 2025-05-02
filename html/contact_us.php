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

<header>
    <h1><?= $title ?></h1>
    <h3>Spremni za besplatno merenje?</h3>
    <p><strong>Napomena</strong>: Prikazane cene su okvirne i informativne prirode. Konačna cena može se razlikovati u zavisnosti od specifičnih zahteva i dimenzija. Prilagođavanje proizvoda je moguće u dogovoru sa kupcem.</p>
</header>

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
            <tbody id="orderSelector">
                <?php foreach ($ids as $index => $id): ?>
                    <?php
                        $typeText = '';
                        if (strpos($id, 'Fixed') !== false) {
                            $typeText = 'Fiksni';
                        } elseif (strpos($id, 'Rolled') !== false) {
                            $typeText = 'Rolo';
                        } elseif (strpos($id, 'Plise') !== false) {
                            $typeText = 'Plise';
                        }
                    ?>
                    <tr id="<?php echo $id ?>">
                        <td>
                            <div class="tableColumn">
                                <div class="orderCategory" onclick="swapType(this); calculatePrice(this)" >
                                    <img class="category" src="<?php echo $basePath ?>img/items/product/<?php echo $id ?>_White_Light.webp" alt="<?php echo $alts[$index] ?>" width="80" height="80">
                                    <p class="categoryText"><?php echo $typeText; ?></p>
                                </div>
                                <div class="color">
                                    <img class="frame" onclick="swapType(this); calculatePrice(this)" src="<?php echo $basePath ?>img/other/White.webp" alt="Boja rama" width="30" height="30">
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
        <form id="order" name="order" action="<?php echo $basePath ?>html/ordering.php" method="post">
            <table class="light">
                <thead>
                <colgroup>
                    <col style="width: 10%;">
                    <col style="width: 36%;">
                    <col style="width: 12%;">
                    <col style="width: 12%;">
                    <col style="width: 15%;">
                    <col style="width: 15%;">
                </colgroup>
                    <tr>
                        <th>Kol</th>
                        <th>Proizvod</th>
                        <th><span class="rotated-text">Širina</span></th>
                        <th><span class="rotated-text">Visina</span></th>
                        <th><span class="rotated-text">Površina</span></th>
                        <th><span class="rotated-text">Cena</span></th>
                    </tr>
                </thead>
                <tbody id="orderList">
                    <tr class="empty">
                        <td colspan="6">Nema porudžbina</td>
                    </tr>
                </tbody>
            </table>
            <div class="separator">
                <input id="name" class="light" type="text" name="name" placeholder="Ime" required autocomplete="on"/>
                <input id="email" class="light" type="text" name="email" placeholder="Email" pattern="[^@]+@[^@]+\.[^@]+" required autocomplete="on"/>
                <input id="phone" class="light" type="text" name="phone" placeholder="Broj telefona" pattern="^\+?[0-9]{10,15}$" required autocomplete="on"/>
                <input id="address" class="light" type="text" name="address" placeholder="Adresa (opciono)" autocomplete="on"/>
            </div>
            <textarea id="orderDetail" class="light" name="orderDetail" placeholder="Detalji Porudžbine (opciono)" rows="3"></textarea>
            <input type="hidden" name="orderList" id="orderListInput">
            <button type="submit" class="cta-button">Pošaljite zahtev</button>
        </form>

        <div id="popupMessage" class="light">
            <div id="popupText"></div><br>
            <div id="popupTable"></div><br>
            <button onclick="closePopup()">Zatvori</button>
        </div>
    </section>
</div>

