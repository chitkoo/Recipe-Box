import {configureStore} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
//persist
import {persistReducer, persistCombineReducers} from 'redux-persist';
import ReduxThunk from 'redux-thunk';

//reducers
import RecipeReducer from './reducer/recipe';

const recipePersistConfig = {
  key: 'RecipeReducer',
  storage: AsyncStorage,
};

const reducers = {
  recipeList: persistReducer(recipePersistConfig, RecipeReducer),
};

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['recipeList'],
};

const persistedReducer = persistCombineReducers(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [ReduxThunk],
});

export default store;
