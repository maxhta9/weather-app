import axios from "axios";
import { WEA } from "../interface/WEA";

export const getWeatherData = async (): Promise<WEA.WeatherData | string> => {
  return await axios
    .get<WEA.WeatherData>(
      `http://api.weatherapi.com/v1/current.json?key=2a582530dab2430bab4183006221612&q=Mexico, San Luis Potosi&aqi=yes`
    )
    .then((response) => {
      if (response.data) {
        return response.data;
      }
    })
    .catch((error) => {
      return error;
    });
};
