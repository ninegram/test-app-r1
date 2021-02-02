<template>
  <b-card-text class="tab-card">
    <h3 class="m-5 text-muted">
      <strong>ENNEAGRAM</strong>HERA
    </h3>
    <h4 style="margin-top: 50px;">
      두려움과 심장으로 보는<br/>에니어그램 테스트
    </h4>
    
    <b-form style="margin-top: 100px;" @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label=""
        label-for="input-1"
        style="max-width: 400px;margin: 0 auto;"
        description=""
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          size="lg"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-checkbox
          class="mt-3"
          id="checkbox-1"
          v-model="form.status"
          name="checkbox-1"
          value="accepted"
          unchecked-value="not_accepted"
        >
          I accept the terms and use
        </b-form-checkbox>
    </b-form>
    
    <b-button class="m-5" size="lg" type="submit" variant="primary">테스트 시작하기</b-button>
    
  </b-card-text>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: '',
        name: '',
        food: null,
        checked: [],
        status: 'not_accepted',
      },
      foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
      show: true
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onReset(event) {
      event.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.name = ''
      this.form.food = null
      this.form.checked = []
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>

<style scoped lang="scss">
.tab-card {
  text-align: center;
}
</style>