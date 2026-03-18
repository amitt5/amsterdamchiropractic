'use client';

import { Plus_Jakarta_Sans } from 'next/font/google';
import Link from 'next/link';
import Navigation from '@/components/navigation';
import { useState } from 'react';
import { useLanguage } from '@/contexts/language-context';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
});

const PAST_CONDITIONS_EN = [
  'Alcoholism', 'Allergies', 'Anemia', 'Arteriosclerosis', 'Arthritis',
  'Asthma', 'Back Pain', 'Breast Lump', 'Bronchitis', 'Bruise Easily',
  'Cancer', 'Chest Pain/Conditions', 'Cold Extremities', 'Constipation',
  'Cramps', 'Depression', 'Diabetes', 'Digestion Problems', 'Dizziness',
  'Ears Ring', 'Excessive Menstruation', 'Eye Pain or Difficulties',
  'Fatigue', 'Frequent Urination', 'Headache', 'Hemorrhoids',
  'High Blood Pressure', 'Hot Flashes', 'Irregular Heart Beat',
  'Irregular Cycle', 'Kidney Infection', 'Kidney Stones',
  'Loss of Memory', 'Loss of Balance', 'Loss of Smell', 'Loss of Taste',
  'Lumps in Breast', 'Neck Pain or Stiffness', 'Nervousness', 'Nosebleeds',
  'Pacemaker', 'Polio', 'Poor Posture', 'Prostate Trouble', 'Sciatica',
  'Shortness of Breath', 'Sinus Infection', 'Sleep Problems or Insomnia',
  'Spinal Curvatures', 'Stroke', 'Swelling of Ankles', 'Swollen Joints',
  'Thyroid Condition', 'Tuberculosis', 'Ulcers', 'Varicose Veins',
  'Venereal Disease',
];

const PAST_CONDITIONS_NL = [
  'Alcoholisme', 'Allergieën', 'Bloedarmoede', 'Arteriosclerose', 'Artritis',
  'Astma', 'Rugpijn', 'Borstknob bel', 'Bronchitis', 'Snel Blauwe Plekken',
  'Kanker', 'Borstpijn/Aandoeningen', 'Koude Ledematen', 'Constipatie',
  'Krampen', 'Depressie', 'Diabetes', 'Spijsverteringsproblemen', 'Duizeligheid',
  'Oorsuizen', 'Overmatige Menstruatie', 'Oogpijn of -problemen',
  'Vermoeidheid', 'Frequent Urineren', 'Hoofdpijn', 'Aambeien',
  'Hoge Bloeddruk', 'Opvliegers', 'Onregelmatige Hartslag',
  'Onregelmatige Cyclus', 'Nierinfectie', 'Nierstenen',
  'Geheugenverlies', 'Evenwichtsverlies', 'Reukverlies', 'Smaak verlies',
  'Knobbels in Borst', 'Nekpijn of Stijfheid', 'Nervositeit', 'Bloedneuzen',
  'Pacemaker', 'Polio', 'Slechte Houding', 'Prostaatproblemen', 'Ischias',
  'Kortademigheid', 'Sinusinfectie', 'Slaapproblemen of Slapeloosheid',
  'Wervelkolomcurvatures', 'Beroerte', 'Gezwollen Enkels', 'Gezwollen Gewrichten',
  'Schildklieraandoening', 'Tuberculose', 'Maagzweren', 'Spataderen',
  'Geslachtsziekte',
];

const HABITS = ['Alcohol', 'Coffee', 'Tobacco', 'Drugs', 'Exercise', 'Sleep',
  'Appetite', 'Soft Drinks', 'Water', 'Salty Foods', 'Sugary Foods',
  'Artificial Sweeteners'];

const HABITS_NL = ['Alcohol', 'Koffie', 'Tabak', 'Drugs', 'Beweging', 'Slaap',
  'Eetlust', 'Frisdrank', 'Water', 'Zout Voedsel', 'Suikerhoudend Voedsel',
  'Kunstmatige Zoetstoffen'];

const HABIT_LEVELS_EN = ['None', 'Light', 'Moderate', 'Heavy'] as const;
const HABIT_LEVELS_NL = ['Geen', 'Weinig', 'Matig', 'Veel'] as const;

type HaveYouEverKey = 'brokenBones' | 'hospitalized' | 'autoAccident' | 'sprains' | 'unconscious' | 'surgery';
type DailyKey = 'painEveryDay' | 'interferesLife' | 'wakesAtNight' | 'worseTimes' | 'weatherAffects' | 'orthotics' | 'takeVitamins';

