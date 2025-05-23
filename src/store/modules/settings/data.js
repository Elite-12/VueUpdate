import primaryTheme from '@/themes/primaryTheme'
import dangerTheme from '@/themes/dangerTheme'
import warningTheme from '@/themes/warningTheme'
import infoTheme from '@/themes/infoTheme'
import accentTheme from '@/themes/accentTheme'
import successTheme from '@/themes/successTheme'

export const STAGING_ENDPOINT = 'https://dev.jufrah.com/admin/'
export const PROD_ENDPOINT = 'https://jufrah.com/admin/'
export const PROD_HOST = 'aman.jufrah.com'

export const isProduction = window.location.host === PROD_HOST

// languages
export const languages = [
  {
    name: 'English',
    icon: 'en',
    locale: 'en',
  },
  {
    name: 'French',
    icon: 'fr',
    locale: 'fr',
  },
  {
    name: 'Hebrew',
    icon: 'he',
    locale: 'he',
  },
  {
    name: 'Russian',
    icon: 'ru',
    locale: 'ru',
  },
  {
    name: 'Arabic',
    icon: 'ar',
    locale: 'ar',
  },
  {
    name: 'Chinese',
    icon: 'cn',
    locale: 'cn',
  },
  {
    name: 'German',
    icon: 'ge',
    locale: 'ge',
  },
  {
    name: 'Spanish',
    icon: 'es',
    locale: 'sp',
  },
  {
    name: 'Japanese',
    icon: 'ja',
    locale: 'ja',
  },
  {
    name: 'Korean',
    icon: 'ko',
    locale: 'ko',
  },
  {
    name: 'Italian',
    icon: 'it',
    locale: 'it',
  },
  {
    name: 'Hungarian',
    icon: 'hu',
    locale: 'hu',
  },
]
// sidebar background images
export const sidebarBackgroundImages = [
  {
    id: 1,
    url: '/static/img/sidebar-1.jpg',
  },
  {
    id: 2,
    url: '/static/img/sidebar-2.jpg',
  },
  {
    id: 3,
    url: '/static/img/sidebar-3.jpg',
  },
  {
    id: 4,
    url: '/static/img/sidebar-4.jpg',
  },
]

// sidebar filters
export const sidebarFilters = [
  {
    id: 1,
    class: 'sidebar-overlay-dark',
    name: 'message.dark',
  },
  {
    id: 2,
    class: 'sidebar-overlay-light',
    name: 'message.light',
  },
  {
    id: 3,
    class: 'sidebar-overlay-pink',
    name: 'message.danger',
  },
  {
    id: 4,
    class: 'sidebar-overlay-primary',
    name: 'message.primary',
  },
  {
    id: 5,
    class: 'sidebar-overlay-warning',
    name: 'message.warning',
  },
  {
    id: 6,
    class: 'sidebar-overlay-success',
    name: 'message.success',
  },
  {
    id: 7,
    class: 'sidebar-overlay-purple',
    name: 'message.info',
  },
]

// router animations
export const routerAnimations = [
  'slideInUp',
  'fadeIn',
  'slideInRight',
  'bounce',
  'lightSpeedIn',
  'pulse',
]

// themes
export const themes = [
  {
    id: 1,
    bgColor: 'bg-primary',
    theme: primaryTheme,
  },
  {
    id: 2,
    bgColor: 'bg-warning',
    theme: warningTheme,
  },
  {
    id: 3,
    bgColor: 'bg-success',
    theme: successTheme,
  },
  {
    id: 4,
    bgColor: 'bg-danger',
    theme: dangerTheme,
  },
  {
    id: 5,
    bgColor: 'bg-info',
    theme: infoTheme,
  },
  {
    id: 6,
    bgColor: 'bg-secondary',
    theme: accentTheme,
  },
]

// header filter
export const headerFilters = [
  {
    id: 1,
    class: 'primary',
  },
  {
    id: 2,
    class: 'light',
  },
  {
    id: 3,
    class: 'warning',
  },
  {
    id: 4,
    class: 'success',
  },
  {
    id: 5,
    class: 'error',
  },
  {
    id: 6,
    class: 'info',
  },
]

const devCountries = [
  {
    id: 2,
    name: 'Saudi Arabia',
    icon: 'sa',
    conn: 'sa',
  },
  {
    id: 1,
    name: 'Egypt',
    icon: 'eg',
    conn: 'eg',
  },
  {
    id: 3,
    name: 'Kuwait',
    icon: 'kw',
    conn: 'kw',
  },
  {
    id: 4,
    name: 'UAE',
    icon: 'ae',
    conn: 'ae',
  },
  {
    id: 5,
    name: 'Qatar',
    icon: 'qa',
    conn: 'qa',
  },
  {
    id: 6,
    name: 'Oman',
    icon: 'om',
    conn: 'om',
  },
  {
    id: 7,
    name: 'Bahrain',
    icon: 'bh',
    conn: 'bh',
  },
]

const prodCountries = [
  {
    id: 2,
    name: 'Saudi Arabia',
    icon: 'sa',
    conn: 'sa',
  },
  {
    id: 1,
    name: 'Egypt',
    icon: 'eg',
    conn: 'eg',
  },
  {
    id: 3,
    name: 'Kuwait',
    icon: 'kw',
    conn: 'kw',
  },
  {
    id: 4,
    name: 'UAE',
    icon: 'ae',
    conn: 'ae',
  },
  {
    id: 5,
    name: 'Qatar',
    icon: 'qa',
    conn: 'qa',
  },
  {
    id: 6,
    name: 'Oman',
    icon: 'om',
    conn: 'om',
  },
  {
    id: 7,
    name: 'Bahrain',
    icon: 'bh',
    conn: 'bh',
  },
]
export const countries = isProduction ? prodCountries : devCountries
