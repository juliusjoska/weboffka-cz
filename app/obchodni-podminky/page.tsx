import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Obchodní podmínky',
  description: 'Obchodní podmínky pro poskytování služeb tvorby webových stránek a e-shopů na míru od Julius Joska — ajtak.it.',
}

export default function ObchodniPodminkyPage() {
  return (
    <div className="w-container w-section pt-32">
      <h1 className="w-heading mb-4">Obchodní podmínky</h1>
      <p className="text-text-secondary mb-10">Účinnost od 1. února 2026</p>

      <div className="prose-dark">
        <h2>1. Úvodní ustanovení</h2>
        <p>
          Tyto obchodní podmínky (dále jen &quot;podmínky&quot;) upravují vzájemná práva
          a povinnosti mezi poskytovatelem a objednatelem při poskytování služeb tvorby
          webových stránek a e-shopů na míru.
        </p>
        <p>
          <strong>Poskytovatel:</strong><br />
          Julius Joska — ajtak.it<br />
          IČO: 24409979<br />
          Neplátce DPH<br />
          Sídlo: Praha<br />
          E-mail: <a href="mailto:info@ajtak.it">info@ajtak.it</a><br />
          Telefon: +420 731 860 594<br />
          Web: <a href="https://weboffka.cz">weboffka.cz</a>
        </p>
        <p>
          <strong>Objednatel:</strong> fyzická nebo právnická osoba, která si u poskytovatele
          objedná služby (dále jen &quot;klient&quot;).
        </p>

        <h2>2. Předmět smlouvy</h2>
        <p>
          Předmětem smlouvy je tvorba webových stránek, e-shopů, landing pages, webových
          aplikací a souvisejících služeb na míru dle specifikace dohodnuté mezi
          poskytovatelem a klientem (dále jen &quot;dílo&quot;).
        </p>
        <p>Rozsah díla, jeho specifikace, termín dodání a cena jsou vždy stanoveny v individuální nabídce nebo smlouvě.</p>

        <h2>3. Objednávka a uzavření smlouvy</h2>
        <ol>
          <li>Klient poptá služby prostřednictvím kontaktního formuláře, e-mailu nebo telefonu.</li>
          <li>Poskytovatel zpracuje nezávaznou nabídku obsahující rozsah díla, harmonogram a cenovou kalkulaci.</li>
          <li>Smlouva je uzavřena písemným potvrzením nabídky klientem (e-mailem nebo podpisem smlouvy) a uhrazením zálohy.</li>
          <li>Potvrzením nabídky klient souhlasí s těmito obchodními podmínkami.</li>
        </ol>

        <h2>4. Cena a platební podmínky</h2>
        <ul>
          <li>Cena díla je vždy stanovena individuálně v nabídce nebo smlouvě.</li>
          <li>Poskytovatel je neplátce DPH — uvedené ceny jsou konečné.</li>
          <li><strong>Záloha:</strong> 50 % z celkové ceny díla, splatná před zahájením prací.</li>
          <li><strong>Doplatek:</strong> 50 % z celkové ceny díla, splatný po předání díla a jeho schválení klientem.</li>
          <li>Splatnost faktur je 14 dní ode dne vystavení, není-li dohodnuto jinak.</li>
          <li>V případě prodlení s úhradou je poskytovatel oprávněn pozastavit práce na díle.</li>
        </ul>

        <h2>5. Dodací podmínky</h2>
        <ul>
          <li>Termín dodání díla je stanoven v nabídce nebo smlouvě a začíná běžet ode dne uhrazení zálohy a dodání všech podkladů klientem.</li>
          <li>Poskytovatel dodá dílo v dohodnutém rozsahu a kvalitě.</li>
          <li>Klient je povinen poskytnout součinnost — zejména dodat podklady (texty, obrázky, loga) ve stanovených termínech.</li>
          <li>V případě prodlení klienta s dodáním podkladů se termín dodání díla přiměřeně prodlužuje.</li>
          <li>Dílo je předáno zpřístupněním na dohodnuté doméně nebo serveru, případně předáním zdrojových souborů.</li>
          <li>Klient má 7 pracovních dní na kontrolu díla a nahlášení připomínek. Pokud klient v této lhůtě nereaguje, považuje se dílo za schválené.</li>
        </ul>

        <h2>6. Autorská práva</h2>
        <ul>
          <li>Zdrojový kód a grafický návrh díla jsou autorským dílem poskytovatele.</li>
          <li><strong>Po úplném zaplacení ceny díla přechází na klienta licence k užívání díla</strong> v rozsahu nezbytném pro jeho provoz, úpravy a další rozvoj.</li>
          <li>Poskytovatel si vyhrazuje právo uvést dílo ve svém portfoliu jako referenci, není-li dohodnuto jinak.</li>
          <li>Klient odpovídá za to, že podklady jím dodané (texty, obrázky, loga) neporušují práva třetích osob.</li>
        </ul>

        <h2>7. Reklamace a záruka</h2>
        <ul>
          <li>Poskytovatel poskytuje na dílo <strong>záruku 6 měsíců</strong> od data předání.</li>
          <li>Záruka se vztahuje na funkční vady díla, které nebyly způsobeny zásahem klienta nebo třetí strany.</li>
          <li>Reklamaci je nutné uplatnit písemně (e-mailem) s popisem vady.</li>
          <li>Poskytovatel se zavazuje reklamaci posoudit a vyřídit do 30 dnů od jejího doručení.</li>
          <li>Záruka se nevztahuje na vady způsobené: zásahem klienta do zdrojového kódu, nekompatibilitou s neautorizovanými doplňky, změnou hostingového prostředí bez vědomí poskytovatele.</li>
        </ul>

        <h2>8. Odstoupení od smlouvy</h2>
        <ul>
          <li><strong>Klient</strong> může od smlouvy odstoupit kdykoli před dokončením díla. V takovém případě má poskytovatel nárok na úhradu za práce již provedené. Záloha se nevrací.</li>
          <li><strong>Poskytovatel</strong> může od smlouvy odstoupit, pokud klient neposkytne potřebnou součinnost ani po opakované výzvě (s lhůtou minimálně 14 dní), nebo pokud je klient v prodlení s úhradou delším než 30 dní.</li>
          <li>Odstoupení od smlouvy musí být učiněno písemně (e-mailem).</li>
        </ul>

        <h2>9. Ochrana důvěrných informací</h2>
        <p>
          Obě strany se zavazují zachovávat mlčenlivost o důvěrných informacích,
          které se dozví v souvislosti s plněním smlouvy. Za důvěrné informace se považují
          zejména obchodní strategie, přístupové údaje, technická řešení a cenové podmínky.
        </p>
        <p>
          Tato povinnost trvá i po ukončení smluvního vztahu, a to po dobu 2 let.
        </p>

        <h2>10. Ochrana osobních údajů</h2>
        <p>
          Informace o zpracování osobních údajů jsou uvedeny v dokumentu{' '}
          <a href="/ochrana-osobnich-udaju">Ochrana osobních údajů</a>.
        </p>

        <h2>11. Závěrečná ustanovení</h2>
        <ul>
          <li>Tyto obchodní podmínky se řídí právním řádem České republiky, zejména zákonem č. 89/2012 Sb., občanský zákoník.</li>
          <li>Pro řešení případných sporů jsou příslušné soudy České republiky, místně příslušný soud v Praze.</li>
          <li>Pokud by některé ustanovení těchto podmínek bylo shledáno neplatným nebo nevymahatelným, platnost ostatních ustanovení tím není dotčena.</li>
          <li>Poskytovatel si vyhrazuje právo tyto obchodní podmínky jednostranně měnit. Změny nemají vliv na již uzavřené smlouvy.</li>
          <li>Tyto obchodní podmínky jsou platné a účinné od 1. února 2026.</li>
        </ul>
      </div>
    </div>
  )
}
