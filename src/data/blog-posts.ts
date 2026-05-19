export type BlogCategory = 'toate' | 'contabilitate' | 'noutati' | 'srl-vs-pfa' | 'infiintare'

export interface BlogPost {
  slug: string
  title: string
  category: BlogCategory
  categoryLabel: string
  description: string
  date: string
}

export const BLOG_CATEGORIES: { value: BlogCategory; label: string }[] = [
  { value: 'toate', label: 'Toate articolele' },
  { value: 'contabilitate', label: 'Contabilitate și taxe' },
  { value: 'noutati', label: 'Noutăți' },
  { value: 'srl-vs-pfa', label: 'SRL vs PFA' },
  { value: 'infiintare', label: 'Înființare SRL' },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'declaratia-unica-pe-dividende-cum-completezi-d212',
    title: 'Declarația unică pe dividende 2026',
    category: 'contabilitate',
    categoryLabel: 'Contabilitate și taxe',
    description: 'Impozit pe dividende reținut la sursă și CASS pe 3 trepte — ce trebuie să știi în 2026.',
    date: '17 mai 2026',
  },
  {
    slug: 'impozit-pe-profit-srl-ghid-complet',
    title: 'Impozit pe profit SRL',
    category: 'contabilitate',
    categoryLabel: 'Contabilitate și taxe',
    description: 'Cota 16% impozit pe profit SRL în 2026 — calcul, termene de plată și deduceri permise.',
    date: '12 mai 2026',
  },
  {
    slug: 'inregistrare-srl-online-onrc',
    title: 'Cum faci înregistrarea unui SRL online la ONRC',
    category: 'infiintare',
    categoryLabel: 'Înființare SRL',
    description: 'Cum îți înregistrezi SRL-ul online pe portalul ONRC, pas cu pas, cu capturi de ecran.',
    date: '17 aprilie 2026',
  },
  {
    slug: 'act-constitutiv-srl',
    title: 'Act Constitutiv SRL 2026',
    category: 'infiintare',
    categoryLabel: 'Înființare SRL',
    description: 'Act constitutiv SRL 2026: capital minim 500 lei, 13 clauze obligatorii explicate.',
    date: '6 aprilie 2026',
  },
  {
    slug: 'cum-se-obtine-cazierul-fiscal-ghid-complet-pentru-persoane-fizice-si-juridice',
    title: 'Cazier fiscal',
    category: 'infiintare',
    categoryLabel: 'Înființare SRL',
    description: 'Cum obții cazierul fiscal gratuit prin SPV ANAF: pași concreți și documente necesare.',
    date: '14 mai 2026',
  },
  {
    slug: 'prima-angajare-srl-ghid-complet-costuri-contracte-obligatii',
    title: 'Prima angajare în SRL',
    category: 'contabilitate',
    categoryLabel: 'Contabilitate și taxe',
    description: 'Angajezi prima persoană în SRL? Află pașii, documentele și costurile reale.',
    date: '24 martie 2026',
  },
  {
    slug: 'dividende-srl-ghid-complet',
    title: 'Dividende SRL 2026',
    category: 'contabilitate',
    categoryLabel: 'Contabilitate și taxe',
    description: 'Impozitul pe dividende SRL în 2026 este 16%. Tot ce trebuie să știi despre distribuire.',
    date: '23 martie 2026',
  },
  {
    slug: 'cum-scoti-bani-din-firma-srl',
    title: 'Cum scoți bani din firmă în 2026',
    category: 'noutati',
    categoryLabel: 'Noutăți',
    description: 'Dividende, salariu, chirie, beneficii sau restituire împrumut — care e varianta optimă.',
    date: '27 februarie 2026',
  },
  {
    slug: 'cum-creditezi-firma-ta-srl-ghid-pentru-imprumut-societate-de-catre-persoana-fizica--model-contract',
    title: 'Cum creditezi firma ta SRL',
    category: 'contabilitate',
    categoryLabel: 'Contabilitate și taxe',
    description: 'Cum împrumuți legal SRL-ul în 2026: pași, contract, dobândă, taxe și restricții.',
    date: '17 februarie 2026',
  },
  {
    slug: 'cum-infiintezi-un-srl',
    title: 'Cum înființezi un SRL în 2026',
    category: 'infiintare',
    categoryLabel: 'Înființare SRL',
    description: 'Înființează un SRL în 2026 în 8 pași simpli, cu doar 152 lei taxă legală.',
    date: '12 martie 2026',
  },
  {
    slug: 'reges-ce-este-cum-functioneaza-termene-sactiuni',
    title: 'REGES-ONLINE — noul REVISAL',
    category: 'contabilitate',
    categoryLabel: 'Contabilitate și taxe',
    description: 'Ce este REGES-ONLINE, cum te înrolezi ca angajator și ce obligații ai.',
    date: '28 ianuarie 2026',
  },
  {
    slug: 'cum-alegi-numele-unei-firme-srl-exemple-practice-si-ghid-de-verificare-disponibilitate',
    title: 'Cum alegi numele unei firme',
    category: 'infiintare',
    categoryLabel: 'Înființare SRL',
    description: 'Cum alegi un nume de SRL care trece la ONRC: reguli, restricții și exemple practice.',
    date: '26 ianuarie 2026',
  },
  {
    slug: 'cheltuieli-deductibile-srl',
    title: 'Cheltuieli deductibile SRL 2026',
    category: 'contabilitate',
    categoryLabel: 'Contabilitate și taxe',
    description: 'Ce cheltuieli poți deduce la un SRL în 2026: integrale și parțial deductibile.',
    date: '24 martie 2026',
  },
  {
    slug: 'srl-vs-pfa',
    title: 'PFA sau SRL: Ce alegi în 2026?',
    category: 'srl-vs-pfa',
    categoryLabel: 'SRL vs PFA',
    description: 'Diferențele, avantajele și taxele explicate clar — cu exemple de sume nete pe venituri reale.',
    date: '9 martie 2026',
  },
  {
    slug: 'ordonanta-trenulet',
    title: 'Ordonanța Trenuleț',
    category: 'noutati',
    categoryLabel: 'Noutăți',
    description: 'Ce taxe noi aduce Ordonanța Trenuleț și cum cresc salariile de la 1 iulie 2026.',
    date: '9 februarie 2026',
  },
  {
    slug: 'sediul-social-al-firmei-ghid-complet-despre-stabilire-schimbare-si-gazduire',
    title: 'Sediul social al firmei',
    category: 'infiintare',
    categoryLabel: 'Înființare SRL',
    description: 'Diferențele dintre sediul social cu activitate și fără activitate — ce alegi și de ce.',
    date: '24 noiembrie 2025',
  },
  {
    slug: 'contract-de-comodat-ghid-complet-auto-locuinta-sediu-social',
    title: 'Contract de comodat',
    category: 'contabilitate',
    categoryLabel: 'Contabilitate și taxe',
    description: 'Ce acte sunt necesare și cum poți deduce legal cheltuieli auto cu contractul de comodat.',
    date: '14 aprilie 2026',
  },
  {
    slug: 'comparatie-intre-principalele-servicii-pentru-infiintare-srl-in-romania',
    title: 'Comparație servicii înființare SRL',
    category: 'infiintare',
    categoryLabel: 'Înființare SRL',
    description: 'Compară cele mai populare servicii de înființare SRL online din România.',
    date: '18 martie 2026',
  },
  {
    slug: 'inregistrare-in-spv-anaf-pentru-persoane-fizice-si-juridice-srl-ghid-complet',
    title: 'Înregistrare în SPV ANAF',
    category: 'contabilitate',
    categoryLabel: 'Contabilitate și taxe',
    description: 'Ghid complet despre înregistrarea în SPV ANAF pentru persoane fizice și SRL-uri.',
    date: '21 ianuarie 2026',
  },
  {
    slug: 'ghid-ro-e-factura',
    title: 'Ghid RO e-Factura',
    category: 'contabilitate',
    categoryLabel: 'Contabilitate și taxe',
    description: 'Cum te înregistrezi în RO e-Factura, termenele de transmitere și obligațiile actuale.',
    date: '17 septembrie 2025',
  },
]
