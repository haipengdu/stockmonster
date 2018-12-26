import { createActionType } from './dynamicReducers'
import ReducerRegistry from './reducerRegistry'

const SCOPE = 'linksScreen'
const INIT_STATE = {count: 0}

export const LinksScreenReducer = {
	clickCounter: (state, action) => {
		const count = state.count || 0;
		return {...state, count: count + 1}
	},

	resetCounter: (state, action) => {
		return {...state, count: 0}
	},
	state: (state) => state[SCOPE] || INIT_STATE 
}

export const LinksScreenDispatcher = {
	clickCounter:  () => {
		return {
			type: createActionType(SCOPE, "clickCounter")
		};
	},
	scheduleCounter: (time) => (dispatch, getState, {apiClient}) => {
		setTimeout(() => {
			dispatch({
			type: createActionType(SCOPE, "clickCounter")
		});
		}, time)
	},
	resetCounter: () => {
		return {
			type: createActionType(SCOPE, "resetCounter")
		}
	}

}

ReducerRegistry.register(SCOPE, LinksScreenReducer, INIT_STATE)

