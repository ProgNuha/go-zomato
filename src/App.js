import React, {useState} from "react";
import './App.css';

const Post = ({ src }) => <img src={src} alt="profile" />;

const Header = (props) => {
  const {username} = props;
  const [city, setCity] = useState("Jakarta");
  const postCount =5;
  const posts = [...Array(postCount)];

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
      
      {postCount === 0 ? (
        <div>No Posts</div>
      ) : (
        posts.map((_, idx) => (
          <div class="card">
            <div>
              <Post src="https://via.placeholder.com/150" key={idx}/>
            </div>
            <div>name</div>
            <div>cuisine</div>
            <div>budget</div>
            <div>rating</div>
          </div>
        ))
        )
        
      }
      
    </>
  );
}


export default function App() {


  const username = "mufidanuha";
  return <Header username={username}/>
}

