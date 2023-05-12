import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = { posts: [], error: null, loading: false };

export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch("http://localhost:3008/posts");
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
// DELETE Post
export const deletePosts = createAsyncThunk(
  "posts/deletePosts",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      await fetch(`http://localhost:3008/posts/${data.id}`,{
        method: "DELETE",
        
      })
      return data;
      
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addPosts = createAsyncThunk(
  "posts/addPosts",
  async (item, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch("http://localhost:3008/posts",{
      method: "POST",
      body: JSON.stringify(item),
      // headers: {"Conten-type": "application/json; charset=utf-8"},
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },

      });
      
      const data = await res.json();
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.message);
    }
  }
);

const postSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    // FetchPosts
    builder.addCase(fetchPosts.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.loading = false;
      console.log(...action.payload);
      console.log(action.payload);
      state.posts.push(...action.payload);
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.loading = false;
      console.log(action.payload);
      state.error=action.payload;
    });

    // Delete posts
    builder.addCase(deletePosts.pending,(state)=>{
      state.loading = true
      state.error = null
    });
    builder.addCase(deletePosts.fulfilled,(state, action)=>{
      state.loading = false
      console.log(action.payload);
     state.posts= state.posts.filter(post => post.id !== action.payload.id)
    })
    builder.addCase(deletePosts.rejected,(state, action)=>{
      state.loading=false
      state.error = action.payload
    })

    //INSERT POSTS
    builder.addCase(addPosts.pending,(state)=>{
      state.loading = true
      state.error = null
    })
    builder.addCase(addPosts.fulfilled,(state,action)=>{
      state.loading = false
      state.posts.push(action.payload)
    })
    builder.addCase(addPosts.rejected,(state, action)=>{
      state.loading = false
      state.error = action.payload
    })
}});

// export const { increment, decrement, incrementByAmount } = postSlice.actions

export default postSlice.reducer;
