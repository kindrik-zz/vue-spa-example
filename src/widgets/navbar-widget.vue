<template>
  <b-navbar toggleable="md" type="dark" variant="dark">

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand href="#">NavBar Example</b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">

      <b-navbar-nav>
        <b-nav-item><router-link v-bind:to="'/'">Homepage</router-link></b-nav-item>
        <b-nav-item><router-link v-bind:to="'/jumbotronPage'">Jumbotron</router-link></b-nav-item>
        <b-nav-item><router-link v-bind:to="'/carouselPage'">Carousel</router-link></b-nav-item>
        <b-nav-item><router-link v-bind:to="'/cardsPage'">Cards</router-link></b-nav-item>
        <b-nav-item><router-link v-bind:to="'/formsPage'">Forms</router-link></b-nav-item>
        <b-nav-item><router-link v-bind:to="'/tablesPage'">Tables</router-link></b-nav-item>
        <b-nav-item><router-link v-bind:to="'/accordianPage'">Accordian</router-link></b-nav-item>
        <b-nav-item><router-link v-bind:to="'/listsPage'">Lists</router-link></b-nav-item>
        <b-nav-item><router-link v-bind:to="'/paginationPage'">Pagination</router-link></b-nav-item>
        <b-nav-item><router-link v-bind:to="'/progressPage'">Progress</router-link></b-nav-item>

      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
</template>

<!-- navbar-1.vue -->
