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
        en_book: fields.text({ label: '[EN] Book button label' }),
        en_thisPage: fields.text({ label: '[EN] "This Page" label' }),
        en_conditionsLabel: fields.text({ label: '[EN] "Conditions" label' }),
        en_moreLabel: fields.text({ label: '[EN] "More" label' }),
        nl_book: fields.text({ label: '[NL] Afspraak knop label' }),
        nl_thisPage: fields.text({ label: '[NL] "Deze Pagina" label' }),
        nl_conditionsLabel: fields.text({ label: '[NL] "Klachten" label' }),
        nl_moreLabel: fields.text({ label: '[NL] "Meer" label' }),
      },
    }),

    footer: singleton({
      label: 'Footer',
      path: 'content/footer',
      format: { data: 'json' },
      schema: {
        en_tagline: fields.text({ label: '[EN] Tagline', multiline: true }),
        en_treatmentLabel: fields.text({ label: '[EN] "Treatment" column label' }),
        en_infoLabel: fields.text({ label: '[EN] "Information" column label' }),
        en_contactLabel: fields.text({ label: '[EN] "Contact" column label' }),
        en_hours1: fields.text({ label: '[EN] Opening hours line 1' }),
        en_hours2: fields.text({ label: '[EN] Opening hours line 2' }),
        en_rights: fields.text({ label: '[EN] Copyright text' }),
        en_legal: fields.text({ label: '[EN] Privacy / Terms text' }),

        nl_tagline: fields.text({ label: '[NL] Tagline', multiline: true }),
        nl_treatmentLabel: fields.text({ label: '[NL] "Behandeling" kolom label' }),
        nl_infoLabel: fields.text({ label: '[NL] "Informatie" kolom label' }),
        nl_contactLabel: fields.text({ label: '[NL] "Contact" kolom label' }),
        nl_hours1: fields.text({ label: '[NL] Openingstijden regel 1' }),
        nl_hours2: fields.text({ label: '[NL] Openingstijden regel 2' }),
        nl_rights: fields.text({ label: '[NL] Copyright tekst' }),
        nl_legal: fields.text({ label: '[NL] Privacy / Voorwaarden tekst' }),
      },
    }),
  },
});
