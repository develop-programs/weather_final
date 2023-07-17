import { Divider, Grid, IconButton, Paper, Typography } from "@mui/material";

import { MdCalendarToday } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { AiOutlineArrowUp } from "react-icons/ai";
import { AiOutlineArrowDown } from "react-icons/ai";
import { BiWind } from "react-icons/bi";
import { BiCloud } from "react-icons/bi";
import { WiWindy } from "react-icons/wi";
import { WiHumidity } from "react-icons/wi";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store";
import { convert } from "../../app/Reducers/convertor";

function Current() {
  const dispatch = useDispatch<AppDispatch>();
  const Data = useSelector((state: any) => state);
  return (
    <Paper
      sx={{
        marginTop: 4,
        borderRadius: 2,
        padding: 2,
      }}
      elevation={5}
    >
      <Grid container>
        <Grid item xs={12}>
          <Typography
            variant="body1"
            color="inherit"
            fontWeight={550}
            padding={1}
            fontSize={26}
            display="flex"
            justifyContent="space-between"
          >
            Current Weather
            <IconButton
              onClick={() => {
                dispatch(convert());
              }}
            >
              {Data.convert.value ? (
                <>
                  <Typography variant="body1" color="inherit" fontWeight={800}>
                    &deg;C
                  </Typography>
                </>
              ) : (
                <>
                  <Typography variant="body1" color="inherit" fontWeight={800}>
                    &deg;F
                  </Typography>
                </>
              )}
            </IconButton>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography
            variant="body1"
            color="inherit"
            padding={2}
            fontWeight={550}
          >
            Now
          </Typography>
          <Typography
            variant="body1"
            color="inherit"
            padding={2}
            display="flex"
            gap={4}
            alignItems="center"
          >
            <Typography variant="body1" color="inherit" fontWeight={600}>
              <img
                src={`http://${Data?.WeatherReport?.data?.current?.condition?.icon}`}
                width={130}
              />
            </Typography>
            <Typography
              variant="body1"
              color="inherit"
              fontSize={{
                xs: 40,
                sm: 50,
                lg: 80,
              }}
              fontWeight={600}
            >
              {Data.convert.value ? (
                <> {Data?.WeatherReport?.data?.current?.temp_c}&deg;</>
              ) : (
                <> {Data?.WeatherReport?.data?.current?.temp_f}&deg;</>
              )}
            </Typography>
          </Typography>
          <Typography variant="body1" color="inherit" padding={2}>
            {Data?.WeatherReport?.data?.current?.condition?.text}
            <Divider />
          </Typography>
          <Typography
            variant="body1"
            color="inherit"
            padding={2}
            display={{ xs: "block", md: "flex" }}
            justifyContent="space-between"
          >
            <Typography
              variant="body1"
              color="inherit"
              padding={2}
              display="flex"
              alignItems="center"
            >
              <MdCalendarToday />
              {Data?.WeatherReport?.data?.location?.localtime}
            </Typography>
            <Typography
              variant="body1"
              color="inherit"
              padding={2}
              display="flex"
              alignItems="center"
            >
              <FaLocationDot />
              {Data?.WeatherReport?.data?.location?.name},
              {Data?.WeatherReport?.data?.location?.region}
            </Typography>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} paddingX={2}>
          <Typography
            variant="body1"
            color="inherit"
            paddingY={2}
            fontSize={28}
            fontWeight={600}
          >
            Feel's Like{" "}
            {Data.convert.value ? (
              <> {Data?.WeatherReport?.data?.current?.feelslike_c}&deg;</>
            ) : (
              <> {Data?.WeatherReport?.data?.current?.feelslike_f}&deg;</>
            )}
          </Typography>
          <Typography
            variant="body1"
            color="inherit"
            paddingY={1}
            paddingX={1}
            fontSize={28}
            display="flex"
            alignItems="center"
          >
            <AiOutlineArrowUp />
            {Data.convert.value ? (
              <> {Data?.WeatherReport?.data?.current?.feelslike_c}&deg;</>
            ) : (
              <> {Data?.WeatherReport?.data?.current?.feelslike_f}&deg;</>
            )}{" "}
            <AiOutlineArrowDown />
            {Data.convert.value ? (
              <> {Data?.WeatherReport?.data?.current?.feelslike_c}&deg;</>
            ) : (
              <> {Data?.WeatherReport?.data?.current?.feelslike_f}&deg;</>
            )}
          </Typography>
          <Typography variant="body1" color="inherit" paddingY={1}>
            <Typography
              variant="body1"
              color="inherit"
              paddingY={1}
              paddingX={1}
              display="flex"
              alignItems="center"
              gap={1}
            >
              <Typography variant="body1" color="inherit" fontSize={25}>
                {" "}
                <BiWind />
              </Typography>
              <Typography variant="body1" color="inherit">
                Wind Speed: {Data?.WeatherReport?.data?.current?.wind_kph} k/h
              </Typography>
            </Typography>
            <Typography
              variant="body1"
              color="inherit"
              paddingY={1}
              paddingX={1}
              display="flex"
              alignItems="center"
              gap={1}
            >
              <Typography variant="body1" color="inherit" fontSize={25}>
                {" "}
                <WiWindy />
              </Typography>
              <Typography variant="body1" color="inherit">
                {" "}
                Pressure: {Data?.WeatherReport?.data?.current?.pressure_mb} mb
              </Typography>
            </Typography>
            <Typography
              variant="body1"
              color="inherit"
              paddingY={1}
              paddingX={1}
              display="flex"
              alignItems="center"
              gap={1}
            >
              <Typography variant="body1" color="inherit" fontSize={25}>
                {" "}
                <WiHumidity />
              </Typography>
              <Typography variant="body1" color="inherit">
                {" "}
                Humidity: {Data?.WeatherReport?.data?.current?.humidity}%
              </Typography>
            </Typography>
            <Typography
              variant="body1"
              color="inherit"
              paddingY={1}
              paddingX={1}
              display="flex"
              alignItems="center"
              gap={1}
            >
              <Typography variant="body1" color="inherit" fontSize={25}>
                {" "}
                <BiCloud />
              </Typography>
              <Typography variant="body1" color="inherit">
                {" "}
                Clouds: {Data?.WeatherReport?.data?.current?.cloud}
              </Typography>
            </Typography>
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Current;
