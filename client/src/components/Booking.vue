<template lang="html">
  <div class="booking">
    <h2>{{booking.name}}</h2>
    <p>E-mail:{{booking.email}}</p>
    <p>Checked in status:{{booking.checkedIn}}</p>
    <button type="button" v-on:click="deleteBooking">Cancel Booking</button>
  </div>
</template>

<script>
import {eventBus} from '../main.js'
import BookingService from '../services/BookingService.js'

export default {
  name:'booking',
  props:['booking'],
  methods:{
    deleteBooking(){
      BookingService.deleteBooking(this.booking._id)
      .then(() => eventBus.$emit('booking-deleted',this.booking._id))
    }
  }
}
</script>

<style lang="css" scoped>
</style>
