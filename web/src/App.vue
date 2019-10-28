<template>
  <div id="app">
    <div class="topbar">
      <b-navbar toggleable="lg" type="dark" class="background" variant="info">
        <b-navbar-brand href="/">
          <img src="./assets/logo.png" class="d-inline-block align-top" style="max-width:35px" />
        </b-navbar-brand>
        <span class="text-white fs-xxl">IEEE RCAR 2020</span>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <!-- collapse -->
        <b-collapse id="nav-collapse" is-nav class="fs-xl">
          <b-navbar-nav class="m-auto">
            <b-nav-item href="/">Home</b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav class="m-auto">
            <b-nav-item href="#">Committee</b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav class="m-auto">
            <b-nav-item-dropdown text="Program" left>
              <b-dropdown-item href="#">Program at a Glance</b-dropdown-item>
              <b-dropdown-item href="#">Invited Speakers</b-dropdown-item>
              <b-dropdown-item href="#">Tutorials & Workshops</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
          <b-navbar-nav class="m-auto">
            <b-nav-item href="#">Call for Papers</b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav class="m-auto">
            <b-nav-item-dropdown text="Submission" left>
              <b-dropdown-item href="#">Final Submission</b-dropdown-item>
              <b-dropdown-item href="#">Initial Submission</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
          <b-navbar-nav class="m-auto">
            <b-nav-item href="#">Registration</b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav class="m-auto">
            <b-nav-item-dropdown text="Venue" left>
              <b-dropdown-item href="#">Conference Venue</b-dropdown-item>
              <b-dropdown-item href="#">Accommodation</b-dropdown-item>
              <b-dropdown-item href="#">About Asahikawa</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
          <b-navbar-nav class="m-auto">
            <b-nav-item href="/history">History</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
      
    </div>
    <div class="text-white fs-xl bg-info text-center pt-1" style="margin:auto; height:25px">August 2-6, 2020, Asahikawa, Japan</div>
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
