'use client';

import { Plus_Jakarta_Sans } from 'next/font/google';
import { useState } from 'react';
import Link from 'next/link';
import { ChiroVoiceBot } from '@/components/voice-bot';
import Navigation from '@/components/navigation';
import { useLanguage } from '@/contexts/language-context';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
});

// ─── Calendar helpers ─────────────────────────────────────────────────────────
const MONTH_NAMES_EN = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const MONTH_NAMES_NL = ['Januari','Februari','Maart','April','Mei','Juni','Juli','Augustus','September','Oktober','November','December'];
const DAY_NAMES_EN = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
const DAY_NAMES_NL = ['Zo','Ma','Di','Wo','Do','Vr','Za'];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}
function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}
function isSunday(year: number, month: number, day: number) {
  return new Date(year, month, day).getDay() === 0;
}
function isSaturday(year: number, month: number, day: number) {
  return new Date(year, month, day).getDay() === 6;
}

const TIME_SLOTS_WEEKDAY = [
  '10:00','10:30','11:00','11:30','12:00','12:30',
  '13:00','13:30','14:00','14:30','15:00','15:30',
  '16:00','16:30',
];
const TIME_SLOTS_SATURDAY = [
  '10:00','10:30','11:00','11:30','12:00','12:30','13:00','13:30',
];

// ─── Data ─────────────────────────────────────────────────────────────────────
const specialties = [
  { en: 'Lower Back Pain', nl: 'Lage Rugpijn', slug: 'lage-rugpijn' },
  { en: 'Neck Pain', nl: 'Nekpijn', slug: 'nek' },
  { en: 'Headaches & Migraines', nl: 'Hoofdpijn en Migraine', slug: 'hoofdpijn-migraine' },
  { en: 'Whiplash', nl: 'Whiplash', slug: 'whiplash' },
  { en: 'Hernias & Disc Problems', nl: 'Hernia / Discushernia', slug: 'hernia' },
  { en: 'Upper Back & Shoulder Pain', nl: 'Bovenrug & Schouder', slug: 'bovenrug-schouder' },
  { en: 'Sciatica', nl: 'Ischias', slug: 'ischias' },
  { en: 'Sports Injuries', nl: 'Sportblessures', slug: 'sportblessures' },
  { en: 'Pregnancy-Related Pain', nl: 'Zwangerschap', slug: 'zwangerschap' },
  { en: "Infant & Children's Care", nl: "Kinderen & Baby's", slug: 'kinderen' },
  { en: 'Arthritis & Wear-and-Tear', nl: 'Artrose / Slijtage', slug: 'artrose-slijtage' },
  { en: 'Tension Headaches', nl: 'Spanningshoofdpijn', slug: 'spanningshoofdpijn' },
];

