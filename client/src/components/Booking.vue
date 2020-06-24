<template lang="html">
  <div class="booking">
    <h3 :class="checkedInClass">{{booking.name}}</h3>
    <p>Email: {{booking.email}}</p>
    <button v-on:click="toggleCheckedIn">{{ checkInButtonText }}</button>
    <button type="button" v-on:click="deleteBooking">Cancel Booking</button>
  </div>
</template>

<script>
import {eventBus} from '../main.js'
import BookingService from '../services/BookingService.js'

export default {
  name:'booking',
  props:['booking'],
  computed: {
    checkedInClass() {
      return this.booking.checkedIn ? 'checked-in' : 'checked-out';
    },
    checkInButtonText() {
      return this.booking.checkedIn ? 'Check out' : 'Check in';
    }
  },
  methods: {
    toggleCheckedIn: function() {
      const update = {
        checkedIn: !this.checkedIn
      }
      BookingService.updateBooking(update,this.booking._id);
      eventBus.$emit('toggle-booking-checked-in', this.booking);
    },
    deleteBooking: function() {
      eventBus.$emit('delete-booking', this.booking._id);
    }
  }
}
</script>

<style lang="css" scoped>
.booking {

	width: 20%;
	background: rgba(255, 255, 255, 0.5);
	margin-bottom: 20px;
	padding: 25px;
  border-radius: 10px;
  border-style: ridge;

}

button {
	color: black;
  border-radius: 10px;
	border: none;
	font-size: 18px;
	padding: 10px;
	margin-top: 10px;
	background: lightblue;
  border-style: outset;
}
.checked-in {
  color: darkgreen;
}

.checked-out {
  color: darkred;
}
h3 {
  margin-top: 0;
}
</style>
