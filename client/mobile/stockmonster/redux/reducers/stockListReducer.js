import { createActionType } from './dynamicReducers'
import ReducerRegistry from './reducerRegistry'

const SCOPE = 'stockList';
const INIT_STATE = {stocks: {}};
const actionType = (type) => createActionType(SCOPE, type);

const Actions = {
	loadStocksComplete: {
		type: actionType("loadStocksComplete")
	}
};

export const StockListReducer = {
	loadStocksComplete: (state, action) => {
		return {...state, stocks: action.data};
	},
	state: (state) => state[SCOPE] || INIT_STATE 
};

export const StockListDispatcher = {
	loadStocks: () => (dispatch, getState, {localStorageClient}) => {
		localStorageClient.getAllStocks().then((data) => {
			dispatch({...Actions.loadStocksComplete, data});
		});
	}
};

ReducerRegistry.register(SCOPE, StockListReducer, INIT_STATE)

