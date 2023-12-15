import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';


export const getProducts = createAsyncThunk('product/getProducts', async ({title, minPrice, maxPrice, page, size}) => {
    // const url = `http://localhost:8080/products?title=${title}&maxPrice=${maxPrice}&minPrice=${minPrice}&page=${page}&size=${size}`;
    const url = `/products?title=${title}&maxPrice=${maxPrice}&minPrice=${minPrice}&page=${page}&size=${size}`;
    const response = await fetch(url);
    if (response.ok) {
        return await response.json();
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
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.fulfilled, (state, action) => {
                console.log('getProducts.fulfilled', action.payload)
                state.values = action.payload?.content;
                state.total = action.payload?.totalElements;
                state.page = action.payload?.number;
            });
    },
})


export const selectProducts = (state) => state.product.values;
export const selectPage = (state) => state.product.page;
export const selectSize = (state) => state.product.size;
export const selectTotal = (state) => state.product.total;
export default productsSlice.reducer;