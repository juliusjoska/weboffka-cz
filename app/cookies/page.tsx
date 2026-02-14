import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cookies',
  description: 'Informace o používání souborů cookies na webu weboffka.cz. Používáme pouze technicky nezbytné cookies.',
}

export default function CookiesPage() {
  return (
    <div className="w-container w-section pt-32">
      <h1 className="w-heading mb-4">Zásady používání cookies</h1>
      <p className="text-text-secondary mb-10">Účinnost od 1. února 2026</p>

      <div className="prose-dark">
        <h2>1. Co jsou cookies</h2>
        <p>
          Cookies jsou malé textové soubory, které se ukládají do vašeho prohlížeče
          při návštěvě webových stránek. Slouží k zajištění správné funkčnosti webu,
          zapamatování vašich preferencí a zlepšování uživatelského zážitku.
        </p>

        <h2>2. Jaké cookies používáme</h2>
        <p>
          Na webu weboffka.cz používáme <strong>pouze technicky nezbytné cookies</strong>,
          které jsou nezbytné pro základní funkčnost webu. Tyto cookies nevyžadují váš
          souhlas, protože bez nich by web nemohl správně fungovat.
        </p>
        <p>
          <strong>Nepoužíváme žádné analytické, marketingové ani sledovací cookies.</strong>
        </p>

        <h2>3. Přehled cookies</h2>
        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th>Název</th>
                <th>Účel</th>
                <th>Typ</th>
                <th>Expirace</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>cookie-consent</code></td>
                <td>Zapamatování vašeho rozhodnutí o cookies (zda jste klikli na banner)</td>
                <td>Technicky nezbytný</td>
                <td>1 rok</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>4. Cookies třetích stran</h2>
        <p>
          Tento web nepoužívá žádné cookies třetích stran. Nepoužíváme Google Analytics,
          Facebook Pixel ani jiné nástroje třetích stran, které by ukládaly cookies
          do vašeho prohlížeče.
        </p>

        <h2>5. Jak cookies spravovat</h2>
        <p>
          Cookies můžete kdykoli vymazat nebo zablokovat v nastavení vašeho prohlížeče.
          Postup se liší podle použitého prohlížeče:
        </p>
        <ul>
          <li><strong>Google Chrome</strong> — Nastavení &rarr; Soukromí a zabezpečení &rarr; Soubory cookie a jiná data webů</li>
          <li><strong>Mozilla Firefox</strong> — Nastavení &rarr; Soukromí a zabezpečení &rarr; Cookies a data stránek</li>
          <li><strong>Safari</strong> — Předvolby &rarr; Soukromí &rarr; Spravovat data webových stránek</li>
          <li><strong>Microsoft Edge</strong> — Nastavení &rarr; Soukromí, vyhledávání a služby &rarr; Cookies</li>
        </ul>
        <p>
          Upozorňujeme, že zablokování technicky nezbytných cookies může negativně ovlivnit
          funkčnost webu.
        </p>

        <h2>6. Souvislost s ochranou osobních údajů</h2>
        <p>
          Podrobnější informace o zpracování osobních údajů naleznete na stránce{' '}
          <Link href="/ochrana-osobnich-udaju">Ochrana osobních údajů</Link>.
        </p>

        <h2>7. Změny zásad</h2>
        <p>
          Tyto zásady používání cookies jsou platné a účinné od 1. února 2026.
          V případě změny cookies na tomto webu budou tyto zásady aktualizovány.
          Aktuální znění je vždy dostupné na této stránce.
        </p>
      </div>
    </div>
  )
}
