import "./App.css";
import { useEffect, useState } from "react";
import ProductListing from "./Component/ProductListing";
import { useDispatch, useSelector } from "react-redux";
import { customHTTPService } from "./CustomFunctions/customApiCaller";

function App() {
  const [res1, setRes1] = useState([]);
  const clickedFlag = useSelector((state) => state.clicked);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  //API call
  useEffect(() => {
    customHTTPService("get", "posts", {})
      .then((res) => setRes1(res.data))
      .catch((err) => {
        if (err) setError(true);
      });
  }, []);

  //dispatch event onclick
  function handleDispatch() {
    dispatch({ type: "CLICKED" });
  }
  return (
    <div className="App">
      <ol>
        {res1.length &&
          res1.map((info) => {
            return (
              <li
                key={info.title}
                data-testid={info.title}
                onClick={handleDispatch}
              >
                {info.title}
              </li>
            );
          })}
      </ol>
      {clickedFlag && <ProductListing />}
    </div>
  );
}

export default App;
