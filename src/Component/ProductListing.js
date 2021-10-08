import axios from "axios";
import React, { useEffect, useState } from "react";
import { customHTTPService } from "../CustomFunctions/customApiCaller";

function ProductListing() {
  const [res1, setRes1] = useState([]);
  const [text, setText] = useState();
  const [error, setError] = useState(false);
  //API call in useEffect
  useEffect(() => {
    customHTTPService("get", "photos", {})
      .then((res) => setRes1(res.data))
      .catch((err) => setError(true));
  }, []);
  //onclick-event function
  function handleClick(id) {
    setText(id);
  }
  return (
    <>
      {res1.length &&
        !error &&
        res1.map((info) => {
          return (
            <li
              key={info.id}
              data-testid={info.id}
              onClick={() => handleClick(info.id)}
            >
              <img src={info.url} />
            </li>
          );
        })}
      <div data-testid="takeatest">{text}</div>
    </>
  );
}
export default ProductListing;
