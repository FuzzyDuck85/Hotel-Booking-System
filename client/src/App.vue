<template>
  <div id="app">
    <h1>FAWLTY TOWERS</h1>
    <bookings-form />
    <bookings-grid :bookings="bookings" />
  </div>
</template>

<script>
import BookingsForm from './components/BookingsForm.vue'
import BookingService from './services/BookingService.js'
import BookingsGrid from './components/BookingsGrid.vue'
import {eventBus} from './main.js'

export default {
  name: 'App',
  components: {
    'bookings-form': BookingsForm,
    'bookings-grid': BookingsGrid
  },
  data() {
    return {
      bookings: []
    };
  },
	mounted() {
    this.fetchBookings();

      eventBus.$on('booking-added', (booking) => {
        this.bookings.push(booking)
      })

      eventBus.$on('booking-deleted', (id) => {
        let index = this.bookings.findIndex(booking => booking._id === id)
        this.bookings.splice(index, 1)
      })


  },
  methods: {
    fetchBookings() {
      BookingService.getBookings()
        .then(bookings => this.bookings = bookings);
    }
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  background: url('./assets/fawlty_towers_front.jpg') no-repeat;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;




}
</style>
