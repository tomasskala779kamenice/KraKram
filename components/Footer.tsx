import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      {/* Povinné zdravotní varování dle vyhl. 448/2025 Sb. §12 */}
      <div className="bg-ink px-6 py-10">
        <div className="max-w-6xl mx-auto">
          {/* Hlavička varování */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shrink-0">
              <span className="text-ink text-lg font-black">18+</span>
            </div>
            <p className="text-white text-2xl font-black tracking-wide uppercase">
              Zdravotní upozornění
            </p>
          </div>

          <div className="border-t-2 border-white/30 pt-6 grid md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <span className="text-white text-2xl shrink-0">⚠</span>
              <p className="text-white text-lg font-semibold leading-relaxed">
                <span className="block text-white/60 text-sm uppercase tracking-widest mb-1">Není určeno osobám mladším 18 let</span>
                Psychomodulační látky mají psychoaktivní účinky. Výrobek není určen k inhalaci, kouření ani transdermálnímu použití.
              </p>
            </div>
            <div className="flex gap-4">
              <span className="text-white text-2xl shrink-0">⚕</span>
              <p className="text-white text-lg font-semibold leading-relaxed">
                <span className="block text-white/60 text-sm uppercase tracking-widest mb-1">Zdravotní rizika</span>
                Pravidelné užívání může vést k závislosti. Neužívejte v kombinaci s léky bez konzultace s lékařem. Nevhodné pro těhotné a kojící ženy.
              </p>
            </div>
          </div>

          <p className="mt-6 text-white/40 text-sm">
            Dle vyhlášky č. 448/2025 Sb., §12
          </p>
        </div>
      </div>

      <footer className="bg-ink text-cream/40 px-6 md:px-12 pt-14 pb-10">
        <div className="max-w-6xl mx-auto">
          {/* Logo row */}
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10 pb-10 border-b border-cream/10">
            <Image
              src="/logo.png"
              alt="KraKrám"
              width={200}
              height={200}
              className="h-52 w-auto object-contain opacity-80"
            />
            <div className="flex flex-col md:flex-row gap-10 text-sm text-cream/50 text-center md:text-left">
              <div>
                <p className="text-cream/70 font-semibold mb-2">Pobočky</p>
                <p>nám. F. Křižíka 496/10, Tábor</p>
                <p>Klášterská, Jindřichův Hradec</p>
              </div>
              <div>
                <p className="text-cream/70 font-semibold mb-2">Kontakt</p>
                <p>info@ksh-partners.cz</p>
                <p>+420 731 536 855</p>
              </div>
              <div>
                <p className="text-cream/70 font-semibold mb-2">Otevírací doba</p>
                <p>Po–Ne: 10:00–20:00</p>
              </div>
            </div>
          </div>

          {/* Bottom row */}
          <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
            <p>© {year} <span className="text-cream/70 font-medium">KraKrám</span></p>
            <p className="text-center leading-relaxed max-w-md">
              Prodej výhradně osobám starším 18 let. Produkty jsou psychomodulační látky
              ve smyslu vyhl. č.&nbsp;448/2025 Sb. Prodej pouze na kamenných pobočkách.
            </p>
            <a href="/blog" className="text-cream/50 hover:text-cream transition-colors">Blog</a>
          </div>
        </div>
      </footer>
    </>
  );
}
