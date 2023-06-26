import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { RootState } from "../../store";
import { getAddress } from "../../services/apiGeocoding";

function getPosition(): Promise<GeolocationPosition> {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

const fetchAddress = createAsyncThunk("user/fetchAddress", async () => {
  // 1) We get the user's geolocation position
  const positionObj = await getPosition();
  const position = {
    latitude: positionObj.coords.latitude,
    longitude: positionObj.coords.longitude,
  };

  // 2) Then we use a reverse geocoding API to get a description of the user's address, so we can display it the order form, so that the user can correct it if wrong
  const addressObj = await getAddress(position);
  const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

  // 3) Then we return an object with the data that we are interested in
  return { position, address };
});

interface UserState {
  username: string;
  status: "idle" | "loading" | "error";
  position: {
    latitude: number;
    longitude: number;
  };
  address: string;
  error: string;
}

const initialState: UserState = {
  username: "",
  status: "idle",
  position: {} as UserState["position"],
  address: "",
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateName(state, action: PayloadAction<string>) {
      state.username = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchAddress.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAddress.fulfilled, (state, action) => {
        state.position = action.payload.position;
        state.address = action.payload.address;
        state.status = "idle";
      })
      .addCase(fetchAddress.rejected, (state) => {
        state.status = "error";
        state.error =
          "There was an error getting your address. Make sure to fill this field!";
      }),
});

const getUser = (state: RootState) => state.user;

const getUsername = (state: RootState) => state.user.username;

export default userSlice.reducer;
export const { updateName } = userSlice.actions;

export { getUser, getUsername, fetchAddress };
