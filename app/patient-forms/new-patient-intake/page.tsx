'use client';

import { Plus_Jakarta_Sans } from 'next/font/google';
import Link from 'next/link';
import { useState } from 'react';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
});

const PAST_CONDITIONS = [
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

const HABITS = [
  'Alcohol', 'Coffee', 'Tobacco', 'Drugs', 'Exercise', 'Sleep',
  'Appetite', 'Soft Drinks', 'Water', 'Salty Foods', 'Sugary Foods',
  'Artificial Sweeteners',
];

const HABIT_LEVELS = ['None', 'Light', 'Moderate', 'Heavy'] as const;

type HaveYouEverKey = 'brokenBones' | 'hospitalized' | 'autoAccident' | 'sprains' | 'unconscious' | 'surgery';
type DailyKey = 'painEveryDay' | 'interferesLife' | 'wakesAtNight' | 'worseTimes' | 'weatherAffects' | 'orthotics' | 'takeVitamins';

export default function NewPatientIntakePage() {
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

  if (submitted) {
    return (
      <div className={`${plusJakarta.variable} font-[family-name:var(--font-jakarta)] text-[#191919] bg-white min-h-screen flex items-center justify-center px-6`}>
        <div className="max-w-lg w-full text-center py-20">
          <div className="w-20 h-20 rounded-full bg-[#45321A]/10 flex items-center justify-center mx-auto mb-6">
            <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10" stroke="#45321A" strokeWidth="2">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h1 className="text-3xl font-extrabold text-[#191919] mb-4">Form Submitted</h1>
          <p className="text-[#403F3F] text-lg leading-relaxed mb-8">
            Thank you, <strong>{firstName}</strong>. We have received your intake form and will review it before your appointment.
          </p>
          <Link
            href="/"
            className="inline-block bg-[#45321A] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#5a4228] transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  // ── Reusable field components ──────────────────────────────────────────────
  const inputCls = 'w-full border border-[#403F3F]/20 rounded-lg px-3 py-2.5 text-sm text-[#191919] bg-white focus:outline-none focus:ring-2 focus:ring-[#45321A]/30 focus:border-[#45321A] transition-colors';
  const labelCls = 'block text-xs font-semibold text-[#403F3F] uppercase tracking-wide mb-1';
  const selectCls = `${inputCls} appearance-none`;

  const RadioGroup = ({ name, value, onChange }: { name: string; value: string; onChange: (v: string) => void }) => (
    <div className="flex gap-4">
      {['No', 'Yes'].map(opt => (
        <label key={opt} className="flex items-center gap-1.5 cursor-pointer">
          <input type="radio" name={name} value={opt} checked={value === opt}
            onChange={() => onChange(opt)}
            className="accent-[#45321A] w-4 h-4 cursor-pointer" />
          <span className="text-sm text-[#191919]">{opt}</span>
        </label>
      ))}
    </div>
  );

  const SectionHeader = ({ children }: { children: React.ReactNode }) => (
    <div className="border-b-2 border-[#45321A] pb-2 mb-6">
      <h2 className="text-base font-extrabold text-[#45321A] uppercase tracking-widest">{children}</h2>
    </div>
  );

  return (
    <div className={`${plusJakarta.variable} font-[family-name:var(--font-jakarta)] text-[#191919] bg-[#F6F6F6] min-h-screen`}>

      {/* NAV */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-6 flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-2.5 hover:opacity-80 transition-opacity">
            <div className="w-9 h-9 rounded-full bg-[#45321A] flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                <path d="M12 2C9 2 7 5 7 8c0 2 1 3.5 2.5 4.5L9 20h6l-.5-7.5C16 11.5 17 10 17 8c0-3-2-6-5-6z" fill="white" />
              </svg>
            </div>
            <div>
              <div className="font-extrabold text-base text-[#191919] leading-tight">Health4Life</div>
              <div className="text-[10px] text-[#45321A] font-semibold uppercase tracking-widest leading-none">Chiropractic</div>
            </div>
          </Link>
          <Link href="/patient-forms" className="text-sm font-semibold text-[#45321A] hover:opacity-75 transition-opacity flex items-center gap-1">
            <svg viewBox="0 0 20 20" className="w-4 h-4 fill-current rotate-180">
              <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"/>
            </svg>
            Patient Forms
          </Link>
        </div>
      </nav>

      {/* HEADER */}
      <div className="bg-[#45321A] text-white py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-white/60 text-xs font-semibold uppercase tracking-widest">New Patients</span>
          <h1 className="text-3xl md:text-4xl font-extrabold mt-2 mb-3">New Patient Intake Form</h1>
          <p className="text-white/75 text-sm max-w-xl mx-auto leading-relaxed">
            Please complete all sections as accurately as possible. All information is strictly confidential.
          </p>
        </div>
      </div>

      {/* FORM */}
      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto px-6 py-10 space-y-8">

        {/* ── 1. PERSONAL DATA ─────────────────────────────────────────────── */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
          <SectionHeader>1. Personal Data</SectionHeader>
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className={labelCls}>First Name *</label>
              <input required value={firstName} onChange={e => setFirstName(e.target.value)} className={inputCls} placeholder="Your first name" />
            </div>
            <div>
              <label className={labelCls}>Last Name *</label>
              <input required value={lastName} onChange={e => setLastName(e.target.value)} className={inputCls} placeholder="Your last name" />
            </div>
            <div>
              <label className={labelCls}>Date of Birth *</label>
              <input required type="date" value={dob} onChange={e => setDob(e.target.value)} className={inputCls} />
            </div>
            <div>
              <label className={labelCls}>Age</label>
              <input type="number" min="0" max="120" value={age} onChange={e => setAge(e.target.value)} className={inputCls} placeholder="e.g. 35" />
            </div>
            <div>
              <label className={labelCls}>Gender</label>
              <select value={gender} onChange={e => setGender(e.target.value)} className={selectCls}>
                <option value="">Select…</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
                <option>Prefer not to say</option>
              </select>
            </div>
            <div>
              <label className={labelCls}>Marital Status</label>
              <select value={marital} onChange={e => setMarital(e.target.value)} className={selectCls}>
                <option value="">Select…</option>
                <option>Single</option>
                <option>Married</option>
                <option>Partner</option>
                <option>Divorced</option>
                <option>Widowed</option>
              </select>
            </div>
            <div>
              <label className={labelCls}>Occupation</label>
              <input value={occupation} onChange={e => setOccupation(e.target.value)} className={inputCls} placeholder="Your job title" />
            </div>
            <div>
              <label className={labelCls}>Employer</label>
              <input value={employer} onChange={e => setEmployer(e.target.value)} className={inputCls} placeholder="Company name" />
            </div>
            <div>
              <label className={labelCls}>Number of Children</label>
              <input type="number" min="0" value={numChildren} onChange={e => setNumChildren(e.target.value)} className={inputCls} placeholder="0" />
            </div>
            <div>
              <label className={labelCls}>BSN / Social Security #</label>
              <input value={bsn} onChange={e => setBsn(e.target.value)} className={inputCls} placeholder="Optional" />
            </div>
          </div>
        </div>

        {/* ── 2. CONTACT & ADDRESS ─────────────────────────────────────────── */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
          <SectionHeader>2. Contact &amp; Address</SectionHeader>
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className={labelCls}>Email Address *</label>
              <input required type="email" value={email} onChange={e => setEmail(e.target.value)} className={inputCls} placeholder="you@example.com" />
            </div>
            <div>
              <label className={labelCls}>Phone (mobile / home) *</label>
              <input required value={phoneMobile} onChange={e => setPhoneMobile(e.target.value)} className={inputCls} placeholder="06 …" />
            </div>
            <div>
              <label className={labelCls}>Phone (work)</label>
              <input value={phoneWork} onChange={e => setPhoneWork(e.target.value)} className={inputCls} placeholder="020 …" />
            </div>
            <div>
              <label className={labelCls}>Referred By</label>
              <input value={referredBy} onChange={e => setReferredBy(e.target.value)} className={inputCls} placeholder="Doctor, friend, internet…" />
            </div>
            <div className="sm:col-span-2">
              <label className={labelCls}>Street Address</label>
              <input value={address} onChange={e => setAddress(e.target.value)} className={inputCls} placeholder="Street and house number" />
            </div>
            <div>
              <label className={labelCls}>City</label>
              <input value={city} onChange={e => setCity(e.target.value)} className={inputCls} placeholder="Amsterdam" />
            </div>
            <div>
              <label className={labelCls}>Postcode</label>
              <input value={postcode} onChange={e => setPostcode(e.target.value)} className={inputCls} placeholder="1234 AB" />
            </div>
            <div>
              <label className={labelCls}>Emergency Contact Name</label>
              <input value={emergencyContact} onChange={e => setEmergencyContact(e.target.value)} className={inputCls} placeholder="Full name" />
            </div>
            <div>
              <label className={labelCls}>Emergency Contact Phone</label>
              <input value={emergencyPhone} onChange={e => setEmergencyPhone(e.target.value)} className={inputCls} placeholder="06 …" />
            </div>
          </div>

          <div className="mt-6 pt-5 border-t border-[#403F3F]/10">
            <p className="text-xs font-semibold text-[#403F3F] uppercase tracking-wide mb-4">Spouse / Partner (if applicable)</p>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className={labelCls}>Name</label>
                <input value={spouseName} onChange={e => setSpouseName(e.target.value)} className={inputCls} placeholder="Full name" />
              </div>
              <div>
                <label className={labelCls}>Occupation</label>
                <input value={spouseOccupation} onChange={e => setSpouseOccupation(e.target.value)} className={inputCls} placeholder="Job title" />
              </div>
              <div>
                <label className={labelCls}>Employer</label>
                <input value={spouseEmployer} onChange={e => setSpouseEmployer(e.target.value)} className={inputCls} placeholder="Company name" />
              </div>
              <div>
                <label className={labelCls}>Health Status</label>
                <input value={spouseHealthStatus} onChange={e => setSpouseHealthStatus(e.target.value)} className={inputCls} placeholder="General health description" />
              </div>
            </div>
          </div>
        </div>

        {/* ── 3. CURRENT COMPLAINTS ────────────────────────────────────────── */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
          <SectionHeader>3. Current Complaints</SectionHeader>
          <div className="space-y-5">
            <div>
              <label className={labelCls}>Nature of Injury / Complaint</label>
              <div className="flex flex-wrap gap-4 mt-1">
                {['Automobile', 'Work', 'Other'].map(t => (
                  <label key={t} className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" checked={injuryType.includes(t)} onChange={() => toggleInjuryType(t)}
                      className="accent-[#45321A] w-4 h-4 cursor-pointer" />
                    <span className="text-sm text-[#191919]">{t}</span>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className={labelCls}>Please Describe</label>
              <textarea rows={3} value={injuryDesc} onChange={e => setInjuryDesc(e.target.value)}
                className={`${inputCls} resize-none`} placeholder="Describe your complaint in your own words…" />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className={labelCls}>Date of Injury</label>
                <input type="date" value={dateOfInjury} onChange={e => setDateOfInjury(e.target.value)} className={inputCls} />
              </div>
              <div>
                <label className={labelCls}>Date Symptoms Appeared</label>
                <input type="date" value={dateSymptoms} onChange={e => setDateSymptoms(e.target.value)} className={inputCls} />
              </div>
            </div>
            <div>
              <label className={labelCls}>Have you ever had the same condition before?</label>
              <RadioGroup name="hadBefore" value={hadBefore} onChange={setHadBefore} />
            </div>
            {hadBefore === 'Yes' && (
              <div>
                <label className={labelCls}>If yes, when?</label>
                <input value={hadBeforeWhen} onChange={e => setHadBeforeWhen(e.target.value)} className={inputCls} placeholder="Approximate date or year" />
              </div>
            )}
            <div>
              <label className={labelCls}>Other practitioners seen for this condition</label>
              <input value={otherPractitioners} onChange={e => setOtherPractitioners(e.target.value)} className={inputCls} placeholder="e.g. GP, physiotherapist, specialist…" />
            </div>
            <div>
              <label className={labelCls}>Have you ever been under chiropractic care?</label>
              <RadioGroup name="prevChiro" value={prevChiro} onChange={setPrevChiro} />
            </div>
            {prevChiro === 'Yes' && (
              <div>
                <label className={labelCls}>If yes, please describe</label>
                <input value={prevChiroDesc} onChange={e => setPrevChiroDesc(e.target.value)} className={inputCls} placeholder="Where, when, for what condition…" />
              </div>
            )}
          </div>
        </div>

        {/* ── 4. MEDICAL HISTORY ───────────────────────────────────────────── */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
          <SectionHeader>4. Medical History</SectionHeader>
          <div className="space-y-5">
            <div>
              <label className={labelCls}>Have you been treated for any conditions in the last year?</label>
              <RadioGroup name="treatedLastYear" value={treatedLastYear} onChange={setTreatedLastYear} />
            </div>
            {treatedLastYear === 'Yes' && (
              <div>
                <label className={labelCls}>If yes, please describe</label>
                <textarea rows={2} value={treatedLastYearDesc} onChange={e => setTreatedLastYearDesc(e.target.value)}
                  className={`${inputCls} resize-none`} placeholder="Condition, treatment, outcome…" />
              </div>
            )}
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className={labelCls}>Date of Last Physical Exam</label>
                <input type="date" value={lastPhysical} onChange={e => setLastPhysical(e.target.value)} className={inputCls} />
              </div>
              <div>
                <label className={labelCls}>Is there a chance you are pregnant?</label>
                <div className="mt-2.5">
                  <RadioGroup name="pregnant" value={pregnant} onChange={setPregnant} />
                </div>
              </div>
              <div>
                <label className={labelCls}>Have you had X-rays taken?</label>
                <div className="mt-2.5">
                  <RadioGroup name="xrays" value={xrays} onChange={setXrays} />
                </div>
              </div>
              {xrays === 'Yes' && (
                <div>
                  <label className={labelCls}>If yes, where?</label>
                  <input value={xrayLocation} onChange={e => setXrayLocation(e.target.value)} className={inputCls} placeholder="Hospital or clinic name" />
                </div>
              )}
            </div>
            <div>
              <label className={labelCls}>Current Medications (include dosage &amp; condition)</label>
              <textarea rows={3} value={medications} onChange={e => setMedications(e.target.value)}
                className={`${inputCls} resize-none`} placeholder="Medication name — dosage — condition it treats…" />
            </div>
            <div>
              <label className={labelCls}>Vitamins, Minerals or Herbs (include dosage &amp; frequency)</label>
              <textarea rows={2} value={vitamins} onChange={e => setVitamins(e.target.value)}
                className={`${inputCls} resize-none`} placeholder="e.g. Vitamin D3 — 2000 IU daily…" />
            </div>
          </div>
        </div>

        {/* ── 5. HAVE YOU EVER… ────────────────────────────────────────────── */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
          <SectionHeader>5. Have You Ever…</SectionHeader>
          <div className="space-y-4">
            {([
              ['brokenBones', 'Broken bones?'],
              ['hospitalized', 'Been hospitalised?'],
              ['autoAccident', 'Been in an auto accident?'],
              ['sprains', 'Had sprains or strains?'],
              ['unconscious', 'Been struck unconscious?'],
              ['surgery', 'Had surgery?'],
            ] as [HaveYouEverKey, string][]).map(([key, label]) => (
              <div key={key} className="border border-[#403F3F]/10 rounded-xl p-4">
                <div className="flex flex-wrap items-center gap-4 mb-2">
                  <span className="text-sm font-medium text-[#191919] flex-1">{label}</span>
                  <RadioGroup name={key} value={haveYouEver[key]}
                    onChange={v => setHaveYouEver(prev => ({ ...prev, [key]: v }))} />
                </div>
                {haveYouEver[key] === 'Yes' && (
                  <input
                    value={haveYouEverDesc[key]}
                    onChange={e => setHaveYouEverDesc(prev => ({ ...prev, [key]: e.target.value }))}
                    className={inputCls}
                    placeholder="Briefly explain…"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── 6. FAMILY HISTORY ────────────────────────────────────────────── */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
          <SectionHeader>6. Family History</SectionHeader>
          <label className={labelCls}>Family members — present and past health conditions</label>
          <p className="text-xs text-[#403F3F]/70 mb-3">e.g. heart disease, cancer, diabetes, arthritis, etc.</p>
          <textarea rows={4} value={familyHistory} onChange={e => setFamilyHistory(e.target.value)}
            className={`${inputCls} resize-none`} placeholder="Describe relevant family health history…" />
        </div>

        {/* ── 7. DAILY LIFE & SYMPTOMS ─────────────────────────────────────── */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
          <SectionHeader>7. Daily Life &amp; Symptoms</SectionHeader>
          <div className="space-y-4">
            {([
              ['painEveryDay', 'Do you experience pain every day?'],
              ['interferesLife', 'Do your symptoms interfere with daily life?'],
              ['wakesAtNight', 'Does pain wake you up at night?'],
              ['worseTimes', 'Are your symptoms worse at certain times of the day?'],
              ['weatherAffects', 'Do changes in weather affect your symptoms?'],
              ['orthotics', 'Do you wear orthotics?'],
              ['takeVitamins', 'Do you take vitamin supplements?'],
            ] as [DailyKey, string][]).map(([key, label]) => (
              <div key={key} className="flex flex-wrap items-center justify-between gap-3 py-3 border-b border-[#403F3F]/10 last:border-0">
                <span className="text-sm text-[#191919] flex-1">{label}</span>
                <RadioGroup name={key} value={daily[key]}
                  onChange={v => setDaily(prev => ({ ...prev, [key]: v }))} />
              </div>
            ))}
          </div>
          <div className="mt-5">
            <label className={labelCls}>What activities aggravate your symptoms?</label>
            <textarea rows={2} value={aggravating} onChange={e => setAggravating(e.target.value)}
              className={`${inputCls} resize-none`} placeholder="e.g. sitting for long periods, lifting, bending…" />
          </div>
        </div>

        {/* ── 8. HABITS ────────────────────────────────────────────────────── */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
          <SectionHeader>8. Habits</SectionHeader>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-[#45321A]/20">
                  <th className="text-left py-2 pr-4 text-xs font-bold text-[#403F3F] uppercase tracking-wide w-44">Habit</th>
                  {HABIT_LEVELS.map(l => (
                    <th key={l} className="py-2 px-3 text-xs font-bold text-[#403F3F] uppercase tracking-wide text-center">{l}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {HABITS.map((habit, i) => (
                  <tr key={habit} className={i % 2 === 0 ? 'bg-[#F6F6F6]/50' : ''}>
                    <td className="py-2.5 pr-4 text-[#191919]">{habit}</td>
                    {HABIT_LEVELS.map(level => (
                      <td key={level} className="py-2.5 px-3 text-center">
                        <input
                          type="radio"
                          name={`habit-${habit}`}
                          value={level}
                          checked={habits[habit] === level}
                          onChange={() => setHabits(prev => ({ ...prev, [habit]: level }))}
                          className="accent-[#45321A] w-4 h-4 cursor-pointer"
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
          <SectionHeader>9. Have You Ever Suffered From…</SectionHeader>
          <p className="text-xs text-[#403F3F]/70 mb-5">Check all that apply.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {PAST_CONDITIONS.map(condition => (
              <label key={condition} className="flex items-start gap-2 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={pastConditions.includes(condition)}
                  onChange={() => toggleCondition(condition)}
                  className="accent-[#45321A] w-4 h-4 mt-0.5 flex-shrink-0 cursor-pointer"
                />
                <span className="text-sm text-[#403F3F] group-hover:text-[#191919] transition-colors leading-snug">
                  {condition}
                </span>
              </label>
            ))}
          </div>
          <div className="mt-5">
            <label className={labelCls}>Other (please specify)</label>
            <input value={pastConditionsOther} onChange={e => setPastConditionsOther(e.target.value)}
              className={inputCls} placeholder="Any other conditions not listed above…" />
          </div>
        </div>

        {/* ── 10. INSURANCE ────────────────────────────────────────────────── */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
          <SectionHeader>10. Insurance Information</SectionHeader>
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className={labelCls}>Name of party responsible for payment</label>
              <input value={insuranceResponsible} onChange={e => setInsuranceResponsible(e.target.value)} className={inputCls} placeholder="Full name" />
            </div>
            <div>
              <label className={labelCls}>Phone</label>
              <input value={insurancePhone} onChange={e => setInsurancePhone(e.target.value)} className={inputCls} placeholder="06 …" />
            </div>
            <div className="sm:col-span-2">
              <label className={labelCls}>Do you have health insurance?</label>
              <div className="mt-2">
                <RadioGroup name="hasInsurance" value={hasInsurance} onChange={setHasInsurance} />
              </div>
            </div>
            {hasInsurance === 'Yes' && (
              <>
                <div>
                  <label className={labelCls}>Insurance Company Name</label>
                  <input value={insuranceCompany} onChange={e => setInsuranceCompany(e.target.value)} className={inputCls} placeholder="e.g. Zilveren Kruis, VGZ…" />
                </div>
                <div>
                  <label className={labelCls}>Contact Person</label>
                  <input value={insuranceContact} onChange={e => setInsuranceContact(e.target.value)} className={inputCls} placeholder="Contact person at insurer" />
                </div>
                <div>
                  <label className={labelCls}>Insurance Company Phone</label>
                  <input value={insuranceCompanyPhone} onChange={e => setInsuranceCompanyPhone(e.target.value)} className={inputCls} placeholder="Insurer phone number" />
                </div>
                <div>
                  <label className={labelCls}>Claim / Policy #</label>
                  <input value={claimNumber} onChange={e => setClaimNumber(e.target.value)} className={inputCls} placeholder="Policy or claim number" />
                </div>
              </>
            )}
          </div>
        </div>

        {/* ── 11. CONSENT & SIGNATURE ──────────────────────────────────────── */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
          <SectionHeader>11. Consent &amp; Signature</SectionHeader>

          <div className="bg-[#F6F6F6] rounded-xl p-5 mb-6 text-sm text-[#403F3F] leading-relaxed">
            I understand and agree that health/accident insurance policies are an arrangement between an insurance
            carrier and myself. I understand and agree that all services rendered to me are charged as my personal
            responsibility for timely payment. I understand that if I suspend or terminate my care/treatment,
            any fees for professional services rendered to me will be immediately due and payable.
          </div>

          <div className="grid sm:grid-cols-2 gap-5 mb-6">
            <div>
              <label className={labelCls}>Full Name (as signature) *</label>
              <input required value={signatureName} onChange={e => setSignatureName(e.target.value)}
                className={inputCls} placeholder="Type your full name" />
            </div>
            <div>
              <label className={labelCls}>Date *</label>
              <input required type="date" value={signatureDate} onChange={e => setSignatureDate(e.target.value)} className={inputCls} />
            </div>
          </div>

          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              required
              checked={consentChecked}
              onChange={e => setConsentChecked(e.target.checked)}
              className="accent-[#45321A] w-5 h-5 mt-0.5 flex-shrink-0 cursor-pointer"
            />
            <span className="text-sm text-[#403F3F] leading-relaxed">
              I confirm that the information provided in this form is accurate and complete to the best of my knowledge.
              I consent to chiropractic examination and treatment as deemed necessary by Dr. Jahani. *
            </span>
          </label>
        </div>

        {/* SUBMIT */}
        <div className="text-center pb-4">
          <button
            type="submit"
            className="bg-[#45321A] text-white font-bold text-base px-12 py-4 rounded-full hover:bg-[#5a4228] transition-colors shadow-lg shadow-[#45321A]/20"
          >
            Submit Intake Form
          </button>
          <p className="text-xs text-[#403F3F]/60 mt-4">
            All information is strictly confidential and used solely for your care at Health4Life Chiropractic.
          </p>
        </div>
      </form>
    </div>
  );
}
