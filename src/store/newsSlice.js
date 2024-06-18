import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchNews = createAsyncThunk(
  'news/fetchNews',
  async (category = '') => {
    const categoryQuery = category ? `&category=${category}` : '';
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in${categoryQuery}&apiKey=7f23846ddb56479f814e843d7a4a309c`
    );
    const data = await response.json();
    return data.articles;
  }
);

const newsSlice = createSlice({
  name: 'news',
  initialState: {
    articles: [],
    status: 'idle',
    error: null,
    currentPage: 1,
    postsPerPage: 8,
    category: ''
  },
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
      state.currentPage = 1; // Reset to first page when category changes
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.articles = action.payload;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const { setCurrentPage, setCategory } = newsSlice.actions;

export default newsSlice.reducer;
