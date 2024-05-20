import { Box, Button, Grid, MenuItem, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ImageItem from "../components/ImageItem";
import { useDispatch, useSelector } from "react-redux";
import { searchAction } from "../store/searchSlice";

const cateOptions = [
  "Sports",
  "Backgrounds",
  "Fashion",
  "Nature",
  "Science",
  "Education",
  "Feelings",
  "Health",
  "People",
  "Religion",
  "Places",
  "Animals",
  "Industry",
  "Computer",
  "Food",
  "Transportation",
  "Travel",
  "Buildings",
  "Business",
  "Music",
];

const Home = ({ imagesData, totalHits }) => {
  const [maxPage, setMaxPage] = useState(0);
  const [dataFromServer, setDataFromServer] = useState([]);
  const searchData = useSelector((state) => state.searchSlice);
  const dispatch = useDispatch();

  // Set max page to make sure we can go more pages then we have, set the   data to show and re render when it change
  useEffect(() => {
    setMaxPage(Math.floor(totalHits / 9));
    setDataFromServer(imagesData);
  }, [totalHits, imagesData]);

  // Any change we do to redux search slice will make a rerender from the App.jsx
  const handleNext = () => {
    dispatch(searchAction.increasePage());
  };
  const handlePrev = () => {
    dispatch(searchAction.decreasePage());
  };
  const handleCategoryChange = (e) => {
    dispatch(searchAction.changeCategory(e.target.value.toLowerCase()));
  };

  return (
    <Box maxWidth={1200} m="0 auto" sx={{ p: 1, pt: 4, bgcolor: "lightblue" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button
          sx={{ maxHeight: 50, minWidth: 80 }}
          disabled={searchData.page <= 1}
          onClick={handlePrev}
          variant="contained"
        >
          Prev
        </Button>
        <TextField
          id="outlined-select-cate"
          select
          defaultValue={cateOptions[0]}
          helperText="Please select your category"
          onChange={handleCategoryChange}
        >
          {cateOptions.map((cate) => (
            <MenuItem key={cate} value={cate}>
              {cate}
            </MenuItem>
          ))}
        </TextField>
        <Button
          sx={{ maxHeight: 50, minWidth: 80 }}
          disabled={searchData.page >= maxPage}
          onClick={handleNext}
          variant="contained"
        >
          Next
        </Button>
      </Box>

      <Grid container maxHeight={1200} maxWidth="100%">
        {dataFromServer.map((data) => (
          <Grid item key={data.id} xs={4} sx={{ p: 4, maxWidth: 400 }}>
            <ImageItem
              downloads={data.downloads}
              likes={data.likes}
              tags={data.tags}
              url={data.largeImageURL}
              views={data.views}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

Home.propTypes = {
  imagesData: PropTypes.array.isRequired,
  totalHits: PropTypes.number.isRequired,
};

export default Home;
