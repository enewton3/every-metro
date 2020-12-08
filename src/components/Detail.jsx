import { Link } from "react-router-dom";

export default function Detail(props) {
  let key = props.detail[0];
  let value = props.detail[1] ? props.detail[1] : "This data is missing!";

  const getBetterKeyName = (key) => {
    // Thanks Soleil for the following reduce!
    // take each character of the key and let's do something with it
    const words = key.split("").reduce((a, cha, i) => {
      // if the current letter is a capital letter, it signifies the beginning of a word
      if (cha === cha.toUpperCase()) {
        // to create a new word, we add a new element at the end of the array to append our lowercase letters to
        a.push(cha);
        // if the current key is a lowercase letter, it is just part of a word
      } else {
        // so add it to the current word
        a[a.length - 1] += cha;
      }
      return a;
    }, []);
    let detailName = words.join(" ");
    return detailName;
  };

  let newKey = getBetterKeyName(key);

  if (
    typeof newKey === "undefined" ||
    key === "TransitMap" ||
    key === "MetroCardImage" ||
    key === "reviews" ||
    key === "image" ||
    key === "logo"
  ) {
    return null;
  } else if (typeof value == "undefined") {
    return (
      <p className="detail">
        <strong>{newKey}: </strong>
      </p>
    );
  } else if (typeof value == "string") {
    if (value.includes("http")) {
      return (
        <p className="detail">
          <strong>{newKey}: </strong> <a href={value}> here </a>
        </p>
      );
    }
    return (
      <p className="detail">
        <strong>{newKey}: </strong>{" "}
        <span className="detail-value">{value}</span>
      </p>
    );
  } else if (typeof value == "boolean") {
    return (
      <p className="detail">
        <strong>{newKey}: </strong>{" "}
        <span className="detail-value">{value ? "yes" : "no"}</span>
      </p>
    );
  } else if (Array.isArray(value)) {
    if (key === "LightRailTrams" || key === "Metro") {
      return (
        <p className="detail list">
          <strong>{newKey}: </strong>
          {value.map((item, index) => (
            <Link to={`/details/${item}`} key={`t${index}`}>
              here
            </Link>
          ))}
        </p>
      );
    }
    return (
      <p className="detail list">
        <strong>{newKey}: </strong>
        {value.map((item, index) => (
          <span key={`m${index}`}>{item}</span>
        ))}
      </p>
    );
  }
}