const conditionDetails: Record<string, { en: { title: string; what: string; how: string }; nl: { title: string; what: string; how: string } }> = {
  'lage-rugpijn': {
    nl: {
      title: 'Lage Rugpijn',
      what: 'Lage rugpijn is één van de meest voorkomende klachten in Nederland. Het kan variëren van een doffe pijn tot scherpe, uitstralende pijn naar de benen. Oorzaken zijn onder meer verkeerde houding, spierspanning, discusproblemen, of wervelgewricht-dysfunctie.',
      how: 'Chiropractie behandelt lage rugpijn door wervelkolom-correcties toe te passen die de mobiliteit herstellen, zenuwdruk verminderen, en het natuurlijke genezingsproces van het lichaam activeren. Veel patiënten ervaren al na enkele behandelingen significante verlichting.',
    },
    en: {
      title: 'Lower Back Pain',
      what: 'Lower back pain is extremely common — as many as 80% of people will experience it at some point. It can range from a dull ache or stiffness to nerve pain radiating into the legs. Causes include poor posture, muscle strain, disc problems, and joint dysfunction.',
      how: "Chiropractic treats lower back pain through precise spinal adjustments that restore mobility, reduce nerve pressure, and activate the body's natural healing. Many patients notice significant improvement within just a few sessions.",
    },
  },
  'nek': {
    nl: {
      title: 'Nekpijn',
      what: 'Nekpijn kan ontstaan door langdurig beeldschermwerk, slechte slaaphouding, stress, of een whiplash-trauma. Symptomen variëren van stijfheid en spanning tot hoofdpijn en uitstralende pijn naar schouders of armen.',
      how: 'Door gerichte chiropractische correcties van de nekwervels wordt de mobiliteit hersteld en zenuwfunctie genormaliseerd. Combinatie met medische acupunctuur en massage versnelt het herstel en vermindert spierspanning effectief.',
    },
    en: {
      title: 'Neck Pain',
      what: 'Neck pain can arise from prolonged screen use, poor sleeping position, stress, or whiplash. Symptoms range from stiffness and tension to headaches and pain or tingling radiating to the shoulders and arms.',
      how: 'Targeted cervical adjustments restore mobility and normalise nerve function. Combined with medical acupuncture and massage, recovery is accelerated and muscle tension effectively reduced.',
    },
  },
  'hernia': {
    nl: {
      title: 'Hernia / Discushernia',
      what: 'Een hernia ontstaat wanneer de kern van een tussenwervelschijf door de buitenste ring heen drukt. Dit kan druk geven op zenuwen en leiden tot pijn, tintelingen, of krachtsverlies in benen of armen.',
      how: 'Chiropractie kan bij veel hernia-gevallen de druk op de aangedane zenuw verminderen door de wervelkolom te ontlasten en correcte uitlijning te bevorderen. Behandeling richt zich op symptoomverlichting en het voorkomen van verdere schade. In ernstige gevallen verwijzen we door.',
    },
    en: {
      title: 'Herniated Disc',
      what: 'A herniated disc occurs when the soft inner material of an intervertebral disc bulges through the outer layer, pressing on nearby nerves. This can cause back pain, radiating pain, tingling, or weakness in the legs or arms.',
      how: 'Chiropractic can reduce nerve pressure by decompressing the spine and restoring alignment. Treatment focuses on relieving symptoms and preventing further damage. In severe cases, we refer you to a specialist.',
    },
  },
  'whiplash': {
    nl: {
      title: 'Whiplash',
      what: 'Whiplash is een nek-letsel veroorzaakt door plotselinge versnelling of vertraging (bijvoorbeeld bij een auto-ongeluk). Symptomen kunnen direct of vertraagd optreden: nekpijn, hoofdpijn, duizeligheid, concentratieproblemen.',
      how: 'Chiropractische behandeling helpt whiplash-klachten door de beschadigde wervels en gewrichten voorzichtig te mobiliseren, littekweefsel te verminderen, en het herstel van normale beweging te bevorderen. Vroege behandeling voorkomt chronische klachten.',
    },
    en: {
      title: 'Whiplash',
      what: 'Whiplash is a neck injury from sudden acceleration or deceleration — most commonly in car accidents. Symptoms include neck pain, headache, dizziness, and difficulty concentrating, and can appear days after the incident.',
      how: 'Gentle chiropractic mobilisation of affected vertebrae and joints reduces scar tissue, relieves pain, and restores normal movement. Early treatment is key to preventing chronic symptoms.',
    },
  },
  'bovenrug-schouder': {
    nl: {
      title: 'Bovenrug & Schouder',
      what: 'Pijn in de bovenrug en schouders komt vaak voor bij kantoorwerk, stress, of slechte houding. Klachten kunnen uitstralen naar nek of armen en leiden tot hoofdpijn en vermoeidheid.',
      how: 'Chiropractie behandelt bovenrug- en schouderpijn door wervelkolom-correcties, mobilisatie van de schoudergewrichten, en het verminderen van spierspanning. Vaak gecombineerd met therapeutische massage voor optimaal resultaat.',
    },
    en: {
      title: 'Upper Back & Shoulder Pain',
      what: 'Pain between the shoulder blades and in the shoulders is common with desk work, stress, or poor posture. Complaints can radiate to the neck or arms and lead to headaches and fatigue.',
      how: 'Chiropractic corrects spinal alignment, mobilises shoulder joints, and reduces muscle tension. Often combined with therapeutic massage for the best results.',
    },
  },
  'hoofdpijn-migraine': {
    nl: {
      title: 'Hoofdpijn en Migraine',
      what: 'Veel hoofdpijn en migraine heeft een cervicogene oorsprong: veroorzaakt door problemen in de nek en bovenrug. Symptomen variëren van doffe druk tot intense, bonzende pijn met misselijkheid en lichtgevoeligheid.',
      how: 'Chiropractie vermindert hoofdpijn door nekwervels te corrigeren, spierspanning te verlagen, en zenuwprikkeling te normaliseren. Studies tonen aan dat chiropractie effectief is bij chronische hoofdpijn en migraine.',
    },
    en: {
      title: 'Headache & Migraine',
      what: 'Many headaches have a cervicogenic origin — caused by problems in the neck and upper back. Migraines affect approximately 1 in 10 adults. Symptoms range from dull pressure to intense throbbing pain, nausea, and light sensitivity.',
      how: 'Chiropractic corrects cervical vertebrae, lowers muscle tension, and normalises nerve function. Research shows chiropractic is effective for chronic headaches and migraines.',
    },
  },
  'spanningshoofdpijn': {
    nl: {
      title: 'Spanningshoofdpijn',
      what: 'Spanningshoofdpijn voelt aan als een strakke band rond het hoofd en wordt vaak veroorzaakt door langdurige spierspanning in nek en schouders, stress, of verkeerde houding.',
      how: 'Door chiropractische correcties van de nekwervels en bovenrug, gecombineerd met massage en ontspanningstechnieken, wordt de onderliggende spierspanning effectief verminderd en de frequentie van hoofdpijn drastisch verlaagd.',
    },
    en: {
      title: 'Tension Headaches',
      what: 'Tension headaches feel like a tight band around the head and are often caused by prolonged muscle tension in the neck and shoulders, stress, or poor posture.',
      how: 'Chiropractic corrections of the cervical vertebrae and upper back, combined with massage, effectively reduce the underlying muscle tension and lower headache frequency.',
    },
  },
  'zwangerschap': {
    nl: {
      title: 'Zwangerschap',
      what: 'Tijdens de zwangerschap ondergaat het lichaam grote veranderingen. Lage rugpijn, bekkenpijn, en ischias komen vaak voor door toegenomen gewicht, hormonale veranderingen, en verschuivingen in houding.',
      how: 'Chiropractie tijdens zwangerschap is veilig en effectief. Zachte correcties helpen het bekken in balans te houden, pijn te verminderen, en de bevalling te vergemakkelijken. Speciale behandeltafels en technieken worden gebruikt voor comfort en veiligheid.',
    },
    en: {
      title: 'Pregnancy-Related Pain',
      what: 'Hormonal changes, increased body weight, and postural shifts during pregnancy commonly cause lower back pain, pelvic instability, and sciatica. These symptoms can worsen as pregnancy progresses.',
      how: 'Chiropractic during pregnancy is safe and effective. Gentle corrections balance the pelvis, reduce pain, and prepare the body for delivery. Special tables and techniques ensure comfort and safety.',
    },
  },
  'sportblessures': {
    nl: {
      title: 'Sportblessures',
      what: 'Sportblessures variëren van acute verwondingen (verstuikingen, scheuren) tot overbelasting-klachten (tennisarm, lopers-knie). Ze kunnen leiden tot pijn, bewegingsbeperking, en verminderde prestaties.',
      how: 'Chiropractie behandelt sportblessures door gewrichten te mobiliseren, ontstekingen te verminderen, en het herstel van weefsels te versnellen. Combinatie met revalidatie-oefeningen en adviezen voorkomt herhaling en verbetert prestaties.',
    },
    en: {
      title: 'Sports Injuries',
      what: "Sports injuries range from acute sprains and strains to chronic overuse complaints like tennis elbow or runner's knee. Small functional imbalances that aren't noticeable in daily life can cause repeated injuries.",
      how: 'Chiropractic mobilises joints, reduces inflammation, and accelerates tissue recovery. A preventative approach can dramatically reduce injury rates and improve athletic performance.',
    },
  },
  'kinderen': {
    nl: {
      title: "Kinderen & Baby's",
      what: "Kinderen en baby's kunnen baat hebben bij chiropractie voor klachten zoals koliek, slaapproblemen, asymmetrische hoofdvorm, groei-pijnen, houdingsproblemen, en sportblessures.",
      how: 'Pediatrische chiropractie gebruikt zeer zachte, lage-kracht technieken die speciaal zijn aangepast voor jonge patiënten. Behandeling is veilig, effectief, en kan de ontwikkeling en gezondheid van kinderen aanzienlijk verbeteren.',
    },
    en: {
      title: 'Children & Infants',
      what: 'Children can develop musculoskeletal problems from falls, sports, or long hours sitting. Infants may experience complaints including colic, sleep problems, and asymmetrical posture. Recovery is typically faster than in adults.',
      how: 'Paediatric chiropractic uses very gentle, low-force techniques adapted for young patients. Treatment is safe and effective for all ages. Chiropractors have been treating children for over 100 years.',
    },
  },
  'artrose-slijtage': {
    nl: {
      title: 'Artrose / Slijtage',
      what: "Artrose is slijtage van gewrichtskraakbeen, vaak voorkomend in nek, rug, heupen en knieën. Symptomen zijn stijfheid, pijn, en verminderde mobiliteit, vooral 's ochtends of na inactiviteit.",
      how: 'Hoewel kraakbeen niet kan worden hersteld, helpt chiropractie de mobiliteit te behouden, pijn te verminderen, en verdere slijtage te vertragen door correcte gewrichtsuitlijning en beweging te bevorderen.',
    },
    en: {
      title: 'Arthrosis / Wear and Tear',
      what: 'Arthrosis is gradual wear of joint cartilage, most common in the neck, back, hips, and knees. Symptoms include stiffness, pain, and reduced mobility — especially in the morning or after periods of rest.',
      how: 'While cartilage cannot be restored, chiropractic maintains mobility, reduces pain, and slows further deterioration through correct joint alignment and movement.',
    },
  },
  'ischias': {
    nl: {
      title: 'Ischias',
      what: 'Ischias is pijn die uitstraalt van de onderrug via de bil naar het been, veroorzaakt door irritatie of druk op de ischiaszenuw. Oorzaken kunnen zijn: hernia, bekken-dysfunctie, of spierverkorting.',
      how: 'Chiropractie behandelt ischias door de oorzaak aan te pakken: wervelkolom-correcties om zenuwdruk te verminderen, bekken-stabilisatie, en mobilisatie van gewrichten. Veel patiënten ervaren snelle verlichting.',
    },
    en: {
      title: 'Sciatica',
      what: 'Sciatica is pain radiating from the lower back through the buttock and down into the leg, caused by irritation or compression of the sciatic nerve — often from a herniated disc or pelvic dysfunction.',
      how: 'Chiropractic addresses the root cause: spinal adjustments reduce nerve pressure, the pelvis is stabilised, and joints are mobilised. Many patients experience rapid relief.',
    },
  },
};

// ─── Booking widget ───────────────────────────────────────────────────────────
type BookingStep = 'calendar' | 'time' | 'details' | 'confirmed';

