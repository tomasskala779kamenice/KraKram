const facts = [
  {
    num: "01",
    title: "Původ a botanika",
    text: "Kratom (Mitragyna speciosa) je strom z čeledi mořenovitých (Rubiaceae), příbuzný kávovníku. Roste přirozeně v tropických deštných lesích Indonésie, Malajsie, Thajska a Myanmaru, kde dosahuje výšky až 25 metrů.",
  },
  {
    num: "02",
    title: "Tradiční využití",
    text: "V jihovýchodní Asii je kratom znám po tisíce let. Místní obyvatelé žvýkali čerstvé listy nebo je vařili do čaje jako součást každodenního života — ke zvýšení energie při fyzické práci i k uklidnění po náročném dni.",
  },
  {
    num: "03",
    title: "Aktivní látky",
    text: "Hlavními alkaloidy jsou mitragynin a 7-hydroxymitragynin. Tyto látky interagují s různými receptory v těle a mohou v závislosti na množství projevovat stimulační nebo uklidňující účinky. Přesný mechanismus je předmětem vědeckého výzkumu.",
  },
  {
    num: "04",
    title: "Formy a odrůdy",
    text: "Kratom se nejčastěji prodává jako jemný prášek sušených a mletých listů. Odrůdy se tradičně označují barvou žilnatiny listu (bílá, zelená, červená), přičemž každá má jiný alkaloidový profil a charakter účinků.",
  },
  {
    num: "05",
    title: "Právní status v ČR",
    text: "V České republice kratom není zařazen na seznam zakázaných látek a jeho prodej, držení ani osobní užívání nejsou trestné. Zároveň není registrován jako léčivý přípravek — jedná se o botanický produkt prodávaný jako sběratelský nebo přírodovědný objekt.",
  },
  {
    num: "06",
    title: "Zodpovědné užívání",
    text: "Doporučujeme začínat s malými množstvími a prodloužit intervaly mezi užitím. Pravidelné každodenní užívání může vést k toleranci a závislosti. Kratom není vhodný pro těhotné ženy, osoby mladší 18 let ani pro osoby užívající opioidní léky.",
  },
];

export default function WhatIsKratom() {
  return (
    <section id="co-je-kratom" className="section-padding bg-cream">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="section-subtitle mb-4">Vzdělání</p>
          <div className="divider mb-8 mx-auto" />
          <h2 className="section-title mb-4">Co je kratom?</h2>
          <p className="text-ink-soft text-xl leading-relaxed max-w-2xl mx-auto">
            Věříme, že informovaný zákazník je spokojeným zákazníkem. Zde najdete
            vše podstatné, co byste o kratom u měli vědět.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {facts.map((f) => (
            <div key={f.num} className="bg-white border border-border-green rounded-2xl p-8 hover:border-forest/50 transition-colors">
              <p className="text-sm font-bold text-forest mb-4">{f.num}</p>
              <h3 className="font-bold text-ink text-xl mb-3">{f.title}</h3>
              <p className="text-ink-soft text-lg leading-relaxed">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
