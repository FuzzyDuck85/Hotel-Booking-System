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
      });

      eventBus.$on('delete-booking', (id) => {
        let index = this.bookings.findIndex(booking => booking._id === id)
        this.bookings.splice(index, 1)
      });
      eventBus.$on('toggle-booking-checked-in', booking => {
      const updatedBooking = {
        ...booking,
        checkedIn: !booking.checkedIn
      };

      BookingService.updateBooking(updatedBooking,booking._id);
      const index = this.bookings.findIndex(booking => booking._id === updatedBooking._id);
      
      this.bookings.splice(index, 1, updatedBooking);
    });


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
  font-family: 'Open Sans', sans-serif;
  background: url('./assets/fawlty_towers_front.jpg') no-repeat;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}
h1  {
  width: 25%;
  display: flex;
  justify-content: center;
	margin: 0 auto;
	background: white;
	padding: 20px;
	margin-bottom: 40px;
  border-radius: 10px;
  border-style: solid;
  border-width: thick;
  border-color: black;
}
</style>
