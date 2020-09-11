import React, {useState} from "react";
import './App.css';

const Post = ({ src }) => <img src={src} alt="profile" />;

const Food = ({ food }) => {
  const {name, cuisine, budget, rating, src} = food;
  const postCount =5;
  const posts = [...Array(postCount)];
  
  return (
    <>
    {postCount === 0 ? (
        <div>No Posts</div>
      ) : (
          posts.map((_, idx) => (
            <div class="card">
              <div>
                <Post src={`${src}`} key={idx}/>
              </div>
              <div>{name}</div>
              <div>{cuisine}</div>
              <div>{budget}</div>
              <div>{rating}</div>
            </div>
          ))
        )
      }
    </>
  )
}

const Header = (props) => {
  const {username} = props;
  const [city, setCity] = useState("Jakarta");

  return (
    <>
      <div>GoZomato</div>
      <div>@{username}</div>
      <input onChange={({target: {value} }) => {
        setCity(value);
      }}
      
        placeholder={`Current city: ${city}`}
      />

      <button onClick={() => setCity()}>Change city</button>
      
      
    </>
  );
}


export default function App() {
  const food = {
    name: "ramen",
    cuisine: "Japan",
    budget: "23000",
    rating: "4/5",
    src: "https://via.placeholder.com/150"
  };

  const username = "mufidanuha";
  return (
    <>
      <Header username={username}/>
      <Food food={food}/>
    </>
  )
}

