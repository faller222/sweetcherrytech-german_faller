import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

export const getProducts = createAsyncThunk('product/getProducts', async (payload, {getState}) => {
    const state = getState().product;

    const page = payload.page || 0
    const size = payload.size || state.size

    const title = payload.title || state.lastTitle
    const minPrice = payload.minPrice || state.lastMinPrice
    const maxPrice = payload.maxPrice || state.lastMaxPrice

    // const url = `http://localhost:8080/products?title=${title}&maxPrice=${maxPrice}&minPrice=${minPrice}&page=${page}&size=${size}`;
    const url = `/products?title=${title}&maxPrice=${maxPrice}&minPrice=${minPrice}&page=${page}&size=${size}`;

    const response = await fetch(url);
    if (response.ok) {
        const products = await response.json();
        return {...products, query: {title, minPrice, maxPrice}}
    } else {
        throw new Error(`Error fetching products: ${response.status}`);
    }
})

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        values: [],
        page: 0,
        size: 10,
        total: 0,

        lastTitle: "",
        lastMinPrice: 0,
        lastMaxPrice: 1000,
    },
    reducers: {    },
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.fulfilled, (state, action) => {
                state.values = action.payload?.content;

                state.total = action.payload?.totalElements;
                state.size = action.payload?.size;
                state.page = action.payload?.number;

                state.lastTitle = action.payload?.query.title;
                state.lastMinPrice = action.payload?.query.minPrice;
                state.lastMaxPrice = action.payload?.query.maxPrice;
            });
    },
})

export const selectProducts = (state) => state.product.values;
export const selectPage = (state) => state.product.page;
export const selectSize = (state) => state.product.size;
export const selectTotal = (state) => state.product.total;
export default productsSlice.reducer;