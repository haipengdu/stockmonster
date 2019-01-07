import { createActionType } from './dynamicReducers'
import ReducerRegistry from './reducerRegistry'

const SCOPE = 'favoriteStocks';
const INIT_STATE = {stocks: []};
const actionType = (type) => createActionType(SCOPE, type);

const Actions = {
	loadFavoriteStocksComplete: {
		type: actionType("loadFavoriteStocksComplete")
	},
	addFavoriteStocksComplete: {
		type: actionType("addFavoriteStocksComplete")
	}
};

export const FavoriteStocksReducer = {
	loadFavoriteStocksComplete: (state, action) => {
		return {...state, stocks: action.data};
	},
	state: (state) => state[SCOPE] || INIT_STATE 
};

export const FavoriteStocksDispatcher = {
	loadFavoriteStocks: () => (dispatch, getState, {localStorageClient}) => {
		localStorageClient.getFavoriteStocks().then((data) => {
			dispatch({...Actions.loadFavoriteStocksComplete, data});
		});
	},
	addFavoriteStocks: (favoriteStocksSymbols) => (dispatch, getState, {localStorageClient}) => {
		localStorageClient.addFavoriteStocks(favoriteStocksSymbols).then((data) => {
			dispatch({...Actions.addFavoriteStocksComplete});
		});
	}
};

ReducerRegistry.register(SCOPE, FavoriteStocksReducer, INIT_STATE)

