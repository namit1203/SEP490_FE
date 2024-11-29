import { createSlice } from "@reduxjs/toolkit";
import { searchTrip } from "./action";

const bookingSlice = createSlice({
  name: "booking",
  initialState: {
    data: [],
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
      });
  },
});

export const { setStartPoint, setEndPoint, setTime } = bookingSlice.actions;
export default bookingSlice.reducer;
