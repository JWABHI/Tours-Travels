import React from "react";
import DestinationsData from "./DestinationsData";
import image4 from "../assets/image4.jpg";
import image6 from "../assets/image6.jpeg";
import image7 from "../assets/image7.jpeg";
import image8 from "../assets/image8.jpg";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Success is a journey, not a destination.</p>
      <DestinationsData
      className="first-des"
        heading="Koraput, Odisha"
        text="Koraput is in true sense, love at first sight. It has many treasures
       crammed into its compact territory - big skies, majestic hills,
       spectacular wildlife, superb organic food and hospitable,
       down-to-earth people. It is for those who have adventure in their
       hearts. According to Mr. R.C.S.Bell who was the first collector of
       Koraput district, the town gets its name from 'Kora-Putti' or 'the
       hamlet of the nux-vomica.'"
        img1={image4}
        img2={image6}
      />
      <DestinationsData
      className="first-des-reverse"
        heading="Bhubaneswar, Odisha"
        text="Part of Odisha’s Golden Triangle, Bhubaneswar, the state capital, deftly straddles two time zones, the old and the new. Take a spiritual walk through the old part to enjoy the quintessential temple town that the city was once. Then return to the new town for more earthly delights. Cave temples, an animal safari park, etc, are some of places that can be seen on an excursion tour. Puri and Konark are the other two arms of the Golden Triangle, which can be easily visited from Bhubaneswar"
        img1={image7}
        img2={image8}
      />
    </div>
  );
};

export default Destination;
