export const SelectTravelesList = [
  {
    id: 1,
    title: "Just Me",
    desc: "I am just expecting to travel.",
    icon: "👱‍♂️",
    people: "Alone",
  },
  {
    id: 2,
    title: "A Couple",
    desc: "We are just going to be able to travel.",
    icon: "👫",
    people: "2 People",
  },
  {
    id: 3,
    title: "Family",
    desc: "Our family is just going to be able to travel.",
    icon: "🏡",
    people: "3 to 5 People",
  },
  {
    id: 4,
    title: "Friends",
    desc: "We are going you to be able to travel.",
    icon: "✈️",
    people: "5 to 10 People",
  },
];

export const SelectBudgetOptions = [
  {
    id: 1,
    title: "Cheap",
    desc: "I am going to travel.",
    icon: "😓",
  },
  {
    id: 2,
    title: "Moderate",
    desc: "with a budget of $500 to $1,000.",
    icon: "😆",
  },
  {
    id: 3,
    title: "Luxury",
    desc: "Don't worry about cost.",
    icon: "🤪",
  },
];

export const AI_PROMPT =
  "Generate Travel Plan for Location: {location}, for {totalDay} Days and {totalNight} Night for {traveller} with a {budget} budget with a Flight details, Flight Price with Booking url, Hotels options list with HotelName, Hotel Address, price, hotel image url, geo coordinates, rating, descriptions and places to visit nearby with placeName, Place Details, Place Image Url, Geo Coordinates, ticket pricing, time travel each of the location for {totalDays} days and {totalNight} night with each day plan with best time to visit in JSON format.";
