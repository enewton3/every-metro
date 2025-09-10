import { useState } from "react";
import "./ReviewOverlay.css";
import { addReview } from "../services";

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
    await addReview(fields);
    props.setOverlayToggle((prev) => !prev);
  };

  return (
    <div>
      <form
        className="overlay"
        onSubmit={(e) => {
          if (name) {
            handleSubmit(e);
          } else {
            e.preventDefault();
            e.target[0].placeholder = "Please include your name!";
          }
        }}
      >
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
        <button className="submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
