<template>
  <div id="app">
    <div class="topbar">
      <b-navbar toggleable="lg" type="dark" class="background" variant="info">
        <b-navbar-brand>
          <router-link tag="div" :to="'./'">
            <img src="./assets/logo.png" class="d-inline-block align-top" style="max-width:35px" />
          </router-link>
        </b-navbar-brand>
        <span class="text-white fs-xxl">IEEE RCAR 2020</span>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <!-- collapse -->
        <b-collapse id="nav-collapse" is-nav class="fs-xl">
          <b-navbar-nav class="m-auto">
            <b-nav-item>
              <router-link tag="div" :to="'./'">Home</router-link>
            </b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav class="m-auto">
            <b-nav-item>
              <router-link tag="div" :to="'#'">Committee</router-link>
            </b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav class="m-auto">
            <b-nav-item-dropdown text="Program" left>
              <b-dropdown-item>
                <router-link tag="div" :to="'#'">Program at a Glance</router-link>
              </b-dropdown-item>
              <b-dropdown-item>
                <router-link tag="div" :to="'#'">Invited Speakers</router-link>
              </b-dropdown-item>
              <b-dropdown-item>
                <router-link tag="div" :to="'#'">Tutorials & Workshops</router-link>
              </b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
          <b-navbar-nav class="m-auto">
            <b-nav-item>
              <router-link tag="div" :to="'#'">Call for Papers</router-link>
            </b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav class="m-auto">
            <b-nav-item-dropdown text="Submission" left>
              <b-dropdown-item>
                <router-link tag="div" :to="'#'">Final Submission</router-link>
              </b-dropdown-item>
              <b-dropdown-item>
                <router-link tag="div" :to="'#'">Initial Submission</router-link>
              </b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
          <b-navbar-nav class="m-auto">
            <b-nav-item>
              <router-link tag="div" :to="'#'">Registration</router-link>
            </b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav class="m-auto">
            <b-nav-item-dropdown text="Venue" left>
              <b-dropdown-item>
                <router-link tag="div" :to="'#'">Conference Venue</router-link>
              </b-dropdown-item>
              <b-dropdown-item>
                <router-link tag="div" :to="'#'">Accommodation</router-link>
              </b-dropdown-item>
              <b-dropdown-item>
                <router-link tag="div" :to="'#'">About Asahikawa</router-link>
              </b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
          <b-navbar-nav class="m-auto">
            <b-nav-item>
              <router-link tag="div" :to="'./history'">History</router-link>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <div
      class="text-white fs-xl bg-info text-center pt-1"
      style="margin:auto; height:25px"
    >August 2-6, 2020, Asahikawa, Japan</div>
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "./assets/scss/_variables.scss";
.topbar {
  position: sticky;
  top: 0;
  z-index: 999;
  // .background {
  //   background-color: map-get($colors, "main-1");
  // }
}
</style>
