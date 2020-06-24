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
    <div class="formWrap">
      <label for="checked_in">Checked In:</label>
    <input type="checkbox" id="checkedIn" name="checkedIn" v-model="checkedIn">
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
        checkedIn: JSON.parse(this.checkedIn)
      }
      BookingService.postBooking(booking)
      .then(res => eventBus.$emit('booking-added',res))
    }
  }
}
</script>

<style lang="css" scoped>
h2 {
  display: flex;
  justify-content: center;
	margin: 10px 0;
	padding: 0;
}

form {

	width: 25%;
	margin: 0 auto;
	background: rgba(153, 255, 204, 0.5);
	padding: 20px;
	margin-bottom: 40px;
  border-radius: 10px;
  border-style: ridge;
}

label {
	min-width: 100px;
	display: inline-block;
}

.formWrap {
	margin-bottom: 10px;
}

input {
	color: black;
  border-radius: 10px;
	border: none;
	font-size: 18px;
	padding: 10px;
	margin-top: 10px;
	background: lightblue;
  border-style: groove;
}

#save {
  display: flex;
  align-items: center;
  justify-content: center;
	color: white;
  border-radius: 10px;
	border: none;
	font-size: 18px;
	padding: 10px;
	margin-top: 10px;
	background: green;
  border-style: outset;
  margin-left: 100px;


}
</style>
