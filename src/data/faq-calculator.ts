import type { FaqItem } from '@/components/shared/Faq'

export const FAQ_CALCULATOR: FaqItem[] = [
  {
    question: 'Ce este mai avantajos în 2026: PFA sau SRL?',
    answer:
      'Depinde de venitul lunar. La venituri mici și medii (sub ~15.000 Lei/lună), SRL Micro este adesea mai avantajos datorită impozitului de 1% pe venit. La venituri mari, PFA devine competitiv deoarece CAS și CASS sunt plafonate — nu plătești contribuții la infinit. Cel mai bun mod de a compara este să folosești calculatorul de mai sus cu venitul tău real.',
  },
  {
    question: 'Cât impozit plătesc ca SRL Micro în 2026?',
    answer:
      'Un SRL Micro plătește 1% impozit pe venit (din ianuarie 2026, pentru firmele cu cifra de afaceri sub 100.000 EUR). Când distribui dividende, mai plătești 16% impozit pe dividende și, dacă dividendele depășesc 6 salarii minime, și CASS de 10% (plafonate la 12 salarii minime pe an). La acestea se adaugă taxele pentru angajatul cu salariu minim obligatoriu.',
  },
  {
    question: 'Ce taxe plătesc ca SRL cu impozit pe profit?',
    answer:
      'Un SRL pe profit plătește 16% impozit pe profit, aplicat pe profitul net (venituri minus cheltuieli deductibile). Dividendele distribuite din profit sunt impozitate suplimentar cu 16%, iar dacă suma dividendelor depășește pragul de 6 salarii minime, se datorează și CASS de 10%, plafonată la 12 salarii minime anual.',
  },
  {
    question: 'La ce venit devine SRL mai avantajos decât PFA?',
    answer:
      'La venituri mici (sub ~15.000 Lei/lună net), SRL Micro tinde să fie mai avantajos. Între ~15.000 și ~33.000 Lei/lună, diferența se micșorează. Peste ~33.000 Lei/lună, PFA devine adesea mai eficient fiscal deoarece CAS și CASS sunt plafonate — nu cresc proporțional cu venitul. Folosește calculatorul pentru cifre exacte pe situația ta.',
  },
  {
    question: 'Ce taxe plătesc ca PFA în 2026?',
    answer:
      'Ca PFA plătești: CAS (pensie) 25% dacă depășești 12 salarii minime net anual, plafonat la 24 salarii minime; CASS (sănătate) 10%, plafonată la 72 salarii minime; impozit pe venit 10% aplicat pe venitul net după deducerea CAS și CASS. La venituri mici (sub 12 salarii minime net anual), nu datorezi CAS deloc.',
  },
]
