import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Ochrana osobních údajů',
  description: 'Zásady ochrany osobních údajů webu weboffka.cz provozovaného Julius Joska — ajtak.it. Informace o zpracování osobních údajů dle GDPR.',
}

export default function OchranaOsobnichUdajuPage() {
  return (
    <div className="container section pt-32">
      <h1 className="heading-2 mb-4">Ochrana osobních údajů</h1>
      <p className="text-muted mb-10">Účinnost od 1. února 2026</p>

      <div className="prose prose-invert prose-lime max-w-none prose-headings:text-foreground prose-p:text-muted prose-li:text-muted prose-strong:text-foreground prose-a:text-accent hover:prose-a:text-accent-light">
        <h2>1. Správce osobních údajů</h2>
        <p>
          Správcem osobních údajů je <strong>Julius Joska — ajtak.it</strong>, IČO: 24409979,
          se sídlem v Praze, zapsaný v živnostenském rejstříku (dále jen &quot;správce&quot;).
        </p>
        <p>
          Kontaktní e-mail: <a href="mailto:info@ajtak.it">info@ajtak.it</a><br />
          Telefon: +420 775 305 305<br />
          Web: <a href="https://weboffka.cz">weboffka.cz</a>
        </p>

        <h2>2. Účely zpracování osobních údajů</h2>
        <p>Vaše osobní údaje zpracováváme pro následující účely:</p>
        <ul>
          <li><strong>Vyřízení poptávky a kontaktního formuláře</strong> — zpracování vašich dotazů, poptávek a požadavků zaslaných prostřednictvím kontaktního formuláře nebo e-mailu.</li>
          <li><strong>Komunikace s klienty</strong> — vedení korespondence související s poskytováním služeb, zasílání nabídek a informací o stavu zakázky.</li>
          <li><strong>Plnění smlouvy</strong> — zpracování údajů nezbytných pro uzavření a plnění smlouvy o poskytování služeb.</li>
          <li><strong>Oprávněný zájem</strong> — ochrana práv správce, zlepšování služeb a zajištění bezpečnosti webu.</li>
        </ul>

        <h2>3. Právní základ zpracování</h2>
        <p>Osobní údaje zpracováváme na základě následujících právních titulů:</p>
        <ul>
          <li><strong>Souhlas subjektu údajů</strong> (čl. 6 odst. 1 písm. a) GDPR) — při odeslání kontaktního formuláře.</li>
          <li><strong>Plnění smlouvy</strong> (čl. 6 odst. 1 písm. b) GDPR) — pro realizaci objednané služby.</li>
          <li><strong>Oprávněný zájem správce</strong> (čl. 6 odst. 1 písm. f) GDPR) — pro zajištění bezpečnosti webu, technický provoz a ochranu práv správce.</li>
          <li><strong>Plnění právní povinnosti</strong> (čl. 6 odst. 1 písm. c) GDPR) — pro účetní a daňové povinnosti.</li>
        </ul>

        <h2>4. Kategorie zpracovávaných údajů</h2>
        <p>V rámci poskytování služeb zpracováváme tyto kategorie osobních údajů:</p>
        <ul>
          <li><strong>Identifikační údaje</strong> — jméno a příjmení, název firmy.</li>
          <li><strong>Kontaktní údaje</strong> — e-mailová adresa, telefonní číslo.</li>
          <li><strong>Technické údaje</strong> — IP adresa, typ prohlížeče, informace o zařízení (pro zajištění bezpečnosti a funkčnosti webu).</li>
          <li><strong>Údaje z komunikace</strong> — obsah zpráv zaslaných prostřednictvím kontaktního formuláře nebo e-mailu.</li>
        </ul>

        <h2>5. Doba uchovávání údajů</h2>
        <p>Osobní údaje uchováváme po dobu:</p>
        <ul>
          <li><strong>Údaje z kontaktního formuláře</strong> — 3 roky od posledního kontaktu, nebo do odvolání souhlasu.</li>
          <li><strong>Smluvní údaje</strong> — po dobu trvání smlouvy a 3 roky po jejím ukončení (pro případné reklamace).</li>
          <li><strong>Účetní a daňové doklady</strong> — po dobu stanovenou zákonem (10 let u účetních dokladů, 3 roky u daňových dokladů).</li>
          <li><strong>Technické údaje (logy)</strong> — maximálně 90 dní.</li>
        </ul>
        <p>Po uplynutí doby uchovávání jsou údaje bezpečně smazány nebo anonymizovány.</p>

        <h2>6. Práva subjektu údajů</h2>
        <p>V souvislosti se zpracováním vašich osobních údajů máte následující práva:</p>
        <ul>
          <li><strong>Právo na přístup</strong> — máte právo získat potvrzení, zda jsou vaše údaje zpracovávány, a pokud ano, získat k nim přístup.</li>
          <li><strong>Právo na opravu</strong> — máte právo požadovat opravu nepřesných nebo doplnění neúplných údajů.</li>
          <li><strong>Právo na výmaz</strong> — máte právo požadovat vymazání vašich údajů, pokud pominul účel zpracování nebo byl odvolán souhlas.</li>
          <li><strong>Právo na omezení zpracování</strong> — máte právo požadovat omezení zpracování za podmínek stanovených GDPR.</li>
          <li><strong>Právo na přenositelnost údajů</strong> — máte právo získat své údaje ve strukturovaném, běžně používaném a strojově čitelném formátu.</li>
          <li><strong>Právo vznést námitku</strong> — máte právo vznést námitku proti zpracování založenému na oprávněném zájmu správce.</li>
          <li><strong>Právo odvolat souhlas</strong> — pokud je zpracování založeno na vašem souhlasu, máte právo ho kdykoli odvolat, aniž by tím byla dotčena zákonnost předchozího zpracování.</li>
          <li><strong>Právo podat stížnost</strong> — máte právo podat stížnost u dozorového úřadu (viz níže).</li>
        </ul>
        <p>
          Pro uplatnění svých práv nás kontaktujte na e-mailu{' '}
          <a href="mailto:info@ajtak.it">info@ajtak.it</a>. Na vaši žádost odpovíme
          nejpozději do 30 dnů.
        </p>

        <h2>7. Příjemci osobních údajů</h2>
        <p>Vaše osobní údaje mohou být předány těmto kategoriím příjemců:</p>
        <ul>
          <li><strong>Poskytovatel hostingu</strong> — za účelem provozu webových stránek a zajištění jejich dostupnosti.</li>
          <li><strong>Poskytovatel e-mailových služeb (SMTP)</strong> — za účelem doručování e-mailů z kontaktního formuláře.</li>
        </ul>
        <p>
          Všichni příjemci jsou povinni dodržovat ochranu osobních údajů v souladu s GDPR.
          Osobní údaje nepředáváme do třetích zemí mimo Evropský hospodářský prostor.
        </p>

        <h2>8. Soubory cookies</h2>
        <p>
          Informace o používání souborů cookies na tomto webu naleznete na stránce{' '}
          <Link href="/cookies">Cookies</Link>.
        </p>

        <h2>9. Zabezpečení osobních údajů</h2>
        <p>
          Přijali jsme vhodná technická a organizační opatření k zajištění bezpečnosti
          vašich osobních údajů, včetně:
        </p>
        <ul>
          <li>Šifrování přenosu dat prostřednictvím protokolu HTTPS (SSL/TLS).</li>
          <li>Omezení přístupu k osobním údajům pouze na oprávněné osoby.</li>
          <li>Pravidelné zálohování dat.</li>
          <li>Ochrana serverů proti neoprávněnému přístupu.</li>
        </ul>

        <h2>10. Dozorový úřad</h2>
        <p>
          Dozorovým úřadem pro oblast ochrany osobních údajů v České republice je:
        </p>
        <p>
          <strong>Úřad pro ochranu osobních údajů (ÚOOÚ)</strong><br />
          Pplk. Sochora 27<br />
          170 00 Praha 7<br />
          Tel.: +420 234 665 111<br />
          E-mail: <a href="mailto:posta@uoou.gov.cz">posta@uoou.gov.cz</a><br />
          Web: <a href="https://www.uoou.cz" target="_blank" rel="noopener noreferrer">www.uoou.cz</a>
        </p>

        <h2>11. Závěrečná ustanovení</h2>
        <p>
          Tyto zásady ochrany osobních údajů jsou platné a účinné od 1. února 2026.
          Správce si vyhrazuje právo tyto zásady jednostranně aktualizovat, přičemž aktuální
          znění bude vždy dostupné na této stránce.
        </p>
      </div>
    </div>
  )
}
