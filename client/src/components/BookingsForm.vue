<template lang="html">
  <form id = "bookings-form" class="" v-on:submit="addBooking" method="post">
    <h2>Add a Booking</h2>
    <div class="formWrap">
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="name" required/>
    </div>
    <div class="formWrap">
      <label for="email">E-Mail:</label>
      <input type="text" id="email" v-model="email" required/>
    </div>
    <input type="submit" id="save" value="Make Booking"/>


  </form>
</template>

<script>
import {eventBus} from '../main.js'
import BookingService from '../services/BookingService.js'

export default {
  name:'bookings-form',
  data() {
    return {
      name: '',
      email: '',
      checkedIn: false

    }
  },
  methods:{
    addBooking(event){
      event.preventDefault()
      const booking = {
        name: this.name,
        email: this.email,
        checkedIn: this.checkedIn
      }
      BookingService.postBooking(booking)
      .then(res => eventBus.$emit('booking-added',res))
    }
  }
}
</script>

<style lang="css" scoped>
</style>
