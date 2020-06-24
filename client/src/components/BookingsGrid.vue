<template lang="html">
	<div id="bookingsGrid">
		<booking v-for="booking in bookings" :booking="booking" />
	</div>
</template>

<script>
import Booking from './Booking';
import { eventBus } from '../main.js';
import BookingService from '../services/BookingService.js'

export default {
	name: 'bookings-grid',
	components: {
		'booking': Booking
	},
	props: ['bookings']
}
</script>
