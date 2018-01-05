<template>
  <div>
    <b-form-checkbox v-model="striped">Striped</b-form-checkbox>
    <b-form-checkbox v-model="bordered">Bordered</b-form-checkbox>
    <b-form-checkbox v-model="outlined">Outlined</b-form-checkbox>
    <b-form-checkbox v-model="small">Small</b-form-checkbox>
    <b-form-checkbox v-model="hover">Hover</b-form-checkbox>
    <b-form-checkbox v-model="dark">Dark</b-form-checkbox>
    <b-form-checkbox v-model="fixed">Fixed</b-form-checkbox>
    <b-form-checkbox v-model="footClone">Foot Clone</b-form-checkbox>

    <b-table :striped="striped"
             :bordered="bordered"
             :outlined="outlined"
             :small="small"
             :hover="hover"
             :dark="dark"
             :fixed="fixed"
             :foot-clone="footClone"
             :items="items"
             :fields="fields">
    </b-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      fields: [ 'first_name', 'last_name', 'age' ],
      items: [
        { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
        { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
        { age: 89, first_name: 'Geneva', last_name: 'Wilson' }
      ],
      striped: false,
      bordered: false,
      outlined: false,
      small: false,
      hover: false,
      dark: false,
      fixed: false,
      footClone: false
    }
  }
}
</script>

<!-- table-bordered.vue -->
