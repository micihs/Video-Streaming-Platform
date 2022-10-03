import { createAsyncThunk, createSlice } from "@redux/toolkit";
import { client } from "../utils";

export const getChannels = createAsyncThunk(
    "channelrecomendation/getChannels",
    async () => {
        const { data } = await client(`${process.env.REACT_APP_BE}/users`);
        return data;
    }
);

const channelRecommendationSlice = createSlice({
    name: "channelrecommendation",
    initiaState: {
        isFetching: true,
        channels: [],
    },

    reducers: {
        toggleSubscribeChannelrecommendation(state, action) {
            state.channels = state.channels.map((channel) => 
                channel.id === action.payload ? { ...channel, isSubcribed: !channel.isSubscribed } : channel
            );
        },
    },
    extraReducers: {
        [getChannels.fulfilled]: (state, action) => {
          state.isFetching = false;
          state.channels = action.payload;
        },
    },
});

export const {
    toggleSubscribeChannelRecommendation,
} = channelRecommendationSlice.actions;
  
export default channelRecommendationSlice.reducer;