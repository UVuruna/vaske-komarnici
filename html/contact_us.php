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
        <?php foreach ($ids as $index => $id): ?>
            <div id="<?php echo $id ?>">
                <img src="<?php echo $basePath ?>img/items/product/<?php echo $id ?>_White_Light.webp"
                    alt="<?php echo $alts[$index] ?>"
                    width="80"
                    height="80"
                    >
                    <span class="quantity" id="quantity-<?php echo $id ?>">0</span>
                    <div class="controls">
                        <button onclick="changeQuantity('<?php echo $id ?>', 1)">+</button>
                        <button onclick="changeQuantity('<?php echo $id ?>', -1)">-</button>
                    </div>
                    <input type="number" class="m2-input" value="0" min="0" step="0.1" placeholder="m²">
                    <button class="add">Dodaj</button>
            </div>
        <?php endforeach; ?>
    </section>
    <section class="cta">
        <h2>Spremni za besplatno merenje?</h2>
        <p>
            Kontaktirajte nas odmah i rezervišite besplatno merenje za komarnike po vašoj meri!
        </p>

        <form action method="post">
            <input type="text" id="name" name="name" placeholder="Ime" required autocomplete="on" />
            <input type="text" id="email" name="email" placeholder="Email" required autocomplete="on" />
            <input type="text" id="text" name="email" placeholder="Opis" required autocomplete="on" />
            <button type="submit" class="cta-button">
                Kontaktirajte nas
            </button>
        </form>
    </section>
</div>