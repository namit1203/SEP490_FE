import { createAsyncThunk } from "@reduxjs/toolkit";

const searchTrip = createAsyncThunk(
  "trip/searchTrip",
  async ({ startPoint, endPoint, time }) => {
    let url = `https://boring-wiles.202-92-7-204.plesk.page/api/Trip/searchTrip/startPoint/endPoint/time?startPoint=${startPoint}&endPoint=${endPoint}`;

    if (time) {
      url += `&time=${time}`;
    }

    const response = await fetch(url);

    const data = await response.json();
    return data;
  }
);

const getTripDetailsById = createAsyncThunk(
  "trip/tripDetailById",
  async ({ id }) => {
    let url = `https://boring-wiles.202-92-7-204.plesk.page/api/TripDetails/tripId?TripId=${id}`;

    const response = await fetch(url);

    const data = await response.json();

    return data;
  }
);

export { getTripDetailsById, searchTrip };