function BookingWidget() {
  const { language } = useLanguage();
  const today = new Date();
  const [step, setStep] = useState<BookingStep>('calendar');
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [form, setForm] = useState({ name: '', email: '', phone: '' });

  const MONTH_NAMES = language === 'nl' ? MONTH_NAMES_NL : MONTH_NAMES_EN;
  const DAY_NAMES = language === 'nl' ? DAY_NAMES_NL : DAY_NAMES_EN;

  const daysInMonth = getDaysInMonth(viewYear, viewMonth);
  const firstDay = getFirstDayOfMonth(viewYear, viewMonth);

  const wt = {
    en: {
      steps: ['Select Date', 'Select Time', 'Your Details'],
      closedSunday: 'Clinic is closed on Sundays',
      selectDate: 'Select a date',
      selectTime: 'Select a time',
      availableSlots: 'Available time slots',
      continueDate: (d: string) => `Continue — ${d}`,
      continueTime: (s: string) => `Continue — ${s}`,
      contactDetails: 'Your contact details',
      nameLabel: 'Full Name *',
      emailLabel: 'Email Address *',
      phoneLabel: 'Phone Number *',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'you@example.com',
      phonePlaceholder: '06 ...',
      confirm: 'Confirm Appointment',
      confirmedTitle: 'Appointment Requested!',
      confirmedMsg: (name: string, phone: string) => `We will contact ${name} at ${phone} within a few hours to confirm.`,
      bookAnother: 'Book another appointment',
    },
    nl: {
      steps: ['Selecteer datum', 'Selecteer tijd', 'Uw gegevens'],
      closedSunday: 'De kliniek is op zondag gesloten.',
      selectDate: 'Selecteer een datum',
      selectTime: 'Selecteer een tijd',
      availableSlots: 'Beschikbare tijdsloten',
      continueDate: (d: string) => `Doorgaan — ${d}`,
      continueTime: (s: string) => `Doorgaan — ${s}`,
      contactDetails: 'Uw contactgegevens',
      nameLabel: 'Volledige naam *',
      emailLabel: 'E-mailadres *',
      phoneLabel: 'Telefoonnummer *',
      namePlaceholder: 'Uw naam',
      emailPlaceholder: 'u@voorbeeld.com',
      phonePlaceholder: '06 ...',
      confirm: 'Bevestig afspraak',
      confirmedTitle: 'Afspraak aangevraagd!',
      confirmedMsg: (name: string, phone: string) => `Wij nemen contact op met ${name} op ${phone} binnen enkele uren ter bevestiging.`,
      bookAnother: 'Maak een andere afspraak',
    },
  };
  const w = wt[language];

  function prevMonth() {
    if (viewMonth === 0) { setViewYear(y => y - 1); setViewMonth(11); }
    else setViewMonth(m => m - 1);
    setSelectedDay(null);
  }
  function nextMonth() {
    if (viewMonth === 11) { setViewYear(y => y + 1); setViewMonth(0); }
    else setViewMonth(m => m + 1);
    setSelectedDay(null);
  }

  function isPast(day: number) {
    const d = new Date(viewYear, viewMonth, day);
    d.setHours(23, 59, 59);
    return d < today;
  }
  function isDisabled(day: number) {
    return isPast(day) || isSunday(viewYear, viewMonth, day);
  }

  const selectedDate = selectedDay
    ? new Date(viewYear, viewMonth, selectedDay).toLocaleDateString(language === 'nl' ? 'nl-NL' : 'en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })
    : '';

  const timeSlots = selectedDay && isSaturday(viewYear, viewMonth, selectedDay)
    ? TIME_SLOTS_SATURDAY
    : TIME_SLOTS_WEEKDAY;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStep('confirmed');
  }

  if (step === 'confirmed') {
    return (
      <div className="bg-white rounded-2xl p-8 shadow-sm flex flex-col items-center text-center gap-5">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-3xl">✓</div>
        <div>
          <h3 className="text-xl font-extrabold text-[#191919] mb-1">{w.confirmedTitle}</h3>
          <p className="text-[#403F3F] text-sm leading-relaxed">
            <span className="font-semibold text-[#45321A]">{selectedDate}</span> {language === 'nl' ? 'om' : 'at'} <span className="font-semibold text-[#45321A]">{selectedTime}</span>
          </p>
          <p className="text-[#403F3F] text-sm mt-3">{w.confirmedMsg(form.name, form.phone)}</p>
        </div>
        <button
          onClick={() => { setStep('calendar'); setSelectedDay(null); setSelectedTime(null); setForm({ name: '', email: '', phone: '' }); }}
          className="text-[#45321A] text-sm font-semibold underline underline-offset-2"
        >
          {w.bookAnother}
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
      {/* Progress bar */}
      <div className="flex border-b border-[#45321A]/10">
        {(['calendar', 'time', 'details'] as BookingStep[]).map((s, i) => {
          const stepIdx = ['calendar', 'time', 'details'].indexOf(step);
          const done = i < stepIdx;
          const active = i === stepIdx;
          return (
            <div key={s} className={`flex-1 py-3 text-center text-xs font-semibold transition-colors ${active ? 'bg-[#45321A] text-white' : done ? 'bg-[#45321A]/10 text-[#45321A]' : 'text-[#403F3F]/50'}`}>
              <span className="inline-flex items-center gap-1.5">
                <span className={`w-4 h-4 rounded-full text-[10px] flex items-center justify-center font-bold ${active ? 'bg-white text-[#45321A]' : done ? 'bg-[#45321A] text-white' : 'bg-[#403F3F]/20 text-[#403F3F]'}`}>
                  {done ? '✓' : i + 1}
                </span>
                {w.steps[i]}
              </span>
            </div>
          );
        })}
      </div>

      <div className="p-6">
        {/* STEP 1: Calendar */}
        {step === 'calendar' && (
          <div>
            <div className="flex items-center justify-between mb-5">
              <button onClick={prevMonth} className="w-8 h-8 rounded-full border border-[#45321A]/20 flex items-center justify-center text-[#45321A] hover:bg-[#45321A]/5 transition-colors">
                <svg viewBox="0 0 20 20" className="w-4 h-4 fill-current"><path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"/></svg>
              </button>
              <span className="font-bold text-[#191919]">{MONTH_NAMES[viewMonth]} {viewYear}</span>
              <button onClick={nextMonth} className="w-8 h-8 rounded-full border border-[#45321A]/20 flex items-center justify-center text-[#45321A] hover:bg-[#45321A]/5 transition-colors">
                <svg viewBox="0 0 20 20" className="w-4 h-4 fill-current"><path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"/></svg>
              </button>
            </div>
            <div className="grid grid-cols-7 mb-2">
              {DAY_NAMES.map((d, i) => (
                <div key={i} className={`text-center text-xs font-semibold py-1 ${i === 0 ? 'text-[#403F3F]/30' : 'text-[#403F3F]'}`}>{d}</div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-1">
              {Array.from({ length: firstDay }).map((_, i) => <div key={`e${i}`} />)}
              {Array.from({ length: daysInMonth }).map((_, i) => {
                const day = i + 1;
                const disabled = isDisabled(day);
                const selected = selectedDay === day;
                return (
                  <button
                    key={day}
                    disabled={disabled}
                    onClick={() => setSelectedDay(day)}
                    className={`aspect-square rounded-lg text-sm font-medium transition-colors
                      ${disabled ? 'text-[#403F3F]/25 cursor-not-allowed' : ''}
                      ${selected ? 'bg-[#45321A] text-white font-bold' : ''}
                      ${!disabled && !selected ? 'hover:bg-[#45321A]/10 text-[#191919]' : ''}
                    `}
                  >
                    {day}
                  </button>
                );
              })}
            </div>
            <p className="text-xs text-[#403F3F]/60 mt-4 text-center">{w.closedSunday}</p>
            <button
              disabled={!selectedDay}
              onClick={() => setStep('time')}
              className="mt-5 w-full bg-[#45321A] text-white font-bold py-3 rounded-full disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#5a4228] transition-colors"
            >
              {selectedDay ? w.continueDate(`${MONTH_NAMES[viewMonth]} ${selectedDay}`) : w.selectDate}
            </button>
          </div>
        )}

        {/* STEP 2: Time slots */}
        {step === 'time' && (
          <div>
            <button onClick={() => setStep('calendar')} className="flex items-center gap-1.5 text-sm text-[#45321A] font-semibold mb-5 hover:opacity-75 transition-opacity">
              <svg viewBox="0 0 20 20" className="w-4 h-4 fill-current"><path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"/></svg>
              {selectedDate}
            </button>
            <p className="text-sm font-semibold text-[#191919] mb-4">{w.availableSlots}</p>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
              {timeSlots.map(slot => (
                <button
                  key={slot}
                  onClick={() => setSelectedTime(slot)}
                  className={`py-2.5 rounded-lg text-sm font-semibold border transition-colors
                    ${selectedTime === slot
                      ? 'bg-[#45321A] text-white border-[#45321A]'
                      : 'border-[#45321A]/20 text-[#403F3F] hover:border-[#45321A] hover:text-[#45321A]'
                    }`}
                >
                  {slot}
                </button>
              ))}
            </div>
            <button
              disabled={!selectedTime}
              onClick={() => setStep('details')}
              className="mt-6 w-full bg-[#45321A] text-white font-bold py-3 rounded-full disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#5a4228] transition-colors"
            >
              {selectedTime ? w.continueTime(selectedTime) : w.selectTime}
            </button>
          </div>
        )}

        {/* STEP 3: Contact details */}
        {step === 'details' && (
          <form onSubmit={handleSubmit}>
            <button type="button" onClick={() => setStep('time')} className="flex items-center gap-1.5 text-sm text-[#45321A] font-semibold mb-5 hover:opacity-75 transition-opacity">
              <svg viewBox="0 0 20 20" className="w-4 h-4 fill-current"><path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"/></svg>
              {selectedDate} · {selectedTime}
            </button>
            <p className="text-sm font-semibold text-[#191919] mb-4">{w.contactDetails}</p>
            <div className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-[#403F3F] uppercase tracking-wide block mb-1.5">{w.nameLabel}</label>
                <input required type="text" placeholder={w.namePlaceholder} value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-[#F6F6F6] border border-[#45321A]/15 rounded-lg px-4 py-3 text-sm text-[#191919] placeholder-[#403F3F]/50 focus:outline-none focus:border-[#45321A] transition-colors" />
              </div>
              <div>
                <label className="text-xs font-semibold text-[#403F3F] uppercase tracking-wide block mb-1.5">{w.emailLabel}</label>
                <input required type="email" placeholder={w.emailPlaceholder} value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-[#F6F6F6] border border-[#45321A]/15 rounded-lg px-4 py-3 text-sm text-[#191919] placeholder-[#403F3F]/50 focus:outline-none focus:border-[#45321A] transition-colors" />
              </div>
              <div>
                <label className="text-xs font-semibold text-[#403F3F] uppercase tracking-wide block mb-1.5">{w.phoneLabel}</label>
                <input required type="tel" placeholder={w.phonePlaceholder} value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                  className="w-full bg-[#F6F6F6] border border-[#45321A]/15 rounded-lg px-4 py-3 text-sm text-[#191919] placeholder-[#403F3F]/50 focus:outline-none focus:border-[#45321A] transition-colors" />
              </div>
            </div>
            <button type="submit" className="mt-6 w-full bg-[#45321A] text-white font-bold py-3 rounded-full hover:bg-[#5a4228] transition-colors">
              {w.confirm}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────
export default function ChiroPage() {
  const { language } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showVoiceBot, setShowVoiceBot] = useState(false);
  const [selectedCondition, setSelectedCondition] = useState<string | null>(null);

  const t = {
    en: {
      // Hero
      badge: 'Amsterdam South · Since 2010',
      h1: ['Stop Pain.', 'Restore ', 'Mobility.', 'Reclaim Life.'],
      heroSub: "Amsterdam's chiropractic specialist and pain management clinic. If you have back pain, neck pain or headaches — call or text us today and stop pain immediately.",
      bookBtn: 'Book an Appointment',
      callBtn: 'Call 020-673 1800',
      aiBtn: 'Talk to Our AI',
      stats: [['15+', 'Years in Amsterdam'], ['5', 'Treatments Offered'], ['100%', 'Personalized Care']],
      // Services
      servicesLabel: 'What We Offer',
      servicesH2: 'Comprehensive Pain Management & Care',
      services: [
        { title: 'Neuro-Based Spinal Adjustment', desc: 'Precision chiropractic corrections that decrease pain, restore mobility, and kick-start your recovery from the very first session.' },
        { title: 'Medical Acupuncture', desc: 'Targeted needle therapy to reduce inflammation, relieve deep muscle pain, and prepare your body for optimal chiropractic results.' },
        { title: 'Therapeutic Massage', desc: 'Deep-tissue or relaxation massage to release tension, improve circulation, and help your body unwind after a long working day.' },
        { title: 'Custom Foot Orthotics', desc: 'Foot Levelers orthotics crafted specifically for your feet — delivering superior comfort, support, and full-body alignment correction.' },
      ],
      comboTitle: 'Physio-Chiro Combined Therapy',
      comboDesc: 'An integrated approach combining physiotherapy and chiropractic techniques for complex or persistent conditions.',
      // Conditions
      conditionsLabel: 'Conditions Treated',
      conditionsH2: 'We Specialise in Treating',
      conditionsDesc: 'From sudden injuries to long-standing chronic pain, Dr. Jahani has the expertise and experience to help you recover fully.',
      conditionsClick: '↓ Click a condition for more information',
      // Approach
      approachLabel: 'Our Method',
      approachH2: 'The Three-Phase Care Model',
      approachDesc: "We don't just treat the symptom. Our structured approach ensures you get better — and stay better.",
      phases: [
        { step: '01', title: 'Relief Care', desc: 'We focus on reducing your pain as quickly as possible so you can function and sleep normally again.' },
        { step: '02', title: 'Corrective Care', desc: 'Once pain is under control, we correct underlying structural issues to prevent recurring problems.' },
        { step: '03', title: 'Wellness Care', desc: 'Ongoing maintenance to keep your spine healthy, your body resilient, and your quality of life high.' },
      ],
      phaseLabel: 'Phase',
      // First Visit
      firstVisitLabel: 'New Patient Info',
      firstVisitH2: 'Your First Visit',
      firstVisitDesc: "We understand visiting a chiropractor for the first time can raise questions. Here's exactly what happens during your first appointment.",
      firstVisitSteps: [
        { step: '1', title: 'Patient Forms', desc: 'Complete health history and condition intake forms upon arrival.' },
        { step: '2', title: 'Consultation', desc: 'Discuss health problems, concerns, and treatment goals with Dr. Jahani. The first visit is about understanding your condition and what you want to achieve.' },
        { step: '3', title: 'Examination', desc: 'Full chiropractic exam including reflex and flexibility testing, plus neurological, orthopedic, postural, and physical assessments. Nothing is done without your consent.' },
        { step: '4', title: 'X-Ray Studies', desc: 'If needed based on your condition, X-rays are taken to develop the most effective treatment plan and check for serious spinal conditions.' },
        { step: '5', title: 'Report of Findings', desc: 'Dr. Jahani provides a full report covering: How can he help you? How often will you need to come in? What will the cost be?' },
        { step: '6', title: 'Treatment', desc: 'At the end of the first visit, you can choose to start your first treatment: spinal adjustment, physical therapy, and/or soft tissue massage.' },
        { step: '7', title: 'Wellness Program', desc: 'Before leaving, Dr. Jahani will suggest a home wellness program which may include: ice/heat instructions, activities to avoid, and home exercises or stretches.' },
      ],
      // Pricing
      pricingLabel: 'Rates / Reimbursements',
      pricingH2: 'Transparent Pricing',
      pricingDesc: 'Clear, upfront pricing for all services. Payment is due after each visit (cash or card). We provide receipts for insurance reimbursement.',
      pricingHeaders: ['Treatment', 'Price'],
      pricingRows: [
        ['First Consultation Adult (incl. medical acupuncture + first spinal correction)', '€ 160'],
        ['First Consultation Children up to 12 years old', '€ 110'],
        ['Follow-up Chiropractic Consultation', '€ 80'],
        ['Extensive Consultation Chiropractic + Medical Acupuncture', '€ 130'],
        ['Deep Tissue Therapy / Massage 30 min', '€ 70'],
        ['Deep Tissue Therapy / Massage 60 min', '€ 120'],
        ['Orthopedic Insoles (Custom Orthotics)', '€ 480'],
        ['Orthopedic Back Vitalizer', '€ 120'],
        ['Orthopedic Water Core Pillow', '€ 150'],
        ['Orthopedic Air Cushion (Neck/Back)', '€ 150'],
        ['High-tech Foot Scan incl. advice', '€ 120'],
        ['Treatment Plan Cancellation Costs', '€ 150'],
      ],
      paymentNote: 'Payment: The amount due will be settled after each visit. Payment can be made by cash or debit card. You can submit the receipt to your insurance company.',
      insuranceH3: 'Reimbursements / Insurance Coverage',
      insuranceP1: 'Nearly all health insurers include chiropractic care in their supplementary packages. The requirement is that the chiropractor is a member of a professional association (NCA) and registered with the Dutch Chiropractic Foundation (SCN). Most insurers classify chiropractic care as "alternative medicine" or "movement therapy."',
      insuranceP2: 'Health4Life is fully registered with NCA and SCN, meeting all insurer requirements.',
      insuranceLinkPre: 'For a complete list of insurers:',
      insuranceLink: 'www.chiropractievergoeding.nl',
      // CTA
      ctaH2: 'Ready to Stop Living with Pain?',
      ctaP: 'Call or text us today. We will assess your condition, explain your treatment options clearly, and get you started on the path to recovery — without the jargon.',
      ctaBook: 'Book Online',
      ctaCall: 'Call 020-673 1800',
      // About
      aboutLabel: 'Meet Your Chiropractor',
      aboutH2: 'Dr. M. Jahani',
      aboutSubtitle: 'DC, B.Sc. Biochemistry · Canadian Chiropractor',
      aboutP1: 'Dr. Jahani earned his Bachelor of Science in Biochemistry from York University, Toronto (1999), followed by his Doctor of Chiropractic degree from the New York Chiropractic College (2003). He founded Health4Life Chiropractic in Amsterdam South in 2010.',
      aboutP2: 'With over two decades of clinical experience, Dr. Jahani specializes in neuro-based spinal correction combined with medical acupuncture and soft-tissue therapy — an integrated approach that consistently delivers results where other treatments have failed.',
      aboutStats: [['2003', 'Doctor of Chiropractic'], ['2010', 'Founded in Amsterdam'], ['15+', 'Years of Local Experience'], ['5', 'Treatment Modalities']],
      // Testimonials
      testimonialsLabel: 'Patient Reviews',
      testimonialsH2: 'What Our Patients Say',
      testimonials: [
        { name: 'Marieke van den Berg', text: 'I had lower back pain for almost two years. After just four sessions with Dr. Jahani I felt like a different person. He really takes the time to explain what is happening and why.', rating: 5 },
        { name: 'David Okonkwo', text: 'The combination of chiropractic adjustment and acupuncture made an enormous difference for my neck pain. I had been to two other clinics with no results. Highly recommended.', rating: 5 },
        { name: 'Lisa Fontaine', text: 'I came in for pregnancy-related back pain and was treated with great care throughout. The team is professional, warm, and genuinely invested in your recovery.', rating: 5 },
      ],
      // FAQ
      faqLabel: 'FAQ',
      faqH2: 'Frequently Asked Questions',
      faqs: [
        { q: 'Does chiropractic treatment hurt?', a: 'Most patients experience little to no discomfort during an adjustment. You may hear a popping sound — this is simply gas releasing from the joint, similar to cracking your knuckles. Some mild soreness after the first few sessions is normal and typically passes within 24 hours.' },
        { q: 'How many sessions will I need?', a: 'This depends on your condition. After the first visit, Dr. Jahani will give you a clear treatment plan with an estimated number of sessions. Most acute conditions improve significantly within 4–8 sessions.' },
        { q: 'Do I need a referral from my GP?', a: 'No. You can book directly without a GP referral.' },
        { q: 'What is the difference between neuro-based chiropractic and regular chiropractic?', a: 'Neuro-based chiropractic focuses on the relationship between spinal alignment and the nervous system. Rather than just treating symptoms, it targets the root neurological cause of pain and dysfunction for more lasting results.' },
        { q: 'Do you treat children and infants?', a: 'Yes. Dr. Jahani has experience treating infants and children. The first consultation for children under 12 is €110. Techniques used for younger patients are gentle and specifically adapted.' },
        { q: 'Is chiropractic covered by Dutch health insurance?', a: 'Almost all Dutch supplemental health insurance plans (aanvullende verzekering) cover chiropractic. Health4Life is registered with the NCA and SCN, which are required by most insurers. Check your policy or visit chiropractievergoeding.nl.' },
      ],
      // Booking
      bookingLabel: 'Book Online',
      bookingH2: 'Schedule Your Appointment',
      bookingDesc: 'Pick a date and time that works for you. We will confirm your booking within a few hours by phone or email.',
      bookingInfo: [
        { label: 'Address', value: 'Maasstraat 103, 1078 HH Amsterdam' },
        { label: 'Phone', value: '020-673 1800' },
        { label: 'WhatsApp', value: '06-1882-0000' },
        { label: 'Email', value: 'Dr_mJahani@yahoo.ca' },
        { label: 'Hours', value: 'Mon – Fri 10:00 – 17:00 · Sat 10:00 – 14:00' },
      ],
      // Voice bot
      aiFloat: 'Talk to Our AI',
      // Modal
      modalWhat: 'What is it?',
      modalHow: 'How does chiropractic help?',
      modalCta: (title: string) => `Do you suffer from ${title.toLowerCase()}?`,
      modalBook: 'Book an appointment',
      modalCall: 'Call 020-673 1800',
      // Footer
      footerTagline: 'Chiropractic Specialist and Pain Management Clinic in Amsterdam South. Serving patients since 2010.',
      footerQuickLinks: 'Quick Links',
      footerQuickLinksItems: [['services', 'Services'], ['approach', 'Our Approach'], ['pricing', 'Pricing'], ['about', 'About Dr. Jahani'], ['testimonials', 'Reviews'], ['faq', 'FAQ'], ['booking', 'Book Appointment']],
      footerNewPatient: 'New Patient Center',
      footerNewPatientItems: [
        ['/patient-forms', 'Patient Forms'],
        ['/office-tour', 'Virtual Office Tour'],
        ['/techniques', 'Techniques'],
        ['/health-resources', 'Health Resources'],
        ['/wellness-partners', 'Wellness Partners'],
        ['/videos', 'Videos'],
        ['/vacatures', 'Vacancies'],
      ],
      footerContact: 'Contact',
      footerHours: ['Mon – Fri: 10:00 – 17:00', 'Sat: 10:00 – 14:00'],
      footerCopy: '© 2026 Health4Life Chiropractic Amsterdam. All rights reserved.',
      footerLegal: 'Privacy Policy · Terms of Service',
    },
    nl: {
      // Hero
      badge: 'Amsterdam Zuid · Sinds 2010',
      h1: ['Stop de pijn.', 'Herstel ', 'Mobiliteit.', 'Pak je leven terug.'],
      heroSub: 'Dé chiropractie- en pijnkliniek van Amsterdam. Heeft u last van rugpijn, nekpijn of hoofdpijn? Bel of app ons vandaag nog en verlicht uw pijn direct.',
      bookBtn: 'Maak een afspraak',
      callBtn: 'Bel 020-673 1800',
      aiBtn: 'Praat met onze AI',
      stats: [['15+', 'Jaren in Amsterdam'], ['5', 'Aangeboden behandelingen'], ['100%', 'Persoonlijke zorg']],
      // Services
      servicesLabel: 'Wat wij bieden',
      servicesH2: 'Uitgebreide pijnbestrijding en -zorg',
      services: [
        { title: 'Neuro-gebaseerde wervelcorrectie', desc: 'Nauwkeurige chiropractische correcties die pijn verminderen, de mobiliteit herstellen en uw herstel al vanaf de eerste sessie een boost geven.' },
        { title: 'Medische acupunctuur', desc: 'Gerichte naaldtherapie om ontstekingen te verminderen, diepe spierpijn te verlichten en uw lichaam voor te bereiden op optimale chiropractische resultaten.' },
        { title: 'Therapeutische massage', desc: 'Diepweefselmassage of ontspanningsmassage om spanning te verlichten, de bloedsomloop te verbeteren en uw lichaam te helpen ontspannen na een lange werkdag.' },
        { title: 'Voetorthesen op maat', desc: 'Foot Levelers orthopedische inlegzolen zijn speciaal ontworpen voor uw voeten en bieden superieur comfort, ondersteuning en correctie van de lichaamshouding.' },
      ],
      comboTitle: 'Fysio-Chiropractie gecombineerde therapie',
      comboDesc: 'Een geïntegreerde aanpak die fysiotherapie en chiropractie combineert voor complexe of chronische aandoeningen.',
      // Conditions
      conditionsLabel: 'Behandelde aandoeningen',
      conditionsH2: 'Wij zijn gespecialiseerd in de behandeling van',
      conditionsDesc: 'Van acute blessures tot langdurige chronische pijn, dr. Jahani beschikt over de expertise en ervaring om u te helpen volledig te herstellen.',
      conditionsClick: '↓ Klik op een aandoening voor meer informatie',
      // Approach
      approachLabel: 'Onze methode',
      approachH2: 'Het driefasen zorgmodel',
      approachDesc: 'Wij behandelen niet alleen de symptomen. Onze gestructureerde aanpak zorgt ervoor dat u beter wordt – en beter blijft.',
      phases: [
        { step: '01', title: 'Hulpverlening', desc: 'Wij richten ons erop uw pijn zo snel mogelijk te verlichten, zodat u weer normaal kunt functioneren en slapen.' },
        { step: '02', title: 'Corrigerende zorg', desc: 'Zodra de pijn onder controle is, corrigeren we onderliggende structurele problemen om terugkerende klachten te voorkomen.' },
        { step: '03', title: 'Welzijnszorg', desc: 'Doorlopend onderhoud om uw wervelkolom gezond te houden, uw lichaam veerkrachtig te maken en uw levenskwaliteit hoog te houden.' },
      ],
      phaseLabel: 'Fase',
      // First Visit
      firstVisitLabel: 'Informatie voor nieuwe patiënten',
      firstVisitH2: 'Uw eerste bezoek',
      firstVisitDesc: 'We begrijpen dat een eerste bezoek aan een chiropractor vragen kan oproepen. Hieronder leggen we precies uit wat er tijdens uw eerste afspraak gebeurt.',
      firstVisitSteps: [
        { step: '1', title: 'Patiëntenformulieren', desc: 'Vul bij aankomst de formulieren voor uw gezondheidsgeschiedenis en aandoeningen in.' },
        { step: '2', title: 'Overleg', desc: 'Bespreek uw gezondheidsproblemen, zorgen en behandeldoelen met Dr. Jahani. Tijdens het eerste consult bespreken we uw aandoening en wat u wilt bereiken.' },
        { step: '3', title: 'Inspectie', desc: 'Een volledig chiropractisch onderzoek, inclusief reflex- en flexibiliteitstesten, plus neurologische, orthopedische, houdings- en fysieke beoordelingen. Niets wordt gedaan zonder uw toestemming.' },
        { step: '4', title: 'Röntgenonderzoek', desc: 'Indien nodig worden röntgenfoto\'s gemaakt om het meest effectieve behandelplan op te stellen en te controleren op ernstige aandoeningen van de wervelkolom.' },
        { step: '5', title: 'Bevindingen', desc: 'Dr. Jahani geeft een volledig overzicht: Hoe kan hij u helpen? Hoe vaak moet u komen? Wat zijn de kosten?' },
        { step: '6', title: 'Behandeling', desc: 'Aan het einde van het eerste bezoek kunt u kiezen om uw eerste behandeling direct te starten: wervelkolomcorrectie, fysiotherapie en/of weke weefselmassage.' },
        { step: '7', title: 'Wellnessprogramma', desc: 'Voor u vertrekt suggereert Dr. Jahani een thuiswellnessprogramma dat kan bestaan uit: ijs-/warmte-instructies, activiteiten om te vermijden, en thuisoefeningen of rekoefeningen.' },
      ],
      // Pricing
      pricingLabel: 'Tarieven / Vergoedingen',
      pricingH2: 'Transparante tarieven',
      pricingDesc: 'Duidelijke, vooraf bekende tarieven voor alle diensten. Betaling na elk bezoek (contant of pin). Wij verstrekken kwitanties voor zorgverzekeraars.',
      pricingHeaders: ['Behandeling', 'Prijs'],
      pricingRows: [
        ['Eerste Consult Volwassen (incl. medische acupunctuur + eerste wervelkolom correctie)', '€ 160'],
        ['Eerste Consult Kinderen tot 12 jaar', '€ 110'],
        ['Vervolg Consult Chiropractie', '€ 80'],
        ['Uitgebreid Consult Chiropractie + Medische Acupunctuur', '€ 130'],
        ['Diep Tissue Therapie / Massage 30 min', '€ 70'],
        ['Diep Tissue Therapie / Massage 60 min', '€ 120'],
        ['Orthopedische Inlegzolen (Custom Orthotics)', '€ 480'],
        ['Orthopedische Back Vitalizer', '€ 120'],
        ['Orthopedische Waterkern Kussen', '€ 150'],
        ['Orthopedische Luchtkussen (Neck/Rug)', '€ 150'],
        ['High-tech Voet Scan incl. advies', '€ 120'],
        ['Behandelplan Opzeggingskosten', '€ 150'],
      ],
      paymentNote: 'Betaling: Het verschuldigde bedrag wordt na afloop van elk bezoek vereffend. Betaling mogelijk met contant of pinpas. De kwitantie kunt u indienen bij uw verzekeringsmaatschappij.',
      insuranceH3: 'Vergoedingen / Verzekeringsdekking',
      insuranceP1: 'Vrijwel alle ziektekostenverzekeraars hebben chiropractie in hun aanvullende pakket opgenomen. Voorwaarde is dat de chiropractor aangesloten is bij een beroepsvereniging (NCA) en ingeschreven staat bij de Stichting Chiropractie Nederland (SCN). Bij de meeste verzekeraars valt chiropractie onder "alternatieve geneeswijzen" of "beweegzorg".',
      insuranceP2: 'Health4Life is volledig geregistreerd bij NCA en SCN en voldoet aan alle vereisten van zorgverzekeraars.',
      insuranceLinkPre: 'Voor een volledige lijst van verzekeraars:',
      insuranceLink: 'www.chiropractievergoeding.nl',
      // CTA
      ctaH2: 'Klaar om te stoppen met pijn?',
      ctaP: 'Bel of stuur ons vandaag nog. Wij beoordelen uw klacht, leggen uw behandelopties duidelijk uit en zetten u op de weg naar herstel — zonder vakjargon.',
      ctaBook: 'Online boeken',
      ctaCall: 'Bel 020-673 1800',
      // About
      aboutLabel: 'Uw chiropractor',
      aboutH2: 'Dr. M. Jahani',
      aboutSubtitle: 'D.C., B.Sc. Biochemie · Canadese chiropractor',
      aboutP1: 'Dr. Jahani behaalde zijn Bachelor of Science in Biochemie aan de York University in Toronto (1999), gevolgd door zijn Doctor of Chiropractic diploma aan het New York Chiropractic College (2003). Hij richtte Health4Life Chiropractic op in Amsterdam Zuid in 2010.',
      aboutP2: 'Met meer dan twee decennia klinische ervaring is Dr. Jahani gespecialiseerd in neuro-gebaseerde wervelkolomcorrectie, gecombineerd met medische acupunctuur en weke weefselpie — een geïntegreerde aanpak die consequent resultaat boekt waar andere behandelingen hebben gefaald.',
      aboutStats: [['2003', 'Doctor of Chiropractic'], ['2010', 'Opgericht in Amsterdam'], ['15+', 'Jaar lokale ervaring'], ['5', 'Behandelmodaliteiten']],
      // Testimonials
      testimonialsLabel: 'Patiëntbeoordelingen',
      testimonialsH2: 'Wat onze patiënten zeggen',
      testimonials: [
        { name: 'Marieke van den Berg', text: 'Ik had bijna twee jaar lang last van lage rugpijn. Na slechts vier sessies bij Dr. Jahani voelde ik me als herboren. Hij neemt echt de tijd om uit te leggen wat er aan de hand is en waarom.', rating: 5 },
        { name: 'David Okonkwo', text: 'De combinatie van chiropractische behandeling en acupunctuur heeft een enorm verschil gemaakt voor mijn nekpijn. Ik was al bij twee andere klinieken geweest zonder resultaat. Een echte aanrader.', rating: 5 },
        { name: 'Lisa Fontaine', text: 'Ik kwam hier vanwege rugpijn gerelateerd aan mijn zwangerschap en werd gedurende mijn hele behandeling met grote zorg behandeld. Het team is professioneel, vriendelijk en oprecht betrokken bij je herstel.', rating: 5 },
      ],
      // FAQ
      faqLabel: 'Veelgestelde vragen',
      faqH2: 'Veelgestelde vragen',
      faqs: [
        { q: 'Doet een chiropractische behandeling pijn?', a: 'De meeste patiënten ervaren weinig tot geen ongemak tijdens een correctie. U hoort mogelijk een knappend geluid — dit is gewoon gas dat uit het gewricht vrijkomt, vergelijkbaar met het kraken van uw knokkels. Enige milde spierpijn na de eerste sessies is normaal en verdwijnt doorgaans binnen 24 uur.' },
        { q: 'Hoeveel sessies heb ik nodig?', a: 'Dit is afhankelijk van uw klacht. Na het eerste bezoek geeft Dr. Jahani u een duidelijk behandelplan met een geschat aantal sessies. De meeste acute klachten verbeteren aanzienlijk binnen 4–8 sessies.' },
        { q: 'Heb ik een verwijzing van mijn huisarts nodig?', a: 'Nee. U kunt direct boeken zonder verwijzing van een huisarts.' },
        { q: 'Wat is het verschil tussen neurologische chiropractie en reguliere chiropractie?', a: 'Neurologische chiropractie richt zich op de relatie tussen wervelkolomuitlijning en het zenuwstelsel. In plaats van alleen symptomen te behandelen, pakt het de onderliggende neurologische oorzaak van pijn en disfunctie aan voor meer blijvende resultaten.' },
        { q: "Behandelt u kinderen en baby's?", a: "Ja. Dr. Jahani heeft ervaring met het behandelen van baby's en kinderen. Het eerste consult voor kinderen onder de 12 jaar bedraagt €110. De technieken die voor jongere patiënten worden gebruikt zijn zacht en specifiek aangepast." },
        { q: 'Wordt chiropractie vergoed door de Nederlandse zorgverzekering?', a: 'Vrijwel alle Nederlandse aanvullende zorgverzekeringen dekken chiropractie. Health4Life is geregistreerd bij de NCA en SCN, wat vereist is door de meeste verzekeraars. Raadpleeg uw polis of bezoek chiropractievergoeding.nl.' },
      ],
      // Booking
      bookingLabel: 'Boek online',
      bookingH2: 'Plan uw afspraak',
      bookingDesc: 'Kies een datum en tijd die u schikt. We bevestigen uw reservering binnen enkele uren telefonisch of per e-mail.',
      bookingInfo: [
        { label: 'Adres', value: 'Maasstraat 103, 1078 HH Amsterdam' },
        { label: 'Telefoon', value: '020-673 1800' },
        { label: 'WhatsApp', value: '06-1882-0000' },
        { label: 'E-mail', value: 'Dr_mJahani@yahoo.ca' },
        { label: 'Uren', value: 'Ma – Vr 10:00 – 17:00 · Za 10:00 – 14:00' },
      ],
      // Voice bot
      aiFloat: 'Praat met onze AI',
      // Modal
      modalWhat: 'Wat is het?',
      modalHow: 'Hoe helpt chiropractie?',
      modalCta: (title: string) => `Heeft u last van ${title.toLowerCase()}?`,
      modalBook: 'Maak een afspraak',
      modalCall: 'Bel 020-673 1800',
      // Footer
      footerTagline: 'Chiropractiespecialist en pijnkliniek in Amsterdam Zuid. Wij behandelen patiënten sinds 2010.',
      footerQuickLinks: 'Snelle links',
      footerQuickLinksItems: [['services', 'Diensten'], ['approach', 'Onze aanpak'], ['pricing', 'Prijzen'], ['about', 'Over Dr. Jahani'], ['testimonials', 'Recensies'], ['faq', 'Veelgestelde vragen'], ['booking', 'Maak een afspraak']],
      footerNewPatient: 'Nieuw patiëntencentrum',
      footerNewPatientItems: [
        ['/patient-forms', 'Patiëntenformulieren'],
        ['/office-tour', 'Virtuele rondleiding'],
        ['/techniques', 'Technieken'],
        ['/health-resources', 'Gezondheidsbronnen'],
        ['/wellness-partners', 'Wellness Partners'],
        ['/videos', "Video's"],
        ['/vacatures', 'Vacatures'],
      ],
      footerContact: 'Contact',
      footerHours: ['Maandag t/m vrijdag: 10:00 – 17:00', 'Zaterdag: 10:00 – 14:00'],
      footerCopy: '© 2026 Health4Life Chiropractie Amsterdam. Alle rechten voorbehouden.',
      footerLegal: 'Privacybeleid · Gebruiksvoorwaarden',
    },
  };

  const c = t[language];
  const svgIcons = [
    <svg key="neuro" viewBox="0 0 48 48" fill="none" className="w-10 h-10"><circle cx="24" cy="24" r="22" stroke="#45321A" strokeWidth="2" /><path d="M16 24c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8" stroke="#45321A" strokeWidth="2" strokeLinecap="round" /><circle cx="24" cy="24" r="3" fill="#45321A" /></svg>,
    <svg key="acu" viewBox="0 0 48 48" fill="none" className="w-10 h-10"><path d="M14 10c2 6 4 10 4 18M20 10c1 8 2 12 2 18M26 28c0-6 1-10 2-18M32 28c0-8 2-12 4-18" stroke="#45321A" strokeWidth="2" strokeLinecap="round" /><rect x="10" y="26" width="28" height="4" rx="2" fill="#45321A" fillOpacity=".15" stroke="#45321A" strokeWidth="1.5" /></svg>,
    <svg key="massage" viewBox="0 0 48 48" fill="none" className="w-10 h-10"><path d="M12 32c4-6 8-10 12-10s8 4 12 10" stroke="#45321A" strokeWidth="2" strokeLinecap="round" /><ellipse cx="24" cy="18" rx="8" ry="6" stroke="#45321A" strokeWidth="2" /><circle cx="24" cy="18" r="2.5" fill="#45321A" /></svg>,
    <svg key="ortho" viewBox="0 0 48 48" fill="none" className="w-10 h-10"><path d="M10 32h28M14 32v-6a10 10 0 0 1 20 0v6" stroke="#45321A" strokeWidth="2" strokeLinecap="round" /><path d="M18 26c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#45321A" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2" /></svg>,
  ];

  const condDetail = selectedCondition ? conditionDetails[selectedCondition] : null;
  const condContent = condDetail ? condDetail[language] : null;

  return (
    <div className={`${plusJakarta.variable} font-[family-name:var(--font-jakarta)] text-[#191919] bg-white`}>

      {/* NAV */}
      <Navigation />

      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/chiro-hero.mov" type="video/quicktime" />
          <source src="/chiro-hero.mov" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/30" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-28 w-full">
          <div className="max-w-xl">
            <span className="inline-block bg-white/15 backdrop-blur-sm text-white text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6 border border-white/20">
              {c.badge}
            </span>
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight text-white mb-6">
              {c.h1[0]}<br />
              {c.h1[1]}<span className="text-[#c9a96e]">{c.h1[2]}</span><br />
              {c.h1[3]}
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-8">{c.heroSub}</p>
            <div className="flex flex-wrap gap-4">
              <a href="#booking" className="bg-[#45321A] text-white font-semibold px-7 py-3.5 rounded-full hover:bg-[#5a4228] transition-colors">{c.bookBtn}</a>
              <a href="tel:0206731800" className="border-2 border-white text-white font-semibold px-7 py-3.5 rounded-full hover:bg-white/10 transition-colors">{c.callBtn}</a>
              <button onClick={() => setShowVoiceBot(true)} className="flex items-center gap-2 bg-[#c9a96e] text-[#191919] font-semibold px-6 py-3.5 rounded-full hover:bg-[#d9bc88] transition-colors">
                <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {c.aiBtn}
              </button>
            </div>
            <div className="mt-12 flex gap-10">
              {c.stats.map(([num, label]) => (
                <div key={label}>
                  <div className="text-2xl font-extrabold text-[#c9a96e]">{num}</div>
                  <div className="text-xs text-white/70 font-medium mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#45321A] text-sm font-semibold uppercase tracking-widest">{c.servicesLabel}</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2 text-[#191919]">{c.servicesH2}</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {c.services.map((s, i) => (
              <div key={s.title} className="bg-[#F6F6F6] rounded-2xl p-7 hover:shadow-md transition-shadow">
                <div className="mb-5">{svgIcons[i]}</div>
                <h3 className="font-bold text-[#191919] text-lg mb-2">{s.title}</h3>
                <p className="text-[#403F3F] text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 bg-[#45321A]/5 border border-[#45321A]/15 rounded-2xl px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-[#45321A] flex-shrink-0 flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5"><path d="M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7z" fill="white" /></svg>
            </div>
            <div>
              <div className="font-bold text-[#191919]">{c.comboTitle}</div>
              <div className="text-sm text-[#403F3F] mt-0.5">{c.comboDesc}</div>
            </div>
          </div>
        </div>
      </section>

      {/* CONDITIONS */}
      <section className="py-20 bg-[#F6F6F6]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#45321A] text-sm font-semibold uppercase tracking-widest">{c.conditionsLabel}</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2 text-[#191919]">{c.conditionsH2}</h2>
            <p className="text-[#403F3F] mt-3 max-w-xl mx-auto">{c.conditionsDesc}</p>
            <p className="text-[#45321A] text-sm font-semibold mt-3">{c.conditionsClick}</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {specialties.map((s) => (
              <button
                key={s.slug}
                onClick={() => setSelectedCondition(s.slug)}
                className="bg-white border border-[#45321A]/10 rounded-xl px-5 py-4 flex items-center gap-3 hover:border-[#45321A]/40 hover:shadow-sm hover:scale-[1.02] transition-all text-left cursor-pointer"
              >
                <div className="w-2 h-2 rounded-full bg-[#45321A] flex-shrink-0" />
                <span className="text-sm font-medium text-[#403F3F]">{language === 'nl' ? s.nl : s.en}</span>
                <svg viewBox="0 0 20 20" className="w-4 h-4 flex-shrink-0 ml-auto fill-[#45321A]">
                  <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"/>
                </svg>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* THREE-PHASE APPROACH */}
      <section id="approach" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#45321A] text-sm font-semibold uppercase tracking-widest">{c.approachLabel}</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2 text-[#191919]">{c.approachH2}</h2>
            <p className="text-[#403F3F] mt-3 max-w-lg mx-auto">{c.approachDesc}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {c.phases.map((phase) => (
              <div key={phase.step} className="relative bg-[#F6F6F6] rounded-2xl p-8">
                <div className="text-6xl font-extrabold text-[#45321A]/10 absolute top-6 right-8 leading-none select-none">{phase.step}</div>
                <div className="text-xs font-bold text-[#45321A] uppercase tracking-widest mb-3">{c.phaseLabel} {phase.step}</div>
                <h3 className="text-xl font-extrabold text-[#191919] mb-3">{phase.title}</h3>
                <p className="text-[#403F3F] text-sm leading-relaxed">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* YOUR FIRST VISIT */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#45321A] text-sm font-semibold uppercase tracking-widest">{c.firstVisitLabel}</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2 text-[#191919]">{c.firstVisitH2}</h2>
            <p className="text-[#403F3F] mt-3 max-w-2xl mx-auto">{c.firstVisitDesc}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {c.firstVisitSteps.map((item) => (
              <div key={item.step} className="bg-[#F6F6F6] rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-[#45321A]/5 flex items-center justify-center">
                  <span className="text-xl font-extrabold text-[#45321A]">{item.step}</span>
                </div>
                <h3 className="font-bold text-[#191919] text-lg mb-2 pr-14">{item.title}</h3>
                <p className="text-[#403F3F] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-20 bg-[#F6F6F6]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#45321A] text-sm font-semibold uppercase tracking-widest">{c.pricingLabel}</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2 text-[#191919]">{c.pricingH2}</h2>
            <p className="text-[#403F3F] mt-3 max-w-2xl mx-auto">{c.pricingDesc}</p>
          </div>
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-8">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#45321A] text-white">
                  <tr>
                    <th className="text-left px-6 py-4 font-bold text-sm uppercase tracking-wide">{c.pricingHeaders[0]}</th>
                    <th className="text-right px-6 py-4 font-bold text-sm uppercase tracking-wide">{c.pricingHeaders[1]}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#45321A]/10">
                  {c.pricingRows.map(([treatment, price]) => (
                    <tr key={treatment} className="hover:bg-[#45321A]/5 transition-colors">
                      <td className="px-6 py-4 text-[#403F3F] text-sm">{treatment}</td>
                      <td className="px-6 py-4 text-right text-[#191919] font-bold text-sm">{price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="bg-[#45321A]/5 border border-[#45321A]/20 rounded-xl px-6 py-5 mb-8">
            <p className="text-[#403F3F] text-sm leading-relaxed">{c.paymentNote}</p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#45321A] flex-shrink-0 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="white" strokeWidth="2">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-[#191919] text-xl mb-3">{c.insuranceH3}</h3>
                <p className="text-[#403F3F] text-sm leading-relaxed mb-4">{c.insuranceP1}</p>
                <p className="text-[#403F3F] text-sm leading-relaxed mb-4">
                  <strong className="text-[#191919]">{c.insuranceP2}</strong>
                </p>
                <p className="text-sm">
                  <span className="text-[#403F3F]">{c.insuranceLinkPre} </span>
                  <a href="https://www.chiropractievergoeding.nl" target="_blank" rel="noopener noreferrer" className="text-[#45321A] font-semibold underline hover:text-[#5a4228] transition-colors">
                    {c.insuranceLink}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-[#45321A] py-20 text-center text-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">{c.ctaH2}</h2>
          <p className="text-white/75 text-lg mb-8">{c.ctaP}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#booking" className="bg-white text-[#45321A] font-bold px-8 py-4 rounded-full text-sm hover:bg-[#F6F6F6] transition-colors">{c.ctaBook}</a>
            <a href="tel:0206731800" className="border-2 border-white text-white font-bold px-8 py-4 rounded-full text-sm hover:bg-white/10 transition-colors">{c.ctaCall}</a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
          <div className="aspect-square rounded-3xl overflow-hidden bg-[#F6F6F6] shadow-lg">
            <img src="/dr-jahani.webp" alt="Dr. M. Jahani — Health4Life Chiropractic Amsterdam" className="w-full h-full object-cover object-[center_55%]" />
          </div>
          <div>
            <span className="text-[#45321A] text-sm font-semibold uppercase tracking-widest">{c.aboutLabel}</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2 mb-2 text-[#191919]">{c.aboutH2}</h2>
            <p className="text-[#45321A] font-semibold mb-5">{c.aboutSubtitle}</p>
            <p className="text-[#403F3F] leading-relaxed mb-4">{c.aboutP1}</p>
            <p className="text-[#403F3F] leading-relaxed mb-6">{c.aboutP2}</p>
            <div className="grid grid-cols-2 gap-5">
              {c.aboutStats.map(([n, l]) => (
                <div key={l} className="bg-[#F6F6F6] rounded-xl p-5">
                  <div className="text-2xl font-extrabold text-[#45321A]">{n}</div>
                  <div className="text-xs text-[#403F3F] font-medium mt-1">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-20 bg-[#F6F6F6]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#45321A] text-sm font-semibold uppercase tracking-widest">{c.testimonialsLabel}</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2 text-[#191919]">{c.testimonialsH2}</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {c.testimonials.map((testimonial) => (
              <div key={testimonial.name} className="bg-white rounded-2xl p-7 shadow-sm">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-[#45321A]" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[#403F3F] text-sm leading-relaxed mb-5 italic">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="font-semibold text-[#191919] text-sm">{testimonial.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#45321A] text-sm font-semibold uppercase tracking-widest">{c.faqLabel}</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2 text-[#191919]">{c.faqH2}</h2>
          </div>
          <div className="space-y-3">
            {c.faqs.map((faq, i) => (
              <div key={i} className="bg-[#F6F6F6] rounded-xl overflow-hidden border border-[#45321A]/10">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left font-semibold text-[#191919] hover:bg-[#45321A]/5 transition-colors"
                >
                  <span>{faq.q}</span>
                  <span className={`ml-4 flex-shrink-0 w-6 h-6 rounded-full border-2 border-[#45321A] flex items-center justify-center transition-transform duration-200 ${openFaq === i ? 'rotate-45' : ''}`}>
                    <svg viewBox="0 0 12 12" className="w-3 h-3" fill="none">
                      <path d="M6 1v10M1 6h10" stroke="#45321A" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-[#403F3F] text-sm leading-relaxed border-t border-[#45321A]/10 pt-4">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section id="booking" className="py-20 bg-[#F6F6F6]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-start">
          <div>
            <span className="text-[#45321A] text-sm font-semibold uppercase tracking-widest">{c.bookingLabel}</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2 mb-6 text-[#191919]">{c.bookingH2}</h2>
            <p className="text-[#403F3F] leading-relaxed mb-8">{c.bookingDesc}</p>
            <div className="space-y-5">
              {c.bookingInfo.map(({ label, value }) => (
                <div key={label} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#45321A]/10 flex items-center justify-center flex-shrink-0 text-[#45321A] text-xs font-bold">
                    {label[0]}
                  </div>
                  <div>
                    <div className="text-xs text-[#403F3F] font-semibold uppercase tracking-wide">{label}</div>
                    <div className="text-[#191919] font-medium mt-0.5">{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <BookingWidget />
        </div>
      </section>

      {/* FLOATING VOICE BUTTON */}
      <button
        onClick={() => setShowVoiceBot(true)}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 bg-[#45321A] text-white font-semibold pl-4 pr-5 py-3.5 rounded-full shadow-xl hover:bg-[#5a4228] transition-all hover:scale-105 active:scale-95"
      >
        <span className="relative flex-shrink-0">
          <span className="absolute inset-0 rounded-full bg-white/30 animate-ping" />
          <svg viewBox="0 0 24 24" className="relative w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <span className="text-sm">{c.aiFloat}</span>
      </button>

      {/* VOICE BOT MODAL */}
      <ChiroVoiceBot isOpen={showVoiceBot} onClose={() => setShowVoiceBot(false)} />

      {/* CONDITION DETAILS MODAL */}
      {selectedCondition && condContent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4" onClick={() => setSelectedCondition(null)}>
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-[#45321A] text-white px-8 py-6 rounded-t-2xl flex items-center justify-between">
              <h2 className="text-2xl font-extrabold">{condContent.title}</h2>
              <button onClick={() => setSelectedCondition(null)} className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors">
                <svg viewBox="0 0 20 20" className="w-5 h-5 fill-white"><path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"/></svg>
              </button>
            </div>
            <div className="px-8 py-8 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-full bg-[#45321A]/10 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="#45321A" strokeWidth="2"><path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <h3 className="font-bold text-[#191919] text-lg">{c.modalWhat}</h3>
                </div>
                <p className="text-[#403F3F] leading-relaxed text-sm">{condContent.what}</p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-full bg-[#45321A]/10 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="#45321A" strokeWidth="2"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <h3 className="font-bold text-[#191919] text-lg">{c.modalHow}</h3>
                </div>
                <p className="text-[#403F3F] leading-relaxed text-sm">{condContent.how}</p>
              </div>
              <div className="bg-[#F6F6F6] rounded-xl px-6 py-6 mt-6">
                <p className="text-[#403F3F] text-sm mb-4 text-center">{c.modalCta(condContent.title)}</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a href="#booking" onClick={() => setSelectedCondition(null)} className="bg-[#45321A] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#5a4228] transition-colors text-center text-sm">{c.modalBook}</a>
                  <a href="tel:0206731800" className="border-2 border-[#45321A] text-[#45321A] font-semibold px-6 py-3 rounded-full hover:bg-[#45321A]/5 transition-colors text-center text-sm">{c.modalCall}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="bg-[#191919] text-white py-14">
        <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-full bg-[#45321A] flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5"><path d="M12 2C9 2 7 5 7 8c0 2 1 3.5 2.5 4.5L9 20h6l-.5-7.5C16 11.5 17 10 17 8c0-3-2-6-5-6z" fill="white" /></svg>
              </div>
              <div>
                <div className="font-extrabold text-base leading-tight">Health4Life</div>
                <div className="text-[10px] text-[#45321A] font-semibold uppercase tracking-widest leading-none">Chiropractic</div>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">{c.footerTagline}</p>
          </div>
          <div>
            <div className="font-semibold text-sm mb-4 text-white/80 uppercase tracking-wide">{c.footerQuickLinks}</div>
            <ul className="space-y-2.5 text-sm text-white/60">
              {c.footerQuickLinksItems.map(([href, label]) => (
                <li key={href}><a href={`#${href}`} className="hover:text-white transition-colors">{label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-semibold text-sm mb-4 text-white/80 uppercase tracking-wide">{c.footerNewPatient}</div>
            <ul className="space-y-2.5 text-sm text-white/60">
              {c.footerNewPatientItems.map(([href, label]) => (
                <li key={href}><Link href={href} className="hover:text-white transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-semibold text-sm mb-4 text-white/80 uppercase tracking-wide">{c.footerContact}</div>
            <ul className="space-y-2.5 text-sm text-white/60">
              <li>Maasstraat 103</li>
              <li>1078 HH Amsterdam</li>
              <li>020-673 1800</li>
              <li>06-1882-0000 (WhatsApp)</li>
              <li className="pt-1">{c.footerHours[0]}</li>
              <li>{c.footerHours[1]}</li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-6 mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/40">
          <span>{c.footerCopy}</span>
          <span>{c.footerLegal}</span>
        </div>
      </footer>
    </div>
  );
}
