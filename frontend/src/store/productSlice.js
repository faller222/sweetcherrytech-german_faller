import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

const fetchProducts = async (title, maxPrice, minPrice) => {
    const url = `http://localhost:8080/products?title=${title}&maxPrice=${maxPrice}&minPrice=${minPrice}`;
    // const url = `/products?title=${title}&maxPrice=${maxPrice}&minPrice=${minPrice}`;
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        return data;
    } else {
        throw new Error(`Error fetching products: ${response.status}`);
    }
};

export const getProducts = createAsyncThunk('product/getProducts', async ({title, minPrice, maxPrice, page, size}) => {
    const response = await fetchProducts(title, maxPrice, minPrice)
    console.log(response)
    return response.data
})

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        value: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.fulfilled, (state, action) => {
                console.log('getProducts.fulfilled', action.payload)
                state.value = action.payload;
            });
    },
})


export const selectProducts = (state) => state.products.value;
export default productsSlice.reducer;