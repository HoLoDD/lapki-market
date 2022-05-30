import { combineReducers, configureStore } from '@reduxjs/toolkit';
import itemReducer from './reducers/item-slice';
import authReducer from './reducers/auth-slice';

const rootReducer = combineReducers({
    itemReducer,
    authReducer,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
