import axios from "axios";
import { useState } from "react";
import { baseURL, config } from "../services";
import "./ReviewOverlay.css";

export default function ReviewOverlay(props) {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const { system } = props;

  const fields = {
    name,
    content,
    Metro_Systems: [`${system.id}`],
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const reviewsURL = `${baseURL}/reviews`;
    await axios.post(reviewsURL, { fields }, config);
    props.setOverlayToggle((prev) => !prev);
  };

  return (
    <div className="overlay">
      <form onSubmit={handleSubmit}>
        <input
          className="full-name"
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="content"
          type="text"
          placeholder="Add your review or suggestion here"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
