<template>
  <div class="topbar">
      <b-navbar toggleable="lg" type="dark" class="background" variant="info">
        <b-navbar-brand>
          <router-link tag="div" :to="'./'">
            <img src="./../../../src/logo/logo.png" class="d-inline-block align-top" style="max-width:35px" />
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
              <router-link tag="div" :to="'./Committee'">Committee</router-link>
            </b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav class="m-auto">
            <b-nav-item-dropdown text="Program" left>
              <b-dropdown-item>
                <router-link tag="div" :to="'./Program'">Program at a Glance</router-link>
              </b-dropdown-item>
              <b-dropdown-item>
                <router-link tag="div" :to="'./Plenary'">Plenary Speakers</router-link>
              </b-dropdown-item>
              <b-dropdown-item>
                <router-link tag="div" :to="'./Keynote'">Keynote Speakers</router-link>
              </b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
          <b-navbar-nav class="m-auto">
            <b-nav-item>
              <router-link tag="div" :to="'./CallForPapers'">Call for Papers</router-link>
            </b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav class="m-auto">
            <b-nav-item-dropdown text="Submission" left>
              <b-dropdown-item>
                <router-link tag="div" :to="'./InitialSubmission'">Initial Submission</router-link>
              </b-dropdown-item>
              <b-dropdown-item>
                <router-link tag="div" :to="'./FinalSubmission'">Final Submission</router-link>
              </b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
          <b-navbar-nav class="m-auto">
            <b-nav-item>
              <router-link tag="div" :to="'./Registration'">Registration</router-link>
            </b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav class="m-auto">
            <b-nav-item>
              <router-link tag="div" :to="'./history'">History</router-link>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import "./../../../src/scss/_variables.scss";
.topbar {
  position: sticky;
  top: 0;
  z-index: 999;

}
</style>