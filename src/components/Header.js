import Card from "./Card";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function Header(props) {

  const clientId = "As379ueQ6DMePuTIJmWmgnWFJGpLnuJPSLknY4yUL1E";

  const [image, setImage] = useState("landscape");
  const [result, setResult] = useState([]);

  useEffect(() => {
    if (image.length > 1) {
      handleClick();
    }
  });

  const handleChange = (event) => {
    setImage(event.target.value);
    console.log(event.target.value);
  };

  const handleClick = () => {
    const url =
      "https://api.unsplash.com/search/photos?page=1&query=" +
      image +
      "&client_id=" +
      clientId;
    axios.get(url).then((response) => {
      setResult(response.data.results);
    });
  };

  return (
    <>
      <div className="header">
        <div>
          <h1>Download High Quality Images by creators</h1>
          <p>Over 2.4 million+ stock Images by our talented community</p>
          <input
            onChange={handleChange}
            type="text"
            placeholder="Search high resolution Images, categories, wallpapers"
          />
        </div>
      </div>
      <div className="result">
        {result.map((image) => (
          <>
            <Card
              imageURL={image.urls.small}
              userName={image.user.name}
              userID = {image.user.username}
              profileImage = {image.user.profile_image.medium}
              likes={image.likes}
              mode = {props.mode}
            />
          </>
        ))}
      </div>
    </>
  );
}
export default Header;
