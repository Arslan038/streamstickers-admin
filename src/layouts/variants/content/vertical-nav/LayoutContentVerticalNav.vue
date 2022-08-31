<template>
  <layout-content-vertical-nav :nav-menu-items="navMenuItems">
    <slot></slot>

    <!-- Slot: Navbar -->
    <template #navbar="{ isVerticalNavMenuActive, toggleVerticalNavMenuActive }">
      <div
        class="navbar-content-container"
        :class="{'expanded-search': shallShowFullSearch}"
      >
        <v-row
          align="center"
        >
          <v-col
            cols="10"
            md="6"
            lg="7"
            class="d-flex"
          >
            <v-icon
              v-if="$vuetify.breakpoint.mdAndDown"
              class="me-3"
              @click="toggleVerticalNavMenuActive"
            >
              {{ icons.mdiMenu }}
            </v-icon>
            <div class="news d-none d-md-flex align-center">
              <img
                src="@/assets/images/notification_bell.png"
                alt="Bell"
                class="mr-2"
              >
              <strong class="text-sm">News: </strong>
              <span class="pl-2 fs--14 fw--500 text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacus lectus.</span>
            </div>
          </v-col>
          <v-col
            cols="5"
            md="2"
            class="d-none d-md-block"
          >
            <v-btn
              color="secondary"
              outlined
              depressed
              block
            >
              <span>Report Bugs</span>
            </v-btn>
          </v-col>
          <v-col
            cols="5"
            md="2"
            class="d-none d-md-block"
          >
            <v-btn
              color="secondary"
              outlined
              depressed
              block
            >
              <span>Share Feedback</span>
            </v-btn>
          </v-col>
          <v-col
            cols="2"
            md="2"
            lg="1"
            class="text-right"
          >
            <app-bar-user-menu></app-bar-user-menu>
          </v-col>
        </v-row>
        <!-- Left Content: Search -->
        <!-- <div class="d-flex align-center left-row">
          <v-icon
            v-if="$vuetify.breakpoint.mdAndDown"
            class="me-3"
            @click="toggleVerticalNavMenuActive"
          >
            {{ icons.mdiMenu }}
          </v-icon>
          <div class="news d-flex align-center">
            <img
              src="@/assets/images/notification_bell.png"
              alt="Bell"
              class="mr-2"
            >
            <strong class="text-sm">News: </strong>
            <span class="pl-2 fs--14 fw--500 d-none d-xl-block">{{ news.substr(0,80) }}</span>
            <span class="pl-2 fs--14 fw--500 d-none d-lg-block">{{ news.substr(0,50) }}</span>
            <span class="pl-2 fs--14 fw--500 d-none d-md-block d-lg-none">{{ news.substr(0,40) }}</span>
            <span class="pl-2 fs--14 fw--500 d-block d-md-none">{{ news.substr(0,30) }}</span>
          </div>
          <app-bar-search
            :shall-show-full-search.sync="shallShowFullSearch"
            :data="appBarSearchData"
            :filter="searchFilterFunc"
            :search-query.sync="appBarSearchQuery"
            @update:shallShowFullSearch="handleShallShowFullSearchUpdate(isVerticalNavMenuActive, toggleVerticalNavMenuActive)"
          ></app-bar-search>
        </div> -->

        <!-- Right Content: I18n, Light/Dark, Notification & User Dropdown -->
        <!-- <div class="d-flex align-center right-row">
          <app-bar-i18n></app-bar-i18n>
          <app-bar-theme-switcher class="mx-4"></app-bar-theme-switcher>
          <app-bar-notification></app-bar-notification>
          <v-btn
            color="secondary"
            outlined
            depressed
            class="px-md-10"
          >
            <span>Report Bugs</span>
          </v-btn>
          <v-btn
            color="secondary"
            class="mx-4"
            outlined
            depressed
          >
            <span>Share Feedback</span>
          </v-btn>
          <app-bar-user-menu></app-bar-user-menu>
        </div> -->
      </div>
    </template>

    <!-- Slot: Footer -->
    <template #footer>
      <div class="d-flex justify-space-between">
        <span>COPYRIGHT &copy; {{ new Date().getFullYear() }} <a
          href="https://themeselection.com"
          class="text-decoration-none"
        >ThemeSelection</a><span class="d-none d-md-inline">, All rights Reserved</span></span>
        <div class="align-center d-none d-md-flex">
          <span>Hand-crafted &amp; Made with</span>
          <v-icon
            color="error"
            class="ms-2"
          >
            {{ icons.mdiHeartOutline }}
          </v-icon>
        </div>
      </div>
    </template>

    <template #v-app-content>
      <app-customizer class="d-none d-md-block"></app-customizer>
    </template>
  </layout-content-vertical-nav>
