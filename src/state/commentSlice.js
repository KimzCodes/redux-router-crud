import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 comments:[],
 loeding:true
}

const commentSlice = createSlice({
 name: 'posts',
 initialState,
 reducers: {

 },
//  extraReducers: (builder) => {
//   // Add reducers for additional action types here, and handle loading state as needed
//   // FetchPosts 
//   builder.addCase(fetchPosts.pending, (state) => {

//    state.loading =true
//    state.error = null
//   })
//   builder.addCase(fetchPosts.fulfilled, (state, action) => {
//    state.loading =false
//    console.log(...action.payload);
//    console.log(action.payload);
//    state.posts.push(...action.payload)
//   })
//   builder.addCase(fetchPosts.rejected, (state, action) => {

//    state.loading =false
//    state.error.push(action.payload)
//   })
// },
})

export default commentSlice.reducer