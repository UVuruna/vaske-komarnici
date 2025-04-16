<div id="footer">
    <section id="contact">
        <h2>Kontaktirajte nas</h2>
        <p>
            Za više informacija o našim proizvodima i uslugama, ili da rezervišete
            termin za merenje, slobodno nas kontaktirajte putem sledećih kanala:
        </p>
        <ul>
            <li>Telefon: <strong><a href=tel:<?php echo $companyPhone ?>><?php echo $companyPhoneGlobal ?></a></strong>
            </li>
            <li>Email:
                <strong>
                    <a href="mailto:<?php echo $companyEmail ?>?cc=<?php echo $developerEmail ?>">
                        <?php echo $companyEmail ?>
                    </a>
                </strong>
            </li>
            <li>
                <a href="https://www.google.com/maps?q=Beograd" target="_blank">
                    Adresa: <strong>Beograd, Srbija</strong>
                </a>
            </li>
        </ul>
    </section>

    <footer>
        <p>
            &copy; <?php echo date("Y"); ?><?php echo $companyName ?> | Sva prava zadržana
        </p>
        <p>
            Autor:
            <a href="<?php echo $developerSite ?>" target="_blank">
                <?php echo $developerName ?>
            </a>
        </p>
        <p>
            Kontakt:
            <a href="mailto:<?php echo $developerEmail ?>">
                <?php echo $developerEmail ?>
            </a>
        </p>
    </footer>
</div>