export default function NewPatientIntakePage() {
  const { language } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  // Personal
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [marital, setMarital] = useState('');
  const [occupation, setOccupation] = useState('');
  const [employer, setEmployer] = useState('');
  const [numChildren, setNumChildren] = useState('');
  const [bsn, setBsn] = useState('');

  // Contact
  const [email, setEmail] = useState('');
  const [phoneWork, setPhoneWork] = useState('');
  const [phoneMobile, setPhoneMobile] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postcode, setPostcode] = useState('');
  const [referredBy, setReferredBy] = useState('');
  const [emergencyContact, setEmergencyContact] = useState('');
  const [emergencyPhone, setEmergencyPhone] = useState('');
  const [spouseName, setSpouseName] = useState('');
  const [spouseOccupation, setSpouseOccupation] = useState('');
  const [spouseEmployer, setSpouseEmployer] = useState('');
  const [spouseHealthStatus, setSpouseHealthStatus] = useState('');

  // Current complaints
  const [injuryType, setInjuryType] = useState<string[]>([]);
  const [injuryDesc, setInjuryDesc] = useState('');
  const [dateOfInjury, setDateOfInjury] = useState('');
  const [dateSymptoms, setDateSymptoms] = useState('');
  const [hadBefore, setHadBefore] = useState('');
  const [hadBeforeWhen, setHadBeforeWhen] = useState('');
  const [otherPractitioners, setOtherPractitioners] = useState('');
  const [prevChiro, setPrevChiro] = useState('');
  const [prevChiroDesc, setPrevChiroDesc] = useState('');

  // Medical history
  const [treatedLastYear, setTreatedLastYear] = useState('');
  const [treatedLastYearDesc, setTreatedLastYearDesc] = useState('');
  const [lastPhysical, setLastPhysical] = useState('');
  const [pregnant, setPregnant] = useState('');
  const [xrays, setXrays] = useState('');
  const [xrayLocation, setXrayLocation] = useState('');
  const [medications, setMedications] = useState('');
  const [vitamins, setVitamins] = useState('');

  // Have you ever
  const [haveYouEver, setHaveYouEver] = useState<Record<HaveYouEverKey, string>>({
    brokenBones: '', hospitalized: '', autoAccident: '',
    sprains: '', unconscious: '', surgery: '',
  });
  const [haveYouEverDesc, setHaveYouEverDesc] = useState<Record<HaveYouEverKey, string>>({
    brokenBones: '', hospitalized: '', autoAccident: '',
    sprains: '', unconscious: '', surgery: '',
  });

  // Family
  const [familyHistory, setFamilyHistory] = useState('');

  // Daily symptoms
  const [daily, setDaily] = useState<Record<DailyKey, string>>({
    painEveryDay: '', interferesLife: '', wakesAtNight: '',
    worseTimes: '', weatherAffects: '', orthotics: '', takeVitamins: '',
  });
  const [aggravating, setAggravating] = useState('');

  // Habits
  const [habits, setHabits] = useState<Record<string, string>>(
    Object.fromEntries(HABITS.map(h => [h, '']))
  );

  // Past conditions
  const [pastConditions, setPastConditions] = useState<string[]>([]);
  const [pastConditionsOther, setPastConditionsOther] = useState('');

  // Insurance
  const [insuranceResponsible, setInsuranceResponsible] = useState('');
  const [insurancePhone, setInsurancePhone] = useState('');
  const [hasInsurance, setHasInsurance] = useState('');
  const [insuranceCompany, setInsuranceCompany] = useState('');
  const [insuranceContact, setInsuranceContact] = useState('');
  const [insuranceCompanyPhone, setInsuranceCompanyPhone] = useState('');
  const [claimNumber, setClaimNumber] = useState('');

  // Consent
  const [signatureName, setSignatureName] = useState('');
  const [signatureDate, setSignatureDate] = useState('');
  const [consentChecked, setConsentChecked] = useState(false);

  function toggleCondition(c: string) {
    setPastConditions(prev =>
      prev.includes(c) ? prev.filter(x => x !== c) : [...prev, c]
    );
  }

  function toggleInjuryType(t: string) {
    setInjuryType(prev =>
      prev.includes(t) ? prev.filter(x => x !== t) : [...prev, t]
    );
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Language-specific text
  const ui = {
    en: {
      headerBadge: 'New Patients',
      headerTitle: 'New Patient Intake Form',
      headerSubtitle: 'Please complete all sections as accurately as possible. All information is strictly confidential.',
      submittedTitle: 'Form Submitted',
      submittedText: (name: string) => `Thank you, ${name}. We have received your intake form and will review it before your appointment.`,
      backHome: 'Back to Home',
      s1: '1. Personal Data',
      firstName: 'First Name *', firstNamePh: 'Your first name',
      lastName: 'Last Name *', lastNamePh: 'Your last name',
      dob: 'Date of Birth *',
      age: 'Age', agePh: 'e.g. 35',
      gender: 'Gender', genderOpts: ['Select…', 'Male', 'Female', 'Other', 'Prefer not to say'],
      marital: 'Marital Status', maritalOpts: ['Select…', 'Single', 'Married', 'Partner', 'Divorced', 'Widowed'],
      occupation: 'Occupation', occupationPh: 'Your job title',
      employer: 'Employer', employerPh: 'Company name',
      numChildren: 'Number of Children',
      bsn: 'BSN / Social Security #', bsnPh: 'Optional',
      s2: '2. Contact & Address',
      email: 'Email Address *', emailPh: 'you@example.com',
      phoneMobile: 'Phone (mobile / home) *', phoneMobilePh: '06 …',
      phoneWork: 'Phone (work)', phoneWorkPh: '020 …',
      referredBy: 'Referred By', referredByPh: 'Doctor, friend, internet…',
      streetAddress: 'Street Address', streetAddressPh: 'Street and house number',
      city: 'City', cityPh: 'Amsterdam',
      postcode: 'Postcode', postcodePh: '1234 AB',
      emergencyContact: 'Emergency Contact Name', emergencyContactPh: 'Full name',
      emergencyPhone: 'Emergency Contact Phone', emergencyPhonePh: '06 …',
      spouseLabel: 'Spouse / Partner (if applicable)',
      spouseName: 'Name', spouseNamePh: 'Full name',
      spouseOccupation: 'Occupation', spouseOccupationPh: 'Job title',
      spouseEmployer: 'Employer', spouseEmployerPh: 'Company name',
      spouseHealth: 'Health Status', spouseHealthPh: 'General health description',
      s3: '3. Current Complaints',
      injuryNature: 'Nature of Injury / Complaint',
      injuryTypes: ['Automobile', 'Work', 'Other'],
      injuryDescLabel: 'Please Describe', injuryDescPh: 'Describe your complaint in your own words…',
      dateInjury: 'Date of Injury',
      dateSymptoms: 'Date Symptoms Appeared',
      hadBefore: 'Have you ever had the same condition before?',
      hadBeforeWhen: 'If yes, when?', hadBeforeWhenPh: 'Approximate date or year',
      otherPractitioners: 'Other practitioners seen for this condition', otherPractitionersPh: 'e.g. GP, physiotherapist, specialist…',
      prevChiro: 'Have you ever been under chiropractic care?',
      prevChiroDesc: 'If yes, please describe', prevChiroDescPh: 'Where, when, for what condition…',
      s4: '4. Medical History',
      treatedLastYear: 'Have you been treated for any conditions in the last year?',
      treatedLastYearDesc: 'If yes, please describe', treatedLastYearDescPh: 'Condition, treatment, outcome…',
      lastPhysical: 'Date of Last Physical Exam',
      pregnant: 'Is there a chance you are pregnant?',
      xrays: 'Have you had X-rays taken?',
      xrayLocation: 'If yes, where?', xrayLocationPh: 'Hospital or clinic name',
      medications: 'Current Medications (include dosage & condition)', medicationsPh: 'Medication name — dosage — condition it treats…',
      vitaminsLabel: 'Vitamins, Minerals or Herbs (include dosage & frequency)', vitaminsPh: 'e.g. Vitamin D3 — 2000 IU daily…',
      s5: '5. Have You Ever…',
      haveYouEverItems: [
        ['brokenBones', 'Broken bones?'],
        ['hospitalized', 'Been hospitalised?'],
        ['autoAccident', 'Been in an auto accident?'],
        ['sprains', 'Had sprains or strains?'],
        ['unconscious', 'Been struck unconscious?'],
        ['surgery', 'Had surgery?'],
      ] as [HaveYouEverKey, string][],
      briefExplain: 'Briefly explain…',
      s6: '6. Family History',
      familyHistoryLabel: 'Family members — present and past health conditions',
      familyHistoryHint: 'e.g. heart disease, cancer, diabetes, arthritis, etc.',
      familyHistoryPh: 'Describe relevant family health history…',
      s7: '7. Daily Life & Symptoms',
      dailyItems: [
        ['painEveryDay', 'Do you experience pain every day?'],
        ['interferesLife', 'Do your symptoms interfere with daily life?'],
        ['wakesAtNight', 'Does pain wake you up at night?'],
        ['worseTimes', 'Are your symptoms worse at certain times of the day?'],
        ['weatherAffects', 'Do changes in weather affect your symptoms?'],
        ['orthotics', 'Do you wear orthotics?'],
        ['takeVitamins', 'Do you take vitamin supplements?'],
      ] as [DailyKey, string][],
      aggravating: 'What activities aggravate your symptoms?', aggravatingPh: 'e.g. sitting for long periods, lifting, bending…',
      s8: '8. Habits',
      habitCol: 'Habit',
      s9: '9. Have You Ever Suffered From…',
      checkAll: 'Check all that apply.',
      otherConditions: 'Other (please specify)', otherConditionsPh: 'Any other conditions not listed above…',
      s10: '10. Insurance Information',
      insuranceResponsible: 'Name of party responsible for payment', insuranceResponsiblePh: 'Full name',
      insurancePhone: 'Phone', insurancePhonePh: '06 …',
      hasInsurance: 'Do you have health insurance?',
      insuranceCompany: 'Insurance Company Name', insuranceCompanyPh: 'e.g. Zilveren Kruis, VGZ…',
      insuranceContact: 'Contact Person', insuranceContactPh: 'Contact person at insurer',
      insuranceCompanyPhone: 'Insurance Company Phone', insuranceCompanyPhonePh: 'Insurer phone number',
      claimNumber: 'Claim / Policy #', claimNumberPh: 'Policy or claim number',
      s11: '11. Consent & Signature',
      consentText: 'I understand and agree that health/accident insurance policies are an arrangement between an insurance carrier and myself. I understand and agree that all services rendered to me are charged as my personal responsibility for timely payment. I understand that if I suspend or terminate my care/treatment, any fees for professional services rendered to me will be immediately due and payable.',
      signatureName: 'Full Name (as signature) *', signatureNamePh: 'Type your full name',
      signatureDate: 'Date *',
      consentCheck: 'I confirm that the information provided in this form is accurate and complete to the best of my knowledge. I consent to chiropractic examination and treatment as deemed necessary by Dr. Jahani. *',
      submitBtn: 'Submit Intake Form',
      submitNote: 'All information is strictly confidential and used solely for your care at Health4Life Chiropractic.',
      yesNo: ['No', 'Yes'],
    },
    nl: {
      headerBadge: 'Nieuwe Patiënten',
      headerTitle: 'Nieuw Patiënt Intakeformulier',
      headerSubtitle: 'Vul alle secties zo nauwkeurig mogelijk in. Alle informatie is strikt vertrouwelijk.',
      submittedTitle: 'Formulier Ingediend',
      submittedText: (name: string) => `Dank u, ${name}. Wij hebben uw intakeformulier ontvangen en zullen het bekijken vóór uw afspraak.`,
      backHome: 'Terug naar Home',
      s1: '1. Persoonlijke Gegevens',
      firstName: 'Voornaam *', firstNamePh: 'Uw voornaam',
      lastName: 'Achternaam *', lastNamePh: 'Uw achternaam',
      dob: 'Geboortedatum *',
      age: 'Leeftijd', agePh: 'bijv. 35',
      gender: 'Geslacht', genderOpts: ['Selecteer…', 'Man', 'Vrouw', 'Anders', 'Zeg ik liever niet'],
      marital: 'Burgerlijke Staat', maritalOpts: ['Selecteer…', 'Alleenstaand', 'Getrouwd', 'Partner', 'Gescheiden', 'Weduwe/Weduwnaar'],
      occupation: 'Beroep', occupationPh: 'Uw functietitel',
      employer: 'Werkgever', employerPh: 'Bedrijfsnaam',
      numChildren: 'Aantal Kinderen',
      bsn: 'BSN / Burgerservicenummer', bsnPh: 'Optioneel',
      s2: '2. Contact & Adres',
      email: 'E-mailadres *', emailPh: 'u@voorbeeld.nl',
      phoneMobile: 'Telefoon (mobiel / thuis) *', phoneMobilePh: '06 …',
      phoneWork: 'Telefoon (werk)', phoneWorkPh: '020 …',
      referredBy: 'Doorverwezen Door', referredByPh: 'Huisarts, vriend, internet…',
      streetAddress: 'Straat & Huisnummer', streetAddressPh: 'Straat en huisnummer',
      city: 'Stad', cityPh: 'Amsterdam',
      postcode: 'Postcode', postcodePh: '1234 AB',
      emergencyContact: 'Noodcontact Naam', emergencyContactPh: 'Volledige naam',
      emergencyPhone: 'Noodcontact Telefoon', emergencyPhonePh: '06 …',
      spouseLabel: 'Partner / Echtgeno(o)t(e) (indien van toepassing)',
      spouseName: 'Naam', spouseNamePh: 'Volledige naam',
      spouseOccupation: 'Beroep', spouseOccupationPh: 'Functietitel',
      spouseEmployer: 'Werkgever', spouseEmployerPh: 'Bedrijfsnaam',
      spouseHealth: 'Gezondheidsstatus', spouseHealthPh: 'Algemene gezondheidsbeschrijving',
      s3: '3. Huidige Klachten',
      injuryNature: 'Aard van Letsel / Klacht',
      injuryTypes: ['Auto-ongeluk', 'Werk', 'Anders'],
      injuryDescLabel: 'Beschrijf uw klacht', injuryDescPh: 'Beschrijf uw klacht in uw eigen woorden…',
      dateInjury: 'Datum van Letsel',
      dateSymptoms: 'Datum Klachten Begonnen',
      hadBefore: 'Heeft u deze klacht eerder gehad?',
      hadBeforeWhen: 'Zo ja, wanneer?', hadBeforeWhenPh: 'Ongeveer datum of jaar',
      otherPractitioners: 'Andere zorgverleners bezocht voor deze klacht', otherPractitionersPh: 'bijv. huisarts, fysiotherapeut, specialist…',
      prevChiro: 'Bent u eerder onder chiropractische behandeling geweest?',
      prevChiroDesc: 'Zo ja, beschrijf dit', prevChiroDescPh: 'Waar, wanneer, voor welke klacht…',
      s4: '4. Medische Geschiedenis',
      treatedLastYear: 'Bent u het afgelopen jaar behandeld voor aandoeningen?',
      treatedLastYearDesc: 'Zo ja, beschrijf dit', treatedLastYearDescPh: 'Aandoening, behandeling, uitkomst…',
      lastPhysical: 'Datum Laatste Lichamelijk Onderzoek',
      pregnant: 'Is er een kans dat u zwanger bent?',
      xrays: "Heeft u röntgenfoto's laten maken?",
      xrayLocation: 'Zo ja, waar?', xrayLocationPh: 'Ziekenhuis of kliniek naam',
      medications: 'Huidige Medicatie (inclusief dosering & aandoening)', medicationsPh: 'Medicijnnaam — dosering — aandoening die het behandelt…',
      vitaminsLabel: 'Vitaminen, Mineralen of Kruiden (inclusief dosering & frequentie)', vitaminsPh: 'bijv. Vitamine D3 — 2000 IE dagelijks…',
      s5: '5. Heeft U Ooit…',
      haveYouEverItems: [
        ['brokenBones', 'Botbreuken gehad?'],
        ['hospitalized', 'In het ziekenhuis opgenomen geweest?'],
        ['autoAccident', 'Een auto-ongeluk gehad?'],
        ['sprains', 'Verstuikingen of verrekkingen gehad?'],
        ['unconscious', 'Bewusteloos geraakt?'],
        ['surgery', 'Een operatie ondergaan?'],
      ] as [HaveYouEverKey, string][],
      briefExplain: 'Kort toelichten…',
      s6: '6. Familiegeschiedenis',
      familyHistoryLabel: 'Familieleden — huidige en vroegere gezondheidsproblemen',
      familyHistoryHint: 'bijv. hartaandoeningen, kanker, diabetes, artritis, enz.',
      familyHistoryPh: 'Beschrijf relevante familiegezondheidsgechiedenis…',
      s7: '7. Dagelijks Leven & Klachten',
      dailyItems: [
        ['painEveryDay', 'Heeft u elke dag pijn?'],
        ['interferesLife', 'Interfereren uw klachten met het dagelijks leven?'],
        ['wakesAtNight', "Wordt u 's nachts wakker van de pijn?"],
        ['worseTimes', 'Zijn uw klachten erger op bepaalde tijden van de dag?'],
        ['weatherAffects', 'Beïnvloeden weersveranderingen uw klachten?'],
        ['orthotics', 'Draagt u inlegzolen?'],
        ['takeVitamins', 'Neemt u vitaminesupplementen?'],
      ] as [DailyKey, string][],
      aggravating: 'Welke activiteiten verergeren uw klachten?', aggravatingPh: 'bijv. lang zitten, tillen, bukken…',
      s8: '8. Gewoonten',
      habitCol: 'Gewoonte',
      s9: '9. Heeft U Ooit Last Gehad Van…',
      checkAll: 'Selecteer alles wat van toepassing is.',
      otherConditions: 'Anders (specificeer)', otherConditionsPh: 'Andere aandoeningen die niet hierboven staan…',
      s10: '10. Verzekeringsinformatie',
      insuranceResponsible: 'Naam verantwoordelijke voor betaling', insuranceResponsiblePh: 'Volledige naam',
      insurancePhone: 'Telefoon', insurancePhonePh: '06 …',
      hasInsurance: 'Heeft u een zorgverzekering?',
      insuranceCompany: 'Naam Zorgverzekeraar', insuranceCompanyPh: 'bijv. Zilveren Kruis, VGZ…',
      insuranceContact: 'Contactpersoon', insuranceContactPh: 'Contactpersoon bij verzekeraar',
      insuranceCompanyPhone: 'Telefoon Zorgverzekeraar', insuranceCompanyPhonePh: 'Telefoonnummer verzekeraar',
      claimNumber: 'Claim / Polisnummer', claimNumberPh: 'Polis- of claimnummer',
      s11: '11. Toestemming & Handtekening',
      consentText: 'Ik begrijp en ga ermee akkoord dat zorg-/ongevallenverzekeringen een regeling zijn tussen een verzekeringsmaatschappij en mijzelf. Ik begrijp en ga ermee akkoord dat alle aan mij verleende diensten in rekening worden gebracht als mijn persoonlijke verantwoordelijkheid voor tijdige betaling. Ik begrijp dat als ik mijn zorg/behandeling opschort of beëindig, eventuele vergoedingen voor verleende professionele diensten onmiddellijk opeisbaar zijn.',
      signatureName: 'Volledige Naam (als handtekening) *', signatureNamePh: 'Typ uw volledige naam',
      signatureDate: 'Datum *',
      consentCheck: 'Ik bevestig dat de informatie in dit formulier naar mijn beste weten juist en volledig is. Ik ga akkoord met chiropractisch onderzoek en behandeling zoals Dr. Jahani noodzakelijk acht. *',
      submitBtn: 'Intakeformulier Indienen',
      submitNote: 'Alle informatie is strikt vertrouwelijk en wordt uitsluitend gebruikt voor uw zorg bij Health4Life Chiropractic.',
      yesNo: ['Nee', 'Ja'],
    },
  };

  const u = ui[language];
  const PAST_CONDITIONS = language === 'nl' ? PAST_CONDITIONS_NL : PAST_CONDITIONS_EN;
  const HABIT_LABELS = language === 'nl' ? HABITS_NL : HABITS;
  const HABIT_LEVELS = language === 'nl' ? HABIT_LEVELS_NL : HABIT_LEVELS_EN;

  if (submitted) {
    return (
      <div className={`${plusJakarta.variable} font-[family-name:var(--font-jakarta)] text-brand-dark bg-white min-h-screen flex items-center justify-center px-6`}>
        <div className="max-w-lg w-full text-center py-20">
          <div className="w-20 h-20 rounded-full bg-brand-primary/10 flex items-center justify-center mx-auto mb-6">
            <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10" stroke="var(--color-brand-primary)" strokeWidth="2">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h1 className="text-3xl font-extrabold text-brand-dark mb-4">{u.submittedTitle}</h1>
          <p className="text-brand-muted text-lg leading-relaxed mb-8">{u.submittedText(firstName)}</p>
          <Link
            href={`/${language}`}
            className="inline-block bg-brand-primary text-white font-semibold px-8 py-3 rounded-full hover:bg-brand-primary-hover transition-colors"
          >
            {u.backHome}
          </Link>
        </div>
      </div>
    );
  }

  // ── Reusable field components ──────────────────────────────────────────────
  const inputCls = 'w-full border border-brand-muted/20 rounded-lg px-3 py-2.5 text-sm text-brand-dark bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary/30 focus:border-brand-primary transition-colors';
  const labelCls = 'block text-xs font-semibold text-brand-muted uppercase tracking-wide mb-1';
  const selectCls = `${inputCls} appearance-none`;

  const RadioGroup = ({ name, value, onChange }: { name: string; value: string; onChange: (v: string) => void }) => (
    <div className="flex gap-4">
      {u.yesNo.map(opt => (
        <label key={opt} className="flex items-center gap-1.5 cursor-pointer">
          <input type="radio" name={name} value={opt} checked={value === opt}
            onChange={() => onChange(opt)}
            className="accent-brand-primary w-4 h-4 cursor-pointer" />
          <span className="text-sm text-brand-dark">{opt}</span>
        </label>
      ))}
    </div>
  );

  const SectionHeader = ({ children }: { children: React.ReactNode }) => (
    <div className="border-b-2 border-brand-primary pb-2 mb-6">
      <h2 className="text-base font-extrabold text-brand-primary uppercase tracking-widest">{children}</h2>
    </div>
  );

  return (
    <div className={`${plusJakarta.variable} font-[family-name:var(--font-jakarta)] text-brand-dark bg-brand-light min-h-screen`}>

      <Navigation />

      {/* HEADER */}
      <div className="bg-brand-primary text-white py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-white/60 text-xs font-semibold uppercase tracking-widest">{u.headerBadge}</span>
          <h1 className="text-3xl md:text-4xl font-extrabold mt-2 mb-3">{u.headerTitle}</h1>
          <p className="text-white/75 text-sm max-w-xl mx-auto leading-relaxed">{u.headerSubtitle}</p>
        </div>
      </div>

      {/* FORM */}
      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto px-6 py-10 space-y-8">

        {/* ── 1. PERSONAL DATA ─────────────────────────────────────────────── */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
          <SectionHeader>{u.s1}</SectionHeader>
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className={labelCls}>{u.firstName}</label>
              <input required value={firstName} onChange={e => setFirstName(e.target.value)} className={inputCls} placeholder={u.firstNamePh} />
            </div>
            <div>
              <label className={labelCls}>{u.lastName}</label>
              <input required value={lastName} onChange={e => setLastName(e.target.value)} className={inputCls} placeholder={u.lastNamePh} />
            </div>
            <div>
              <label className={labelCls}>{u.dob}</label>
              <input required type="date" value={dob} onChange={e => setDob(e.target.value)} className={inputCls} />
            </div>
            <div>
              <label className={labelCls}>{u.age}</label>
              <input type="number" min="0" max="120" value={age} onChange={e => setAge(e.target.value)} className={inputCls} placeholder={u.agePh} />
            </div>
            <div>
              <label className={labelCls}>{u.gender}</label>
              <select value={gender} onChange={e => setGender(e.target.value)} className={selectCls}>
                {u.genderOpts.map(o => <option key={o} value={o === u.genderOpts[0] ? '' : o}>{o}</option>)}
              </select>
            </div>
            <div>
              <label className={labelCls}>{u.marital}</label>
              <select value={marital} onChange={e => setMarital(e.target.value)} className={selectCls}>
                {u.maritalOpts.map(o => <option key={o} value={o === u.maritalOpts[0] ? '' : o}>{o}</option>)}
              </select>
            </div>
            <div>
              <label className={labelCls}>{u.occupation}</label>
              <input value={occupation} onChange={e => setOccupation(e.target.value)} className={inputCls} placeholder={u.occupationPh} />
            </div>
            <div>
              <label className={labelCls}>{u.employer}</label>
              <input value={employer} onChange={e => setEmployer(e.target.value)} className={inputCls} placeholder={u.employerPh} />
            </div>
            <div>
              <label className={labelCls}>{u.numChildren}</label>
              <input type="number" min="0" value={numChildren} onChange={e => setNumChildren(e.target.value)} className={inputCls} placeholder="0" />
            </div>
            <div>
              <label className={labelCls}>{u.bsn}</label>
              <input value={bsn} onChange={e => setBsn(e.target.value)} className={inputCls} placeholder={u.bsnPh} />
            </div>
          </div>
        </div>

        {/* ── 2. CONTACT & ADDRESS ─────────────────────────────────────────── */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
          <SectionHeader>{u.s2}</SectionHeader>
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className={labelCls}>{u.email}</label>
              <input required type="email" value={email} onChange={e => setEmail(e.target.value)} className={inputCls} placeholder={u.emailPh} />
            </div>
            <div>
              <label className={labelCls}>{u.phoneMobile}</label>
              <input required value={phoneMobile} onChange={e => setPhoneMobile(e.target.value)} className={inputCls} placeholder={u.phoneMobilePh} />
            </div>
            <div>
              <label className={labelCls}>{u.phoneWork}</label>
              <input value={phoneWork} onChange={e => setPhoneWork(e.target.value)} className={inputCls} placeholder={u.phoneWorkPh} />
            </div>
            <div>
              <label className={labelCls}>{u.referredBy}</label>
              <input value={referredBy} onChange={e => setReferredBy(e.target.value)} className={inputCls} placeholder={u.referredByPh} />
            </div>
            <div className="sm:col-span-2">
              <label className={labelCls}>{u.streetAddress}</label>
              <input value={address} onChange={e => setAddress(e.target.value)} className={inputCls} placeholder={u.streetAddressPh} />
            </div>
            <div>
              <label className={labelCls}>{u.city}</label>
              <input value={city} onChange={e => setCity(e.target.value)} className={inputCls} placeholder={u.cityPh} />
            </div>
            <div>
              <label className={labelCls}>{u.postcode}</label>
              <input value={postcode} onChange={e => setPostcode(e.target.value)} className={inputCls} placeholder={u.postcodePh} />
            </div>
            <div>
              <label className={labelCls}>{u.emergencyContact}</label>
              <input value={emergencyContact} onChange={e => setEmergencyContact(e.target.value)} className={inputCls} placeholder={u.emergencyContactPh} />
            </div>
            <div>
              <label className={labelCls}>{u.emergencyPhone}</label>
              <input value={emergencyPhone} onChange={e => setEmergencyPhone(e.target.value)} className={inputCls} placeholder={u.emergencyPhonePh} />
            </div>
          </div>

          <div className="mt-6 pt-5 border-t border-brand-muted/10">
            <p className="text-xs font-semibold text-brand-muted uppercase tracking-wide mb-4">{u.spouseLabel}</p>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className={labelCls}>{u.spouseName}</label>
                <input value={spouseName} onChange={e => setSpouseName(e.target.value)} className={inputCls} placeholder={u.spouseNamePh} />
              </div>
              <div>
                <label className={labelCls}>{u.spouseOccupation}</label>
                <input value={spouseOccupation} onChange={e => setSpouseOccupation(e.target.value)} className={inputCls} placeholder={u.spouseOccupationPh} />
              </div>
              <div>
                <label className={labelCls}>{u.spouseEmployer}</label>
                <input value={spouseEmployer} onChange={e => setSpouseEmployer(e.target.value)} className={inputCls} placeholder={u.spouseEmployerPh} />
              </div>
              <div>
                <label className={labelCls}>{u.spouseHealth}</label>
                <input value={spouseHealthStatus} onChange={e => setSpouseHealthStatus(e.target.value)} className={inputCls} placeholder={u.spouseHealthPh} />
              </div>
            </div>
          </div>
        </div>

        {/* ── 3. CURRENT COMPLAINTS ────────────────────────────────────────── */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
          <SectionHeader>{u.s3}</SectionHeader>
          <div className="space-y-5">
            <div>
              <label className={labelCls}>{u.injuryNature}</label>
              <div className="flex flex-wrap gap-4 mt-1">
                {u.injuryTypes.map(t => (
                  <label key={t} className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" checked={injuryType.includes(t)} onChange={() => toggleInjuryType(t)}
                      className="accent-brand-primary w-4 h-4 cursor-pointer" />
                    <span className="text-sm text-brand-dark">{t}</span>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className={labelCls}>{u.injuryDescLabel}</label>
              <textarea rows={3} value={injuryDesc} onChange={e => setInjuryDesc(e.target.value)}
                className={`${inputCls} resize-none`} placeholder={u.injuryDescPh} />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className={labelCls}>{u.dateInjury}</label>
                <input type="date" value={dateOfInjury} onChange={e => setDateOfInjury(e.target.value)} className={inputCls} />
              </div>
              <div>
                <label className={labelCls}>{u.dateSymptoms}</label>
                <input type="date" value={dateSymptoms} onChange={e => setDateSymptoms(e.target.value)} className={inputCls} />
              </div>
            </div>
            <div>
              <label className={labelCls}>{u.hadBefore}</label>
              <RadioGroup name="hadBefore" value={hadBefore} onChange={setHadBefore} />
            </div>
            {hadBefore === u.yesNo[1] && (
              <div>
                <label className={labelCls}>{u.hadBeforeWhen}</label>
                <input value={hadBeforeWhen} onChange={e => setHadBeforeWhen(e.target.value)} className={inputCls} placeholder={u.hadBeforeWhenPh} />
              </div>
            )}
            <div>
              <label className={labelCls}>{u.otherPractitioners}</label>
              <input value={otherPractitioners} onChange={e => setOtherPractitioners(e.target.value)} className={inputCls} placeholder={u.otherPractitionersPh} />
            </div>
            <div>
              <label className={labelCls}>{u.prevChiro}</label>
              <RadioGroup name="prevChiro" value={prevChiro} onChange={setPrevChiro} />
            </div>
            {prevChiro === u.yesNo[1] && (
              <div>
                <label className={labelCls}>{u.prevChiroDesc}</label>
                <input value={prevChiroDesc} onChange={e => setPrevChiroDesc(e.target.value)} className={inputCls} placeholder={u.prevChiroDescPh} />
              </div>
            )}
          </div>
        </div>

        {/* ── 4. MEDICAL HISTORY ───────────────────────────────────────────── */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
          <SectionHeader>{u.s4}</SectionHeader>
          <div className="space-y-5">
            <div>
              <label className={labelCls}>{u.treatedLastYear}</label>
              <RadioGroup name="treatedLastYear" value={treatedLastYear} onChange={setTreatedLastYear} />
            </div>
            {treatedLastYear === u.yesNo[1] && (
              <div>
                <label className={labelCls}>{u.treatedLastYearDesc}</label>
                <textarea rows={2} value={treatedLastYearDesc} onChange={e => setTreatedLastYearDesc(e.target.value)}
                  className={`${inputCls} resize-none`} placeholder={u.treatedLastYearDescPh} />
              </div>
            )}
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className={labelCls}>{u.lastPhysical}</label>
                <input type="date" value={lastPhysical} onChange={e => setLastPhysical(e.target.value)} className={inputCls} />
              </div>
              <div>
                <label className={labelCls}>{u.pregnant}</label>
                <div className="mt-2.5">
                  <RadioGroup name="pregnant" value={pregnant} onChange={setPregnant} />
                </div>
              </div>
              <div>
                <label className={labelCls}>{u.xrays}</label>
                <div className="mt-2.5">
                  <RadioGroup name="xrays" value={xrays} onChange={setXrays} />
                </div>
              </div>
              {xrays === u.yesNo[1] && (
                <div>
                  <label className={labelCls}>{u.xrayLocation}</label>
                  <input value={xrayLocation} onChange={e => setXrayLocation(e.target.value)} className={inputCls} placeholder={u.xrayLocationPh} />
                </div>
              )}
            </div>
            <div>
              <label className={labelCls}>{u.medications}</label>
              <textarea rows={3} value={medications} onChange={e => setMedications(e.target.value)}
                className={`${inputCls} resize-none`} placeholder={u.medicationsPh} />
            </div>
            <div>
              <label className={labelCls}>{u.vitaminsLabel}</label>
              <textarea rows={2} value={vitamins} onChange={e => setVitamins(e.target.value)}
                className={`${inputCls} resize-none`} placeholder={u.vitaminsPh} />
            </div>
          </div>
        </div>

        {/* ── 5. HAVE YOU EVER… ────────────────────────────────────────────── */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
          <SectionHeader>{u.s5}</SectionHeader>
          <div className="space-y-4">
            {u.haveYouEverItems.map(([key, label]) => (
              <div key={key} className="border border-brand-muted/10 rounded-xl p-4">
                <div className="flex flex-wrap items-center gap-4 mb-2">
                  <span className="text-sm font-medium text-brand-dark flex-1">{label}</span>
                  <RadioGroup name={key} value={haveYouEver[key]}
                    onChange={v => setHaveYouEver(prev => ({ ...prev, [key]: v }))} />
                </div>
                {haveYouEver[key] === u.yesNo[1] && (
                  <input
                    value={haveYouEverDesc[key]}
                    onChange={e => setHaveYouEverDesc(prev => ({ ...prev, [key]: e.target.value }))}
                    className={inputCls}
                    placeholder={u.briefExplain}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── 6. FAMILY HISTORY ────────────────────────────────────────────── */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
          <SectionHeader>{u.s6}</SectionHeader>
          <label className={labelCls}>{u.familyHistoryLabel}</label>
          <p className="text-xs text-brand-muted/70 mb-3">{u.familyHistoryHint}</p>
          <textarea rows={4} value={familyHistory} onChange={e => setFamilyHistory(e.target.value)}
            className={`${inputCls} resize-none`} placeholder={u.familyHistoryPh} />
        </div>

        {/* ── 7. DAILY LIFE & SYMPTOMS ─────────────────────────────────────── */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
          <SectionHeader>{u.s7}</SectionHeader>
          <div className="space-y-4">
            {u.dailyItems.map(([key, label]) => (
              <div key={key} className="flex flex-wrap items-center justify-between gap-3 py-3 border-b border-brand-muted/10 last:border-0">
                <span className="text-sm text-brand-dark flex-1">{label}</span>
                <RadioGroup name={key} value={daily[key]}
                  onChange={v => setDaily(prev => ({ ...prev, [key]: v }))} />
              </div>
            ))}
          </div>
          <div className="mt-5">
            <label className={labelCls}>{u.aggravating}</label>
            <textarea rows={2} value={aggravating} onChange={e => setAggravating(e.target.value)}
              className={`${inputCls} resize-none`} placeholder={u.aggravatingPh} />
          </div>
        </div>

        {/* ── 8. HABITS ────────────────────────────────────────────────────── */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
          <SectionHeader>{u.s8}</SectionHeader>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-brand-primary/20">
                  <th className="text-left py-2 pr-4 text-xs font-bold text-brand-muted uppercase tracking-wide w-44">{u.habitCol}</th>
                  {HABIT_LEVELS.map(l => (
                    <th key={l} className="py-2 px-3 text-xs font-bold text-brand-muted uppercase tracking-wide text-center">{l}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {HABITS.map((habit, i) => (
                  <tr key={habit} className={i % 2 === 0 ? 'bg-brand-light/50' : ''}>
                    <td className="py-2.5 pr-4 text-brand-dark">{HABIT_LABELS[i]}</td>
                    {HABIT_LEVELS.map(level => (
                      <td key={level} className="py-2.5 px-3 text-center">
                        <input
                          type="radio"
                          name={`habit-${habit}`}
                          value={level}
                          checked={habits[habit] === level}
                          onChange={() => setHabits(prev => ({ ...prev, [habit]: level }))}
                          className="accent-brand-primary w-4 h-4 cursor-pointer"
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ── 9. PAST HEALTH CONDITIONS ────────────────────────────────────── */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
          <SectionHeader>{u.s9}</SectionHeader>
          <p className="text-xs text-brand-muted/70 mb-5">{u.checkAll}</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {PAST_CONDITIONS.map((condition, i) => (
              <label key={condition} className="flex items-start gap-2 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={pastConditions.includes(PAST_CONDITIONS_EN[i])}
                  onChange={() => toggleCondition(PAST_CONDITIONS_EN[i])}
                  className="accent-brand-primary w-4 h-4 mt-0.5 flex-shrink-0 cursor-pointer"
                />
                <span className="text-sm text-brand-muted group-hover:text-brand-dark transition-colors leading-snug">
                  {condition}
                </span>
              </label>
            ))}
          </div>
          <div className="mt-5">
            <label className={labelCls}>{u.otherConditions}</label>
            <input value={pastConditionsOther} onChange={e => setPastConditionsOther(e.target.value)}
              className={inputCls} placeholder={u.otherConditionsPh} />
          </div>
        </div>

        {/* ── 10. INSURANCE ────────────────────────────────────────────────── */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
          <SectionHeader>{u.s10}</SectionHeader>
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className={labelCls}>{u.insuranceResponsible}</label>
              <input value={insuranceResponsible} onChange={e => setInsuranceResponsible(e.target.value)} className={inputCls} placeholder={u.insuranceResponsiblePh} />
            </div>
            <div>
              <label className={labelCls}>{u.insurancePhone}</label>
              <input value={insurancePhone} onChange={e => setInsurancePhone(e.target.value)} className={inputCls} placeholder={u.insurancePhonePh} />
            </div>
            <div className="sm:col-span-2">
              <label className={labelCls}>{u.hasInsurance}</label>
              <div className="mt-2">
                <RadioGroup name="hasInsurance" value={hasInsurance} onChange={setHasInsurance} />
              </div>
            </div>
            {hasInsurance === u.yesNo[1] && (
              <>
                <div>
                  <label className={labelCls}>{u.insuranceCompany}</label>
                  <input value={insuranceCompany} onChange={e => setInsuranceCompany(e.target.value)} className={inputCls} placeholder={u.insuranceCompanyPh} />
                </div>
                <div>
                  <label className={labelCls}>{u.insuranceContact}</label>
                  <input value={insuranceContact} onChange={e => setInsuranceContact(e.target.value)} className={inputCls} placeholder={u.insuranceContactPh} />
                </div>
                <div>
                  <label className={labelCls}>{u.insuranceCompanyPhone}</label>
                  <input value={insuranceCompanyPhone} onChange={e => setInsuranceCompanyPhone(e.target.value)} className={inputCls} placeholder={u.insuranceCompanyPhonePh} />
                </div>
                <div>
                  <label className={labelCls}>{u.claimNumber}</label>
                  <input value={claimNumber} onChange={e => setClaimNumber(e.target.value)} className={inputCls} placeholder={u.claimNumberPh} />
                </div>
              </>
            )}
          </div>
        </div>

        {/* ── 11. CONSENT & SIGNATURE ──────────────────────────────────────── */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
          <SectionHeader>{u.s11}</SectionHeader>

          <div className="bg-brand-light rounded-xl p-5 mb-6 text-sm text-brand-muted leading-relaxed">
            {u.consentText}
          </div>

          <div className="grid sm:grid-cols-2 gap-5 mb-6">
            <div>
              <label className={labelCls}>{u.signatureName}</label>
              <input required value={signatureName} onChange={e => setSignatureName(e.target.value)}
                className={inputCls} placeholder={u.signatureNamePh} />
            </div>
            <div>
              <label className={labelCls}>{u.signatureDate}</label>
              <input required type="date" value={signatureDate} onChange={e => setSignatureDate(e.target.value)} className={inputCls} />
            </div>
          </div>

          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              required
              checked={consentChecked}
              onChange={e => setConsentChecked(e.target.checked)}
              className="accent-brand-primary w-5 h-5 mt-0.5 flex-shrink-0 cursor-pointer"
            />
            <span className="text-sm text-brand-muted leading-relaxed">{u.consentCheck}</span>
          </label>
        </div>

        {/* SUBMIT */}
        <div className="text-center pb-4">
          <button
            type="submit"
            className="bg-brand-primary text-white font-bold text-base px-12 py-4 rounded-full hover:bg-brand-primary-hover transition-colors shadow-lg shadow-brand-primary/20"
          >
            {u.submitBtn}
          </button>
          <p className="text-xs text-brand-muted/60 mt-4">{u.submitNote}</p>
        </div>
      </form>
    </div>
  );
}
