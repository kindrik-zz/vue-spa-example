<template>
  <b-form-group
      id="fieldset1"
      description="Let us know your name."
      label="Enter your name"
      label-for="input1"
      :invalid-feedback="invalidFeedback"
      :valid-feedback="validFeedback"
      :state="state"
  >
    <b-form-input id="input1" :state="state" v-model.trim="name"></b-form-input>
  </b-form-group>
</template>

<script>
export default {
  computed: {
    state () {
      return this.name.length >= 4 ? true : false
    },
    invalidFeedback () {
      if (this.name.length > 4) {
        return ''
      } else if (this.name.length > 0) {
        return 'Enter at least 4 characters'
      } else {
        return 'Please enter something'
      }
    },
    validFeedback () {
      return this.state === true ? 'Thank you' : ''
    }
  },
  data () {
    return {
      name: ''
    }
  }
}
</script>

<!-- form-group-1.vue -->
