<template>
  <nuxt-layout>
    <nuxt-page />

    <!-- <dev-only>
      <div class="fixed top-3/6 right-0 bg-primary-100/50 backdrop-blur-3xl backdrop-saturate-150 p-10 rounded-2xl z-50">
        showMobile: {{ showMobile }}
      </div>
    </dev-only> -->
  </nuxt-layout>
</template>

<script setup lang="ts">
const showMobile = useState('showMobileMenu', () => ref(false))

/**
 * General SEO Tags
 */

const { geoLocation, founderImage, organizationLogo, organizationImages, get } = useBusinessDetails()

useHead({
  meta: [
    {
      name: 'geo.region',
      content: 'FR-HDF'
    },
    {
      name: 'geo.placename',
      content: get('address').city
    },
    {
      name: 'geo.position',
      content: geoLocation.value
    },
    {
      name: 'ICBM',
      content: geoLocation.value
    }
  ]
})

useHead({
  // htmlAttrs: {
  //   lang: locale.value
  // },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.png'
    }
  ]
})

useSchemaOrg(
  [
    defineOrganization({
      '@type': 'Organization',
      'name': get('legalName'),
      'legalName': get('legalName'),
      'alternateName': 'Inéïah Beauté',
      'description': get('description'),
      'logo': organizationLogo.value,
      'email': get('contact').email,
      'telephone': get('contact').telephone,
      'sameAs': get('sameAs'),
      'image': organizationImages.value,
      'priceRange': '$$',
      'foundingDate': get('foundingDate'),
      'foundingLocation': {
        '@type': 'Place',
        'name': get('foundingLocation')
      },
      'founder': {
        '@type': 'Person',
        'name': get('founder'),
        'jobTitle': 'Founder & CEO',
        'description': get('founderDescription'),
        'image': founderImage.value,
        'url': null,
        'sameAs': get('sameAs'),
        'worksFor': {
          '@type': 'Organization',
          'name': get('legalName')
        }
      },
      'taxId': null,
      'vatId': null,
      'address': {
        streetAddress: get('address').street,
        addressLocality: get('address').city,
        postalCode: get('address').postalCode,
        addressCountry: 'FR'
      },
      'currenciesAccepted': 'EUR',
      'areaServed': {
        '@type': 'Place',
        'name': get('address').city,
        'sameAs': `https://fr.wikipedia.org/wiki/${get('address').city}`
      },
      'contactPoint': [
        {
          '@type': 'ContactPoint',
          'contactType': 'customer service',
          'telephone': get('contact').telephone,
          'email': get('contact').email,
          'availableLanguage': ['English', 'French']
        }
      ]
    })
  ]
)

/**
 * Href Lang
 */

// const head = useLocaleHead({
//   addDirAttribute: true,
//   addSeoAttributes: true
// })

// useHead({
//   htmlAttrs: { lang: head.value.htmlAttrs?.lang },
//   link: [...(head.value.link || [])],
//   meta: [...(head.value.meta || [])]
// })
</script>
