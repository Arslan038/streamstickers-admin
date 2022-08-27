import { mdiCheckboxBlankCircleOutline } from '@mdi/js'

const themeConfig = {
  app: {
    name: '',
    logo: require('@/assets/images/Logo.png'),
    isDark: false,
    isRtl: false,
    contentLayoutNav: 'vertical', // vertical, horizontal
    routeTransition: 'scroll-x-transition', // https://vuetifyjs.com/en/styles/transitions/#api
    // ! `semi-dark` isn't available for horizontal nav menu
    skinVariant: 'default', // default, bordered, semi-dark
    contentWidth: 'boxed',
  },
  menu: {
    isMenuHidden: false,
    isVerticalNavMini: false,
    verticalMenuAccordion: true,
    groupChildIcon: mdiCheckboxBlankCircleOutline,
    horizontalNavMenuGroupOpenOnHover: true,
  },
  appBar: {
    /*
    ! In Content Layout Horizontal Nav type `hidden` value won't work
    ! In Content Layout Horizontal Nav type value of `type` will affect both Appbar and Horizontal Navigation Menu
    */
    type: 'fixed', // fixed, static, hidden
    isBlurred: true,
  },
  footer: {
    type: 'static', // fixed, static, hidden
  },
  themes: {
    light: {
      primary: '#9155FD',
      accent: '#0d6efd',
      secondary: '#6740CD',
      success: '#56CA00',
      info: '#5AB2FF',
      warning: '#FFB400',
      error: '#FF4C51',
      white: '#FFFFFF',
      purple: '#2a1953',
      grey: '#6f56b0',
      pink: '#e7318d',
      red: '#E6346F',
      textColor: '#000000',
    },
    dark: {
      primary: '#9155FD',
      accent: '#0d6efd',
      secondary: '#6740CD',
      success: '#56CA00',
      info: '#5AB2FF',
      warning: '#FFB400',
      error: '#FF4C51',
      white: '#FFFFFF',
      purple: '#2a1953',
      grey: '#6f56b0',
      pink: '#e7318d',
      red: '#E6346F',
      textColor: '#FFFFFF',
    },
  },
}

export default themeConfig
