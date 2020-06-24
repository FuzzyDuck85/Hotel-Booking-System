<template lang="html">
	<div id="bookingsGrid">
		<booking v-for="(booking, index) in bookings" :booking="booking" :key="index" />
	</div>
</template>

<script>
import Booking from './Booking';
// import { eventBus } from '../main.js';
// import BookingService from '../services/BookingService.js'

export default {
	name: 'bookings-grid',
	components: {
		'booking': Booking
	},
	props: ['bookings']
}
</script>

<style lang="css" scoped>
#bookingsGrid {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	
}

h2 {
	padding: 0;
	margin: 0;
}
</style>
