import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { validateSearch } from "./validation/searchValidation";
import axios from "axios";
import Home from "./pages/Home";
import "./style/app.css";

function App() {
  const [dataFromServer, setDataFromServer] = useState(null);
  const searchData = useSelector((state) => state.searchSlice);

  // Validate the inputs with joi before sending request to the server, using axios to send get request with parameters in the url and update the data we pass to homepage.
  useEffect(() => {
    (async () => {
      try {
        const joiResponse = validateSearch(searchData);
        if (joiResponse) {
          console.log(joiResponse);
          return;
        }
        const { data } = await axios.get("/", { params: searchData });
        setDataFromServer(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [searchData]);

  return (
    <>
      {dataFromServer && (
        <Home
          imagesData={dataFromServer.hits}
          totalHits={dataFromServer.totalHits}
        />
      )}
    </>
  );
}

export default App;
