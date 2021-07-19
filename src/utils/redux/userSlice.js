import { createSlice } from '@reduxjs/toolkit';

/**
 * pre-requisite -- you will need the local java service running on port 8080
Request URL: http://localhost:8080/meetingTypes/create <-- this is what you call when you click "Submit" for when the case worker is finished with created the meeting types/preferences
Json payload (shape):
{
    "name":"Training" | "Interview" | "Home Inspection" | "Home Selection" | "Home Visit"
    "location":"enter location here",
    "duration":"30" | "60"
    "color":"enter color here",
    "description":"enter description here",
    "isOnSite":"0" | "1"
} 
 */
const initialState = {
  user: {
    name: '',
    verified: false,
  },
  meetingPreferences: {},
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setName: (state, action) => {
      state.user.name = action.payload;
    },
    setPreferences: (state, action) => {
      state.meetingPreferences = action.payload;
    },
  },
});

export const { setName, setPreferences } = userSlice.actions;

export default userSlice.reducer;
