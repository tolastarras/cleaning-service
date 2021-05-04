<template>
  <v-toolbar
    flat
    :class="{ standard: !scrolled, sticky: scrolled }"
    class="white--text"
  >
    <v-layout row wrap>
      <v-toolbar-side-icon
        name="btn-menu"
        class="hidden-md-and-up white--text"
        @click.stop="closeDrawer"
      />
      <v-toolbar-title>
        <router-link :to="{ name: 'home' }" tag="button">
          <img width="180" height="50" :src="logo" :alt="businessName"/>
        </router-link>
      </v-toolbar-title>
      <v-spacer />
      <v-toolbar-items class="hidden-sm-and-down">
        <router-link
          v-for="item in menuItems"
          :key="item.title"
          :to="item.url"
          class="menuItem text-uppercase font-weight-bold"
          exact
        >
          {{ item.title }}
        </router-link>
      </v-toolbar-items>
    </v-layout>
  </v-toolbar>
</template>

<script>
export default {
  name: 'TopNavbar',
  props: {
    logo: {
      type: String,
      default: ''
    },
    scrolled: {
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
    }
  }
}
</script>

<style lang="scss" scoped>
.standard {
  background-color: rgba(0, 0 , 0, 0.2) !important;
  position: absolute;
  width: 100%;
  top: 0;
  right: 0;
  z-index: 2;
  padding-top: 1.2em;

  a.menuItem {
    font-size: $font-20 ;
  }
}

.sticky {
  position: fixed;
  background-color: rgba($color-10, 0.95) !important;
  z-index: 2;

  a.menuItem {
    font-size: $font-16;
    margin-top: 8px;
    height: 25px;
  }

  img {
    top: 1rem;
    height: 40px;
    width: 150px;
  }
}

.v-toolbar__items {
  margin-top: 5px;
  color: darken($color-02, 20);

  .active {
    color: $color-02 !important;
  }

  .menuItem {
    text-decoration: none;
    vertical-align: middle;
    display: inline-block;
    padding: 0 1.5em;
    border-right: 1px solid $color-08;
    height: 30px;

    &:last-child {
      border-right: none;
    }

    &:hover {
      color: $color-02 !important;
    }
  }
}
</style>
