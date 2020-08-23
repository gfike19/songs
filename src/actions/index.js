// Action creator
export const selectSong = (song) => {
    // return an action
    return {
        type: "SONG_SELECTED",
        payload: song
    };
};

//export default selectSong is only good if there are not many items to export, above is better
// default export doesn't need {}
// named exports (like above) do