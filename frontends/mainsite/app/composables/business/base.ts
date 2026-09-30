import type { Nullable } from './utils'
import type { BusinessDetailsKeys, BusinessDetailsKeyValue, BusinessDetails, SocialPlatform, Social } from '.'

export interface ExtendedBusinessDetails extends BusinessDetails {
  jobTitle: string
}

export const businessDetails: ExtendedBusinessDetails = {
  name: 'John PM - Consulting',
  jobTitle: 'Growth Expert & Freelance Web Developer',
  legalName: 'John PM - Consulting',
  alternateName: [
    'Gency313',
    'John PM - Freelance'
],
  siren: '',
  siret: '',
  numberoTVA: '',
  creationDate: '2024-1-1',
  description: 'Expert en growth marketing et développement web freelance, spécialisé dans la création de sites web performants et optimisés pour le référencement naturel. Avec une expertise approfondie en SEO, SEA, et développement fullstack, je propose des solutions sur mesure pour aider les entreprises à atteindre leurs objectifs de croissance en ligne.',
  logo: '/logos/gency313-white.png',
  sameAs: [
    'https://www.linkedin.com/in/jpendenque/'
],
  image: [

],
  rcs: '',
  address: {
    street: '177 allée Clémentine Deman , 59000 Lille',
    postalCode: '59000',
    city: 'Lille',
    lat: 50.626999404132064,
    lng: 3.0499777837365993
  },
  priceRange: '$$',
  foundingDate: '2024-12-14',
  foundingLocation: 'Lille, France',
  founderImage: null,
  shareCapital: null,
  founder: 'John Pendque',
  founderDescription: 'John Pendenque est un expert en growth marketing et développement web freelance, spécialisé dans la création de sites web performants et optimisés pour le référencement naturel. Avec une expertise approfondie en SEO, SEA, et développement fullstack, il propose des solutions sur mesure pour aider les entreprises à atteindre leurs objectifs de croissance en ligne.',
  founderKnowsAbout: [
    'Nuxt 4',
    'SEO',
    'SEA',
    'Développement Web Fullstack',
    'Docker',
    'Growth Marketing',
    'Analytics et tracking'
],
  webContentManager: 'John Pendque',
  publishingDirector: 'John Pendque',
  editorInChief: 'John Pendque',
  websiteProvider: {
    legalName: 'Gency313',
    url: 'https://johnpm-consulting.fr'
  },
  cloudProvider: {
    legalName: 'SAS OVH',
    url: 'http://www.ovhcloud.com/fr/',
    description: 'OVH SAS est une filiale de la société OVH Groupe SA, société immatriculée au RCS de Lille',
    address: '2 rue Kellermann - 59100 Roubaix - France',
    rcs: '424 761 419 00045'
  },
  contact: {
    telephone: '+33 07 86 20 94 59',
    email: 'pendenquejohn@gmail.com',
    address: '10 Rue Meurein, 59000 Lille'
  },
  socials: {
    instagram: {
      url: 'https://www.instagram.com/iamjohnsson',
      handle: '@iamjohnsson'
    },
    linkedin: {
      url: 'https://www.linkedin.com/in/jpendenque/',
      handle: 'jpendenque'
    },
    github: {
      url: 'https://github.com/Zadigo',
      handle: 'Zadigo'
    }
  }
}

/**
 * A composable to access business details throughout the application. It provides a `get` function
 * to retrieve specific details by key, ensuring type safety and consistency across the app.
 */
export function useBusinessDetails() {
  function get<K extends BusinessDetailsKeys>(key: K): BusinessDetailsKeyValue[K] {
    return businessDetails[key]
  }

  const reactiveGet = reactify(get)
  const activeSocials = computed(() => Object.keys(get('socials')) as SocialPlatform[])

  function getSocial(platform: SocialPlatform): Social | null {
    const socials = get('socials')
    return socials[platform] || null
  }

  function getSocialIcon(platform: SocialPlatform): string {
    const icons: Record<SocialPlatform, string> = {
      instagram: 'lucide:instagram',
      facebook: 'lucide:facebook',
      pinterest: 'fa7-brands:pinterest',
      twitter: 'lucide:twitter',
      linkedin: 'lucide:linkedin',
      tiktok: 'lucide:tiktok',
      youtube: 'lucide:youtube',
      github: 'lucide:github',
      kaggle: 'lucide:kaggle'
    }
    return icons[platform]
  }

  const address = computed(() => {
    const address = get('address')
    return `${address.street}, ${address.postalCode} ${address.city}`
  })

  const geoLocation = computed(() => {
    const address = get('address')
    if (isDefined(address.lat) && isDefined(address.lng)) {
      return `${address.lat.toString()},${address.lng.toString()}`
    } else {
      return '0,0'
    }
  })

  function suffixLegalName(name: Nullable<string>, separator: string = ' - '): string {
    const legalName = get('legalName')
    return `${name ?? ''}${separator}${legalName}`
  }

  function _buildPath(path: Nullable<string>): Nullable<string> {
    if (!isDefined(path)) {
      return null
    } else {
      try {
        const rootUrl = useRuntimeConfig().public.siteUrl as string
        return new URL(path, rootUrl).toString()
      } catch (error) {
        console.error('Error building path (siteUrl is not present in runtime config):', error)
        return null
      }
    }
  }

  const founderImage = computed(() => {
    return _buildPath(get('founderImage'))
  })

  const organizationLogo = computed(() => {
    return _buildPath(get('logo'))
  })

  const organizationImages = computed(() => {
    return get('image').map((image: string) => _buildPath(image))
  })

  return {
    /**
     * The business details object containing all relevant information about the business,
     * including contact details, social media links, and more.
     */
    businessDetails,
    /**
     * A computed property that returns an array of active social media
     * platforms based on the provided socials in the business details.
     */
    activeSocials,
    /**
     * A computed property that returns the full address of the business
     * as a formatted string, combining the street, postal code, and city.
     */
    address,
    /**
     * A computed property that returns the geographical location of the business
     * in the format "latitude,longitude". If latitude or longitude is not defined.
     * @default
     * "0,0"
     */
    geoLocation,
    /**
     * A computed property that returns the full URL of the founder's 
     * image, constructed from the base site URL and the relative path provided in the business details.
     */
    founderImage,
    /**
     * A computed property that returns the full URL of the organization's logo,
     * constructed from the base site URL and the relative path provided in the business details.
     */
    organizationLogo,
    /**
     * A computed property that returns an array of full URLs for the organization's images,
     * constructed from the base site URL and the relative paths provided in the business details.
     */
    organizationImages,
    /**
     * A function that appends the legal name of the business to a given name,
     * separated by a specified separator (default is ' - ').
     */
    suffixLegalName,
    /**
     * A function to retrieve specific business details by key, ensuring type safety.
     * @param key - The key of the business detail to retrieve.
     */
    get,
    /**
     * A reactive version of the `get` function, useful for reactive contexts.
     * @param key - The key of the business detail to retrieve reactively.
     */
    reactiveGet,
    /**
     * A function to retrieve social media details for a specific platform.
     * @param platform - The social media platform to retrieve details for (e.g., 'instagram', 'facebook').
     */
    getSocial,
    /**
     * A function to retrieve the icon name for a specific social media platform.
     * @param platform - The social media platform to retrieve the icon for (e.g., 'instagram', 'facebook').
     */
    getSocialIcon
  }
}