</template>

<script>
import AppCustomizer from '@core/layouts/components/app-customizer/AppCustomizer.vue'

// App Bar Components
// import AppBarSearch from '@core/layouts/components/app-bar/AppBarSearch.vue'
// import AppBarI18n from '@core/layouts/components/app-bar/AppBarI18n.vue'
// import AppBarThemeSwitcher from '@core/layouts/components/app-bar/AppBarThemeSwitcher.vue'
// import AppBarNotification from '@core/layouts/components/app-bar/AppBarNotification.vue'
import AppBarUserMenu from '@core/layouts/components/app-bar/AppBarUserMenu.vue'
import { mdiHeartOutline, mdiMenu } from '@mdi/js'

import { getVuetify } from '@core/utils'

// Search Data
// import appBarSearchData from '@/assets/app-bar-search-data'
import { ref, watch } from '@vue/composition-api'

import LayoutContentVerticalNav from '@/@core/layouts/variants/content/vertical-nav/LayoutContentVerticalNav.vue'
import navMenuItems from '@/navigation/vertical'

export default {
  components: {
    LayoutContentVerticalNav,
    AppCustomizer,

    // App Bar Components
    AppBarUserMenu,

    // AppBarSearch,
    // AppBarI18n,
    // AppBarThemeSwitcher,
    // AppBarNotification,
  },
  setup() {
    const $vuetify = getVuetify()

    const news = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacus lectus.'

    // Search
    const appBarSearchQuery = ref('')
    const shallShowFullSearch = ref(false)
    const maxItemsInGroup = 5
    const totalItemsInGroup = ref({
      pages: 0,
      files: 0,
      contacts: 0,
    })
    watch(appBarSearchQuery, () => {
      totalItemsInGroup.value = {
        pages: 0,
        files: 0,
        contacts: 0,
      }
    })
    const searchFilterFunc = (item, queryText, itemText) => {
      if (item.header || item.divider) return true

      const itemGroup = (() => {
        if (item.to !== undefined) return 'pages'
        if (item.size !== undefined) return 'files'
        if (item.email !== undefined) return 'contacts'

        return null
      })()

      const isMatched = itemText.toLocaleLowerCase().indexOf(queryText.toLocaleLowerCase()) > -1

      if (isMatched) {
        if (itemGroup === 'pages') totalItemsInGroup.value.pages += 1
        else if (itemGroup === 'files') totalItemsInGroup.value.files += 1
        else if (itemGroup === 'contacts') totalItemsInGroup.value.contacts += 1
      }

      return appBarSearchQuery.value && isMatched && totalItemsInGroup.value[itemGroup] <= maxItemsInGroup
    }

    // ? Handles case where in <lg vertical nav menu is open and search is triggered using hotkey then searchbox is hidden behind vertical nav menu overlaty
    const handleShallShowFullSearchUpdate = (isVerticalNavMenuActive, toggleVerticalNavMenuActive) => {
      if ($vuetify.breakpoint.mdAndDown && isVerticalNavMenuActive) {
        toggleVerticalNavMenuActive()
      }
    }

    return {
      navMenuItems,
      handleShallShowFullSearchUpdate,
      news,

      // Search
      appBarSearchQuery,
      shallShowFullSearch,
      searchFilterFunc,

      icons: {
        mdiMenu,
        mdiHeartOutline,
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.navbar-content-container {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  position: relative;
}

// ? Handle bg of autocomplete for blured appBar
.v-app-bar.bg-blur {
  .expanded-search {
    ::v-deep .app-bar-autocomplete-box div[role='combobox'] {
      background-color: transparent;
    }

    > .d-flex > button.v-icon {
      display: none;
    }

    // ===

    & > .right-row {
      visibility: hidden;
      opacity: 0;
    }

    ::v-deep .app-bar-search-toggler {
      visibility: hidden;
    }
  }
}

.left-row {
  width: 60%;
  margin-right: 20px;
}

.news {
  width: 100%;
  background: -webkit-linear-gradient(to right, #ff228d, #c64ba9, #7a71cc);
  background: -o-gradient(to right, #ff228d, #c64ba9, #7a71cc);
  background: -ms-gradient(to right, #ff228d, #c64ba9, #7a71cc);
  background: -moz-gradient(to right, #ff228d, #c64ba9, #7a71cc);
  background: linear-gradient(to right, #ff228d, #c64ba9, #7a71cc);
  padding: 8px 10px;
  border-radius: 5px;
}
</style>
