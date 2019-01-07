import { createActionType } from './dynamicReducers'
import ReducerRegistry from './reducerRegistry'

const SCOPE = 'linksScreen';
const INIT_STATE = {count: 0};
const actionType = (type) => createActionType(SCOPE, type);

const Actions = {
	clickCounter: {
		type: actionType("clickCounter")
	},
	resetCounter: {
		type: actionType("resetCounter")
	}
};

export const LinksScreenReducer = {
	clickCounter: (state, action) => {
		const count = state.count || 0;
		return {...state, count: count + 1};
	},
	resetCounter: (state, action) => {
		return {...state, count: 0};
	},
	state: (state) => state[SCOPE] || INIT_STATE 
};

export const LinksScreenDispatcher = {
	clickCounter:  () => {
		return Actions.clickCounter;
	},
	scheduleCounter: (time) => (dispatch, getState, {stockApiClient}) => {
		stockApiClient.getAllStockSymbols().then((responseData) => {
			dispatch(Actions.clickCounter);
		}, time);
	},
	resetCounter: () => {
		return Actions.resetCounter
	}
};

ReducerRegistry.register(SCOPE, LinksScreenReducer, INIT_STATE)

