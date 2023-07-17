import { Container } from "@mui/material";
import DefaultLayout from "../../Layout/DefaultLayout";
import Search from "./Search";
import Current from "./Current";
import Forecast from "./Forecast";

export default function SearchWeatherData() {
  return (
    <DefaultLayout>
      <Container maxWidth="md" sx={{paddingTop:10}}>
        <Search />
        <Current />
        <Forecast />
      </Container>
    </DefaultLayout>
  );
}
