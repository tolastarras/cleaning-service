<template>
  <v-navigation-drawer dark app temporary :value="showDrawer">
    <v-list class="pt-3">
      <v-list-tile avatar tag="div">
        <v-list-tile-content>
          <v-list-tile-title>
            <router-link to="/">
              <img class="drawer" :src="logo" :alt="businessName" />
            </router-link>
          </v-list-tile-title>
        </v-list-tile-content>
        <v-list-tile-action>
          <v-btn icon @click.stop="closeDrawer">
            <v-icon>chevron_left</v-icon>
          </v-btn>
        </v-list-tile-action>
      </v-list-tile>
    </v-list>
    <v-list dense>
      <v-divider light />
      <v-list-tile
        v-for="(item, i) in menuItems"
        :key="i" router :to="item.url"
        class="menu-items"
        :class="activeItem(item)"
      >
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'LeftNavbar',
  props: {
    logo: {
      type: String,
      default: ''
    },
    showDrawer: {
      type: Boolean,
      default: false
    },
    businessName: {
      type: String,
      default: ''
    },
    menuItems: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    closeDrawer () {
      this.$emit('close-drawer')
    },
    activeItem (item) {
      const page = this.$root.getPage(this.$route.path)
      const currentPage = this.$root.getPage(item.url)

      return currentPage === page ? 'active' : ''
    }
  }
}
</script>

<style lang="scss" scoped>
.v-navigation-drawer {
  .menu-items {
    padding-top: 2rem;

    &:first-of-type {
      margin-top: 1rem;
    }
  }

  .v-list__tile__action {
    .v-icon {
      font-size: 2.5rem;
    }
  }

  .v-list__tile__content {
    font-size: $font-28;
  }
}

@media (max-width: 1024px) {
  .v-list__tile--avatar .v-list__tile__title {
    height: 8rem;
  }

  .v-navigation-drawer {
    padding-left: 0.5rem;

    img {
      width: 180px;
      height: 50px;
    }
  }
}

@media (max-width: 425px) {
  .v-navigation-drawer {
    img {
      width: 120px;
      height: 40px;
    }

    .menu-items {
      padding-top: 0.5rem;
    }

    .v-list__tile__action .v-icon {
      font-size: $font-32;
    }

    .v-list__tile__content {
      font-size: $font-20;
    }
  }
}
</style>
