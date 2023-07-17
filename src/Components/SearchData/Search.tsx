import { Paper, Typography, Input, IconButton } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { fetchData } from "../../app/Reducers/Weather";
import { fetchSearchData } from "../../app/Reducers/SearchReducer";

function Search() {
  const [Value, setValue] = React.useState("");
  const dispatch = useDispatch<AppDispatch>();
  const CurrentWeather = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) =>
        dispatch(fetchData(position))
      );
    }
  };

  return (
    <Paper
      elevation={5}
      sx={{
        borderRadius: 20,
        paddingX: 2,
        paddingY: 1,
        display: "flex",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Typography variant="body1" color="inherit" component="div">
        <IconButton>
          <FaSearch />
        </IconButton>
      </Typography>

      <Typography
        variant="body1"
        color="inherit"
        component="div"
        sx={{ flexGrow: 1 }}
      >
        <Input
          placeholder="Search"
          disableUnderline={true}
          defaultValue="Raipur"
          fullWidth
          value={Value}
          onChange={(e: any) => {
            setValue(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              dispatch(fetchSearchData(Value));
            }
          }}
        />
      </Typography>

      <Typography variant="body1" color="inherit" component="div">
        <IconButton onClick={CurrentWeather}>
          <FaLocationCrosshairs />
        </IconButton>
      </Typography>
    </Paper>
  );
}

export default Search;
