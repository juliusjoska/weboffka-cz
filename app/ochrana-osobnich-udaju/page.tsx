import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ochrana osobních údajů | Weboffka',
  description: 'Informace o zpracování osobních údajů na webu Weboffka.',
}

export default function GDPRPage() {
  return (
    <div className="pt-20">
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto prose prose-invert prose-headings:text-foreground prose-p:text-muted prose-li:text-muted prose-a:text-accent prose-strong:text-foreground">
            <h1>Ochrana osobních údajů</h1>

            <h2>1. Správce osobních údajů</h2>
            <p>
              Správcem osobních údajů je Julius Joska, IČO: 24409979,
              provozující webové studio Weboffka pod značkou ajtak.it.
            </p>
            <p>
              Kontaktní email:{' '}
              <a href="mailto:info@weboffka.cz">info@weboffka.cz</a>
            </p>

            <h2>2. Jaké údaje zpracováváme</h2>
            <p>Při vyplnění kontaktního formuláře zpracováváme:</p>
            <ul>
              <li>Jméno a příjmení nebo název firmy</li>
              <li>E-mailovou adresu</li>
              <li>Obsah zprávy</li>
              <li>Volitelně: název firmy, orientační rozpočet</li>
            </ul>

            <h2>3. Účel zpracování</h2>
            <p>Vaše údaje zpracováváme za účelem:</p>
            <ul>
              <li>Odpovědi na vaši poptávku</li>
              <li>Přípravy cenové nabídky</li>
              <li>Komunikace ohledně potenciální spolupráce</li>
            </ul>

            <h2>4. Právní základ</h2>
            <p>
              Zpracování probíhá na základě vašeho souhlasu (čl. 6 odst. 1
              písm. a) GDPR), který udělujete zaškrtnutím příslušného pole
              v kontaktním formuláři.
            </p>

            <h2>5. Doba uchovávání</h2>
            <p>
              Údaje z kontaktního formuláře uchováváme po dobu 2 let od
              posledního kontaktu, pokud nedojde k uzavření smlouvy. V případě
              uzavření smlouvy se doba uchovávání řídí zákonnými požadavky
              (typicky 10 let pro účetní doklady).
            </p>

            <h2>6. Vaše práva</h2>
            <p>Máte právo:</p>
            <ul>
              <li>Na přístup ke svým osobním údajům</li>
              <li>Na opravu nepřesných údajů</li>
              <li>Na výmaz údajů (&bdquo;právo být zapomenut&ldquo;)</li>
              <li>Na omezení zpracování</li>
              <li>Na přenositelnost údajů</li>
              <li>Odvolat souhlas se zpracováním</li>
              <li>Podat stížnost u Úřadu pro ochranu osobních údajů</li>
            </ul>

            <h2>7. Předávání údajů</h2>
            <p>
              Vaše údaje nepředáváme třetím stranám s výjimkou případů, kdy je
              to nezbytné pro poskytnutí služby (např. hosting) nebo kdy to
              vyžaduje zákon.
            </p>

            <h2>8. Cookies</h2>
            <p>
              Tento web používá pouze technicky nezbytné cookies pro správné
              fungování. Nepoužíváme analytické ani marketingové cookies bez
              vašeho souhlasu.
            </p>

            <h2>9. Kontakt</h2>
            <p>
              V případě dotazů ohledně zpracování osobních údajů nás
              kontaktujte na{' '}
              <a href="mailto:info@weboffka.cz">info@weboffka.cz</a>.
            </p>

            <p className="text-sm text-muted/60 mt-8">
              Poslední aktualizace: únor 2026
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
