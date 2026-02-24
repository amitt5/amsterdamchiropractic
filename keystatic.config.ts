import { config, collection, singleton, fields } from '@keystatic/core';

export default config({
  storage: { kind: 'local' },

  ui: {
    brand: { name: 'Health4Life CMS' },
  },

  collections: {
    klachten: collection({
      label: 'Klachten (Aandoeningen)',
      slugField: 'slug',
      path: 'content/klachten/*',
      format: { data: 'json' },
      schema: {
        slug: fields.slug({ name: { label: 'Slug (URL pad)' } }),

        title: fields.text({
          label: 'Paginatitel (H1)',
          validation: { isRequired: true },
        }),

        highlightBox: fields.text({
          label: 'Uitgelicht kader bovenaan (bruin, optioneel)',
          multiline: true,
        }),

        intro: fields.text({
          label: 'Introductietekst (zonder kopje, optioneel)',
          multiline: true,
        }),

        sections: fields.array(
          fields.object({
            heading: fields.text({ label: 'Kopje (optioneel)' }),
            paragraphs: fields.array(
              fields.text({ label: 'Paragraaf', multiline: true }),
              { label: 'Paragrafen', itemLabel: (props) => String(props.value).slice(0, 60) + '…' }
            ),
            listItems: fields.array(
              fields.text({ label: 'Item', multiline: true }),
              { label: 'Lijstitems', itemLabel: (props) => String(props.value).slice(0, 50) }
            ),
            listStyle: fields.select({
              label: 'Lijst stijl',
              options: [
                { label: 'Geen lijst', value: 'none' },
                { label: 'Puntjes (·)', value: 'bullets' },
                { label: 'Vinkjes (✓)', value: 'checks' },
                { label: 'Nummers (1, 2, 3…)', value: 'numbered' },
              ],
              defaultValue: 'none',
            }),
            twoColumns: fields.checkbox({ label: 'Lijst in twee kolommen weergeven', defaultValue: false }),
            noteBelow: fields.text({ label: 'Noot onder de lijst (optioneel)', multiline: true }),
          }),
          { label: 'Secties', itemLabel: (props) => props.fields.heading.value || '(sectie zonder kopje)' }
        ),

        causesSection: fields.object({
          heading: fields.text({ label: 'Kopje (leeg = verborgen)' }),
          intro: fields.text({ label: 'Intro tekst', multiline: true }),
          geleidelijkHeading: fields.text({ label: 'Kolom 1 kopje' }),
          geleidelijkItems: fields.array(
            fields.text({ label: 'Oorzaak', multiline: true }),
            { label: 'Kolom 1 items', itemLabel: (props) => String(props.value).slice(0, 50) }
          ),
          plotselingHeading: fields.text({ label: 'Kolom 2 kopje' }),
          plotselingItems: fields.array(
            fields.text({ label: 'Oorzaak', multiline: true }),
            { label: 'Kolom 2 items', itemLabel: (props) => String(props.value).slice(0, 50) }
          ),
        }, { label: 'Twee-kolom oorzaken sectie (leeg laten als niet van toepassing)' }),

        sidebarCtaSubtext: fields.text({
          label: 'Sidebar – tekst onder de knop',
          multiline: true,
        }),

        sidebarCtaButtonLabel: fields.text({
          label: 'Sidebar – knoptekst',
        }),

        relatedConditions: fields.array(
          fields.object({
            label: fields.text({ label: 'Naam' }),
            href: fields.text({ label: 'Pad (bv. /klachten/nek)' }),
          }),
          {
            label: 'Gerelateerde klachten (3 items)',
            itemLabel: (props) => props.fields.label.value || 'Klacht',
          }
        ),
      },
    }),
  },

  singletons: {
    navigation: singleton({
      label: 'Navigatie',
      path: 'content/navigation',
      format: { data: 'json' },
      schema: {
        en: fields.object({
          book: fields.text({ label: 'Book button label' }),
          thisPage: fields.text({ label: '"This Page" label' }),
          conditionsLabel: fields.text({ label: '"Conditions" label' }),
          moreLabel: fields.text({ label: '"More" label' }),
        }, { label: 'English (EN)' }),
        nl: fields.object({
          book: fields.text({ label: 'Afspraak knop label' }),
          thisPage: fields.text({ label: '"Deze Pagina" label' }),
          conditionsLabel: fields.text({ label: '"Klachten" label' }),
          moreLabel: fields.text({ label: '"Meer" label' }),
        }, { label: 'Nederlands (NL)' }),
      },
    }),

    homepage: singleton({
      label: 'Homepage',
      path: 'content/homepage',
      format: { data: 'json' },
      schema: {
        en: fields.object({
          badge: fields.text({ label: 'Badge' }),
          h1: fields.array(fields.text({ label: 'Line' }), { label: 'H1 (4 lines)', itemLabel: (p) => String(p.value) }),
          heroSub: fields.text({ label: 'Hero subtitle', multiline: true }),
          bookBtn: fields.text({ label: 'Book button' }),
          callBtn: fields.text({ label: 'Call button' }),
          aiBtn: fields.text({ label: 'AI button' }),
          stats: fields.array(
            fields.object({ value: fields.text({ label: 'Value (e.g. 15+)' }), label: fields.text({ label: 'Label' }) }),
            { label: 'Stats (3)', itemLabel: (p) => p.fields.value.value }
          ),
          servicesLabel: fields.text({ label: 'Services label' }),
          servicesH2: fields.text({ label: 'Services heading' }),
          services: fields.array(
            fields.object({ title: fields.text({ label: 'Title' }), desc: fields.text({ label: 'Description', multiline: true }) }),
            { label: 'Services (4)', itemLabel: (p) => p.fields.title.value }
          ),
          comboTitle: fields.text({ label: 'Combo therapy title' }),
          comboDesc: fields.text({ label: 'Combo therapy description', multiline: true }),
          conditionsLabel: fields.text({ label: 'Conditions label' }),
          conditionsH2: fields.text({ label: 'Conditions heading' }),
          conditionsDesc: fields.text({ label: 'Conditions description', multiline: true }),
          conditionsClick: fields.text({ label: 'Conditions click prompt' }),
          approachLabel: fields.text({ label: 'Approach label' }),
          approachH2: fields.text({ label: 'Approach heading' }),
          approachDesc: fields.text({ label: 'Approach description', multiline: true }),
          phases: fields.array(
            fields.object({ step: fields.text({ label: 'Step' }), title: fields.text({ label: 'Title' }), desc: fields.text({ label: 'Description', multiline: true }) }),
            { label: 'Phases (3)', itemLabel: (p) => p.fields.title.value }
          ),
          phaseLabel: fields.text({ label: 'Phase label' }),
          firstVisitLabel: fields.text({ label: 'First visit label' }),
          firstVisitH2: fields.text({ label: 'First visit heading' }),
          firstVisitDesc: fields.text({ label: 'First visit description', multiline: true }),
          firstVisitSteps: fields.array(
            fields.object({ step: fields.text({ label: 'Step' }), title: fields.text({ label: 'Title' }), desc: fields.text({ label: 'Description', multiline: true }) }),
            { label: 'First visit steps (7)', itemLabel: (p) => p.fields.title.value }
          ),
          pricingLabel: fields.text({ label: 'Pricing label' }),
          pricingH2: fields.text({ label: 'Pricing heading' }),
          pricingDesc: fields.text({ label: 'Pricing description', multiline: true }),
          pricingHeaders: fields.array(fields.text({ label: 'Column header' }), { label: 'Table headers (2)', itemLabel: (p) => String(p.value) }),
          pricingRows: fields.array(
            fields.object({ treatment: fields.text({ label: 'Treatment' }), price: fields.text({ label: 'Price' }) }),
            { label: 'Pricing rows', itemLabel: (p) => p.fields.treatment.value }
          ),
          paymentNote: fields.text({ label: 'Payment note', multiline: true }),
          insuranceH3: fields.text({ label: 'Insurance heading' }),
          insuranceP1: fields.text({ label: 'Insurance paragraph 1', multiline: true }),
          insuranceP2: fields.text({ label: 'Insurance paragraph 2', multiline: true }),
          insuranceLinkPre: fields.text({ label: 'Insurance link prefix' }),
          insuranceLink: fields.text({ label: 'Insurance link text' }),
          ctaH2: fields.text({ label: 'CTA heading' }),
          ctaP: fields.text({ label: 'CTA paragraph', multiline: true }),
          ctaBook: fields.text({ label: 'CTA book button' }),
          ctaCall: fields.text({ label: 'CTA call button' }),
          aboutLabel: fields.text({ label: 'About label' }),
          aboutH2: fields.text({ label: 'About heading' }),
          aboutSubtitle: fields.text({ label: 'About subtitle' }),
          aboutP1: fields.text({ label: 'About paragraph 1', multiline: true }),
          aboutP2: fields.text({ label: 'About paragraph 2', multiline: true }),
          aboutStats: fields.array(
            fields.object({ value: fields.text({ label: 'Value' }), label: fields.text({ label: 'Label' }) }),
            { label: 'About stats (4)', itemLabel: (p) => p.fields.value.value }
          ),
          testimonialsLabel: fields.text({ label: 'Testimonials label' }),
          testimonialsH2: fields.text({ label: 'Testimonials heading' }),
          testimonials: fields.array(
            fields.object({ name: fields.text({ label: 'Name' }), text: fields.text({ label: 'Review text', multiline: true }), rating: fields.integer({ label: 'Rating (1-5)' }) }),
            { label: 'Testimonials', itemLabel: (p) => p.fields.name.value }
          ),
          faqLabel: fields.text({ label: 'FAQ label' }),
          faqH2: fields.text({ label: 'FAQ heading' }),
          faqs: fields.array(
            fields.object({ q: fields.text({ label: 'Question' }), a: fields.text({ label: 'Answer', multiline: true }) }),
            { label: 'FAQs', itemLabel: (p) => p.fields.q.value }
          ),
          bookingLabel: fields.text({ label: 'Booking label' }),
          bookingH2: fields.text({ label: 'Booking heading' }),
          bookingDesc: fields.text({ label: 'Booking description', multiline: true }),
          bookingInfo: fields.array(
            fields.object({ label: fields.text({ label: 'Label' }), value: fields.text({ label: 'Value' }) }),
            { label: 'Booking info', itemLabel: (p) => p.fields.label.value }
          ),
          aiFloat: fields.text({ label: 'AI button (floating)' }),
          modalWhat: fields.text({ label: 'Modal "What is it?" label' }),
          modalHow: fields.text({ label: 'Modal "How does chiro help?" label' }),
          modalCta: fields.text({ label: 'Modal CTA — use {title} as placeholder' }),
          modalBook: fields.text({ label: 'Modal book button' }),
          modalCall: fields.text({ label: 'Modal call button' }),
          footerTagline: fields.text({ label: 'Footer tagline', multiline: true }),
          footerQuickLinks: fields.text({ label: 'Footer "Quick Links" heading' }),
          footerQuickLinksItems: fields.array(
            fields.object({ anchor: fields.text({ label: 'Anchor (e.g. services)' }), label: fields.text({ label: 'Link label' }) }),
            { label: 'Quick links', itemLabel: (p) => p.fields.label.value }
          ),
          footerNewPatient: fields.text({ label: 'Footer "New Patient" heading' }),
          footerNewPatientItems: fields.array(
            fields.object({ href: fields.text({ label: 'Path (e.g. /patient-forms)' }), label: fields.text({ label: 'Link label' }) }),
            { label: 'New patient links', itemLabel: (p) => p.fields.label.value }
          ),
          footerContact: fields.text({ label: 'Footer "Contact" heading' }),
          footerHours: fields.array(fields.text({ label: 'Hours line' }), { label: 'Opening hours (2 lines)', itemLabel: (p) => String(p.value) }),
          footerCopy: fields.text({ label: 'Copyright text' }),
          footerLegal: fields.text({ label: 'Privacy / Legal text' }),
        }, { label: 'English (EN)' }),

        nl: fields.object({
          badge: fields.text({ label: 'Badge' }),
          h1: fields.array(fields.text({ label: 'Regel' }), { label: 'H1 (4 regels)', itemLabel: (p) => String(p.value) }),
          heroSub: fields.text({ label: 'Hero subtitel', multiline: true }),
          bookBtn: fields.text({ label: 'Afspraak knop' }),
          callBtn: fields.text({ label: 'Bel knop' }),
          aiBtn: fields.text({ label: 'AI knop' }),
          stats: fields.array(
            fields.object({ value: fields.text({ label: 'Waarde (bijv. 15+)' }), label: fields.text({ label: 'Label' }) }),
            { label: 'Stats (3)', itemLabel: (p) => p.fields.value.value }
          ),
          servicesLabel: fields.text({ label: 'Diensten label' }),
          servicesH2: fields.text({ label: 'Diensten koptekst' }),
          services: fields.array(
            fields.object({ title: fields.text({ label: 'Titel' }), desc: fields.text({ label: 'Beschrijving', multiline: true }) }),
            { label: 'Diensten (4)', itemLabel: (p) => p.fields.title.value }
          ),
          comboTitle: fields.text({ label: 'Combinatie therapie titel' }),
          comboDesc: fields.text({ label: 'Combinatie therapie beschrijving', multiline: true }),
          conditionsLabel: fields.text({ label: 'Klachten label' }),
          conditionsH2: fields.text({ label: 'Klachten koptekst' }),
          conditionsDesc: fields.text({ label: 'Klachten beschrijving', multiline: true }),
          conditionsClick: fields.text({ label: 'Klachten klik prompt' }),
          approachLabel: fields.text({ label: 'Aanpak label' }),
          approachH2: fields.text({ label: 'Aanpak koptekst' }),
          approachDesc: fields.text({ label: 'Aanpak beschrijving', multiline: true }),
          phases: fields.array(
            fields.object({ step: fields.text({ label: 'Stap' }), title: fields.text({ label: 'Titel' }), desc: fields.text({ label: 'Beschrijving', multiline: true }) }),
            { label: 'Fasen (3)', itemLabel: (p) => p.fields.title.value }
          ),
          phaseLabel: fields.text({ label: 'Fase label' }),
          firstVisitLabel: fields.text({ label: 'Eerste bezoek label' }),
          firstVisitH2: fields.text({ label: 'Eerste bezoek koptekst' }),
          firstVisitDesc: fields.text({ label: 'Eerste bezoek beschrijving', multiline: true }),
          firstVisitSteps: fields.array(
            fields.object({ step: fields.text({ label: 'Stap' }), title: fields.text({ label: 'Titel' }), desc: fields.text({ label: 'Beschrijving', multiline: true }) }),
            { label: 'Eerste bezoek stappen (7)', itemLabel: (p) => p.fields.title.value }
          ),
          pricingLabel: fields.text({ label: 'Tarieven label' }),
          pricingH2: fields.text({ label: 'Tarieven koptekst' }),
          pricingDesc: fields.text({ label: 'Tarieven beschrijving', multiline: true }),
          pricingHeaders: fields.array(fields.text({ label: 'Kolomkop' }), { label: 'Tabelkopteksten (2)', itemLabel: (p) => String(p.value) }),
          pricingRows: fields.array(
            fields.object({ treatment: fields.text({ label: 'Behandeling' }), price: fields.text({ label: 'Prijs' }) }),
            { label: 'Tariefregels', itemLabel: (p) => p.fields.treatment.value }
          ),
          paymentNote: fields.text({ label: 'Betalingsnoot', multiline: true }),
          insuranceH3: fields.text({ label: 'Verzekering koptekst' }),
          insuranceP1: fields.text({ label: 'Verzekering paragraaf 1', multiline: true }),
          insuranceP2: fields.text({ label: 'Verzekering paragraaf 2', multiline: true }),
          insuranceLinkPre: fields.text({ label: 'Verzekering link prefix' }),
          insuranceLink: fields.text({ label: 'Verzekering link tekst' }),
          ctaH2: fields.text({ label: 'CTA koptekst' }),
          ctaP: fields.text({ label: 'CTA paragraaf', multiline: true }),
          ctaBook: fields.text({ label: 'CTA boek knop' }),
          ctaCall: fields.text({ label: 'CTA bel knop' }),
          aboutLabel: fields.text({ label: 'Over ons label' }),
          aboutH2: fields.text({ label: 'Over ons koptekst' }),
          aboutSubtitle: fields.text({ label: 'Over ons subtitel' }),
          aboutP1: fields.text({ label: 'Over ons paragraaf 1', multiline: true }),
          aboutP2: fields.text({ label: 'Over ons paragraaf 2', multiline: true }),
          aboutStats: fields.array(
            fields.object({ value: fields.text({ label: 'Waarde' }), label: fields.text({ label: 'Label' }) }),
            { label: 'Stats (4)', itemLabel: (p) => p.fields.value.value }
          ),
          testimonialsLabel: fields.text({ label: 'Reviews label' }),
          testimonialsH2: fields.text({ label: 'Reviews koptekst' }),
          testimonials: fields.array(
            fields.object({ name: fields.text({ label: 'Naam' }), text: fields.text({ label: 'Review tekst', multiline: true }), rating: fields.integer({ label: 'Beoordeling (1-5)' }) }),
            { label: 'Reviews', itemLabel: (p) => p.fields.name.value }
          ),
          faqLabel: fields.text({ label: 'FAQ label' }),
          faqH2: fields.text({ label: 'FAQ koptekst' }),
          faqs: fields.array(
            fields.object({ q: fields.text({ label: 'Vraag' }), a: fields.text({ label: 'Antwoord', multiline: true }) }),
            { label: 'FAQ vragen', itemLabel: (p) => p.fields.q.value }
          ),
          bookingLabel: fields.text({ label: 'Afspraak label' }),
          bookingH2: fields.text({ label: 'Afspraak koptekst' }),
          bookingDesc: fields.text({ label: 'Afspraak beschrijving', multiline: true }),
          bookingInfo: fields.array(
            fields.object({ label: fields.text({ label: 'Label' }), value: fields.text({ label: 'Waarde' }) }),
            { label: 'Afspraak info', itemLabel: (p) => p.fields.label.value }
          ),
          aiFloat: fields.text({ label: 'AI knop (zwevend)' }),
          modalWhat: fields.text({ label: 'Modal "Wat is het?" label' }),
          modalHow: fields.text({ label: 'Modal "Hoe helpt chiropractie?" label' }),
          modalCta: fields.text({ label: 'Modal CTA — gebruik {title} als plaatshouder' }),
          modalBook: fields.text({ label: 'Modal afspraak knop' }),
          modalCall: fields.text({ label: 'Modal bel knop' }),
          footerTagline: fields.text({ label: 'Footer tagline', multiline: true }),
          footerQuickLinks: fields.text({ label: 'Footer "Snelle Links" koptekst' }),
          footerQuickLinksItems: fields.array(
            fields.object({ anchor: fields.text({ label: 'Anker (bijv. services)' }), label: fields.text({ label: 'Linktekst' }) }),
            { label: 'Snelle links', itemLabel: (p) => p.fields.label.value }
          ),
          footerNewPatient: fields.text({ label: 'Footer "Nieuwe Patiënt" koptekst' }),
          footerNewPatientItems: fields.array(
            fields.object({ href: fields.text({ label: 'Pad (bijv. /patient-forms)' }), label: fields.text({ label: 'Linktekst' }) }),
            { label: 'Nieuwe patiënt links', itemLabel: (p) => p.fields.label.value }
          ),
          footerContact: fields.text({ label: 'Footer "Contact" koptekst' }),
          footerHours: fields.array(fields.text({ label: 'Openingstijden regel' }), { label: 'Openingstijden (2 regels)', itemLabel: (p) => String(p.value) }),
          footerCopy: fields.text({ label: 'Copyright tekst' }),
          footerLegal: fields.text({ label: 'Privacy / Juridische tekst' }),
        }, { label: 'Nederlands (NL)' }),
      },
    }),

    footer: singleton({
      label: 'Footer',
      path: 'content/footer',
      format: { data: 'json' },
      schema: {
        en: fields.object({
          tagline: fields.text({ label: 'Tagline', multiline: true }),
          treatmentLabel: fields.text({ label: '"Treatment" column label' }),
          infoLabel: fields.text({ label: '"Information" column label' }),
          contactLabel: fields.text({ label: '"Contact" column label' }),
          hours1: fields.text({ label: 'Opening hours line 1' }),
          hours2: fields.text({ label: 'Opening hours line 2' }),
          rights: fields.text({ label: 'Copyright text' }),
          legal: fields.text({ label: 'Privacy / Terms text' }),
        }, { label: 'English (EN)' }),
        nl: fields.object({
          tagline: fields.text({ label: 'Tagline', multiline: true }),
          treatmentLabel: fields.text({ label: '"Behandeling" kolom label' }),
          infoLabel: fields.text({ label: '"Informatie" kolom label' }),
          contactLabel: fields.text({ label: '"Contact" kolom label' }),
          hours1: fields.text({ label: 'Openingstijden regel 1' }),
          hours2: fields.text({ label: 'Openingstijden regel 2' }),
          rights: fields.text({ label: 'Copyright tekst' }),
          legal: fields.text({ label: 'Privacy / Voorwaarden tekst' }),
        }, { label: 'Nederlands (NL)' }),
      },
    }),
  },
});
