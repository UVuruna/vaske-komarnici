<div id="footer" class="light" role="contentinfo" itemscope itemtype="https://schema.org/Organization">
    <section id="contact" aria-labelledby="contact-title">
        <h2 id="contact-title">Kontaktirajte nas</h2>
        <p>Za više informacija o našim proizvodima i uslugama, ili da rezervišete termin za merenje, slobodno nas kontaktirajte putem sledećih kanala:</p>
        <ul>
            <li>
                Telefon: 
                <a href="tel:<?= htmlspecialchars($companyPhone) ?>" 
                   onclick="gtag_report_conversion('tel:<?= htmlspecialchars($companyPhone) ?>'); return false;"
                   itemprop="telephone">
                   <strong><?= htmlspecialchars($companyPhoneGlobal) ?></strong>
                </a>
            </li>
            <li>
                Email: 
                <a href="mailto:<?= htmlspecialchars($companyEmail) ?>?cc=<?= htmlspecialchars($developerEmail) ?>" itemprop="email">
                   <strong><?= htmlspecialchars($companyEmail) ?></strong>
                </a>
            </li>
            <li>
                Adresa: 
                <a href="https://www.google.com/maps?q=Beograd" target="_blank" rel="noopener" itemprop="address" itemscope itemtype="https://schema.org/PostalAddress">
                    <strong><span itemprop="addressLocality">Beograd</span>, <span itemprop="addressCountry">Srbija</span></strong>
                </a>
            </li>
        </ul>
    </section>

    <footer>
        <p>&copy; <?= date("Y") ?> <span itemprop="name"><?= htmlspecialchars($companyName) ?></span> | Sva prava zadržana</p>
        <p>Autor: <a href="<?= htmlspecialchars($developerWebsite) ?>" target="_blank" rel="noopener"><?= htmlspecialchars($developerName) ?></a></p>
        <p>Kontakt: <a href="mailto:<?= htmlspecialchars($developerEmail) ?>"><?= htmlspecialchars($developerEmail) ?></a></p>
    </footer>
</div>
