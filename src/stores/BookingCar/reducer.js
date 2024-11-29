import { createSlice } from "@reduxjs/toolkit";
import { getTripDetailsById, searchTrip } from "./action";

const bookingSlice = createSlice({
  name: "booking",
  initialState: {
    data: [],
    tripDetails: [],
    loadingDeitals: false,
    loading: false,
    error: null,
    startPoint: "Hà Nội",
    endPoint: "Bắc Giang",
    time: null,
  },
  reducers: {
    setStartPoint: (state, action) => {
      state.startPoint = action.payload;
    },
    setEndPoint: (state, action) => {
      state.endPoint = action.payload;
    },
    setTime: (state, action) => {
      state.time = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      // search
      .addCase(searchTrip.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchTrip.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })

      .addCase(searchTrip.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // detail by id
      .addCase(getTripDetailsById.pending, (state) => {
        state.loadingDeitals = true;
        state.error = null;
      })
      .addCase(getTripDetailsById.fulfilled, (state, action) => {
        state.loadingDeitals = false;
        state.tripDetails = action.payload;
      })
      .addCase(getTripDetailsById.rejected, (state, action) => {
        state.loadingDeitals = false;
        state.error = action.error.message;
      });
  },
});

export const { setStartPoint, setEndPoint, setTime } = bookingSlice.actions;
export default bookingSlice.reducer;
