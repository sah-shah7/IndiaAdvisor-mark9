import "./styles.css";
import React, { useState } from "react";

const foodDB = {
  West: [
    {
      name: " Goa’s Beaches,Goa",
      des:
        "A large number of tourists come from the west to the sun-soaked beaches of Goa to get a tan and enjoy the cool breeze of the sea. Goa is also a perfect destination for adventure-lovers and party animals.",
      best_t: "During New Year"
    },
    {
      name: "Udaipur, Rajasthan",
      des:
        "Also known as the “city of lakes”, Udaipur is majestically nestled between hills and mountains. It is an enchanting city comprised of mystical white marble palaces, calm lakes, and exquisite gardens and temples. It is one of the most beautiful and romantic destinations in the country.",
      best_t: "Between September-March "
    },
    {
      name: "Daman, Daman&Diu",
      des:
        "It has perfect climatic conditions and beautiful beaches that are relatively less crowded. Daman boasts incredible architectural splendours and a rich cultural background",
      best_t: "During November-February"
    }
  ],
  North: [
    {
      name: "Kullu&Manali,H.Pradesh",
      des:
        "Blessed with verdant greenery, pristine streams, meadows blooming with flowers, and pleasant climate, the twin towns of Kullu and Manali in Himachal Pradesh are among the most visited hill stations in North India. These towns, which are at a distance of about 40 km, are dotted with waterfalls, trekking trails, apple orchards, religious places, quaint villages, museums, and hip cafes, among others",
      best_t: "December to February "
    },
    {
      name: "Dehradun,Uttarakhand",
      des:
        "Dehradun on one side and snow-capped Himalayan peaks on the other, the British rightly called Mussoorie, The Queen of Hill Stations. Located merely 33 km apart, these hills are also popular with trekkers. In addition to their natural beauty, Dehradun and Mussoorie boast of a number of institutions, churches, and summer palaces from the British-raj era",
      best_t: "March to June"
    },
    {
      name: "Agra,Uttar Pradesh",
      des:
        "Agra, home to the famous Taj Mahal, counts among the top places to visit in North India and for all the right reasons. The historical city in Uttar Pradesh is a medley of grand monuments, exceptional architecture, and mesmerizing sights and sounds",
      best_t: "October to March"
    }
  ],
  South: [
    {
      name: "Coorg,Karnataka",
      des:
        "Surrounded by imposing mountains and covered by mist, Coorg is a nature lover’s paradise. This small town in Karnataka is best known for its diverse flora and fauna and aromatic spices and coffee plantations. From waterfalls and trekking routes to forts and temples, there’s plenty to explore in Coorg.",
      best_t: "October to March"
    },
    {
      name: "Wayanad,Kerala",
      des:
        "Wayanad, one of the most visited hill stations in Kerala, beckons trekking enthusiasts and nature lovers. Its rolling hills and lush green forests are home to a number of animals and birds. After the monsoons, the waterfalls too come alive with a renewed spirit.",
      best_t: "October to May"
    },
    {
      name: "Kodaikanal,TamilNadu",
      des:
        "The cool breeze of Kodaikanal, a hill town in Tamil Nadu, is a welcome respite from the humidity typically associated with southern India. Nestled amidst the misty clouds, this hill station is rightly called the Princess of Hill Stations.",
      best_t: "October to June"
    }
  ],
  East: [
    {
      name: "Gangtok,Sikkim",
      des:
        "Incredibly alluring, pleasantly boisterous and wreathed in clouds - Gangtok, the capital of Sikkim, is one of the most popular hill stations in India. Lying at the height of 1650 m above sea level, the town during its bright sunny days offers spectacular views of Mt. Kanchenjunga. Gangtok is a base for adventure enthusiasts comprising of trekkers and campers to the Himalayan mountain ranges",
      best_t: "Throughout the year"
    },
    {
      name: "Majuli, Assam",
      des:
        "Majuli is a lush green environment-friendly, a pristine and pollution-free freshwater island in the river Brahmaputra, just 20 km from the Jorhat city and located 347 Kms from Guwahati. With a total area of 1250 sq. km, Majuli is the world's largest river island and it attracts tourists from all over the world. Among one of the most surreal places in India, Majuli is also a strong contender for a place in UNESCO's World Heritage Sites",
      best_t: "July-March"
    },
    {
      name: "Darjeeling,WestBengal",
      des:
        "Jaw-dropping locales, mesmerising sunrises, the untouched beauty of the hills, the old-world charm of the past, and the welcoming smiles of the local people all add up to make Darjeeling one of the most beautiful hill stations in Eastern part of India. Spread over a steep mountain ridge, nestled amidst acres of lush green tea plantations, Darjeeling stands at the height of 2,050 meters above sea level, thus boasting of cool climes all year round",
      best_t: "September-December"
    }
  ]
};

const foodButtons = ["West", "North", "South", "East"];

export default function App() {
  const [cuisine, setcuisine] = useState("North");

  function oncuisineClick(cuisine) {
    console.log(cuisine);
    setcuisine(cuisine);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ margin: "2rem", fontWeight: "bolder" }}>IndiaAdvisor</h1>
      <hr className="hr" />
      <h3 style={{ padding: "0.1rem" }}>
        Findout the best places that India has to offer. Select the region to
        find out more!
      </h3>
      <hr className="hr" />

      <div style={{ padding: "1rem", margin: "1rem" }}>
        {foodButtons.map((cuisine) => {
          return (
            <button
              key={cuisine}
              style={{
                padding: "1rem 0.5rem",
                cursor: "pointer",
                borderRadius: "1rem",
                border: "3px solid black",
                margin: "1rem",
                position: "center",
                fontWeight: "bold",
                fontSize: "Medium"
              }}
              onClick={() => oncuisineClick(cuisine)}
            >
              {cuisine}
            </button>
          );
        })}
      </div>
      <hr className="hr" />
      <div>
        <ul className="books-list">
          {foodDB[cuisine].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "0rem",
                border: "3px solid black",
                background: "white",
                width: "50rem",
                position: "center",
                borderRadius: "1rem",
                margin: "0.4px"
              }}
            >
              <h2 style={{ color: "black", fontWeight: "bold" }}>
                {" "}
                {book.name}{" "}
              </h2>
              <hr className="hr" />
              <h4
                style={{ color: "red", position: "center", fontSize: "large" }}
              >
                {" "}
                {book.best_t}{" "}
              </h4>
              <hr className="hr" />
              <div style={{ textAlign: "centered" }}>{book.des}</div>
            </li>
          ))}
        </ul>
      </div>
      <hr className="hr" />
      <footer></footer>
    </div>
  );
}
