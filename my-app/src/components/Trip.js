import React from "react";
import TripData from "../components/TripData";
import image9 from "../assets/image9.jpg";
import image11 from "../assets/image11.jpg";
import image12 from "../assets/image12.jpg";

const Trip = () => {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You Can Discover More Places Using Google Map.</p>
      <div className="tripcard">
        <TripData
          image={image9}
          heading="Trip to Raygada"
          text="It is a beauty spot of nature, has a siva temple at the confluence of three rivers. It is situated in the heart of dense forest, rich in wild life. Sivaratri is a popular festival of this place. Though there is no good all weather road yet the place is worth visiting"
        />
        <TripData
          image={image11}
          heading="Trip to puri"
          text="The Jagannath Temple at Puri is one of the most revered Vaishnava sites of worship in India. One of the oldest Hindu temples to still be in use, its main shrine was built by Anantavarman of the Chodaganga dynasty in the tenth century. The deities within the shrine, however, are believed to be much older and are associated with the great mythical ruler of the Satya-yuga, King Indrayumna, nephew of Lord Ram"
        />
        <TripData
          image={image12}
          heading="Trip to Konark"
          text="Konark Sun Temple is a 13th-century CE (year 1250) Sun temple at Konark about 35 kilometres (22 mi) northeast from Puri city on the coastline in Puri district, Odisha, India. The temple is attributed to king Narasimhadeva I of the Eastern Ganga dynasty about 1250 CE.
"
        />
      </div>
    </div>
  );
};

export default Trip;
