import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';
import translationsReducer from './slices/translationsSlice';

const store = configureStore({
    reducer: {
        cart: cartReducer,
        translations: translationsReducer,
    },
});

export default store;
