use hotel_bookings;
db.dropDatabase();

db.bookings.insertMany([
  {
    name: "Hank Scorpio",
    email: "Hank.Scorpio@gmail.com",
    checkedIn: false
  },
  {
    name: "Dave 'The Cookie' Richter",
    email: "TheCookie@gmail.com",
    checkedIn: false
  }
]);
