import {createActionType, dynamicReducers} from '../../../redux/reducers/dynamicReducers';
import ReducerRegistry from '../../../redux/reducers/reducerRegistry'

describe('Dynamic Reducers', () => {
  beforeEach(() => {
    ReducerRegistry.reset();
  });

  it('Return empty state with null state', async () => {
    const state = dynamicReducers(null, null);
    console.log('the result state', state);
    expect(state).toEqual({});
  });

 it('Return original state that cannot find the reducer', async () => {
 	const originState = {"test": {"a": 0}}
    const state = dynamicReducers(originState, { type: "unknown/action" });
    console.log('the result state', state);
    expect(state).toEqual(originState);
  });

  it('Return original state with reducer init state that can find the reducer but not the action function', async () => {
  	const scopeState = {"b": 1};
 	const originGlobalState = {"other": {"a": 0}};
 	const scope = "test";
 	const action = createActionType(scope, "notAction"); 
 	const reducer = {}
 	ReducerRegistry.register(scope, reducer, scopeState)

 	const state = dynamicReducers(originGlobalState, {type: action});
 	console.log('the result state', state);
    expect(state).toEqual( {...originGlobalState, [scope]: scopeState});
  });

it('Return original state with reducer changed state that can find the reducer and the action function', async () => {
  	const scopeState = {"b": 1};
 	const originGlobalState = {"other": {"a": 0}};
 	const scope = "test";
 	const scopedAction = "complete";
 	const action = createActionType(scope, scopedAction); 
 	const reducer = {
 		complete (state, action){
 			return {...state, "fromAction": action.type}
 		}
 	}
 	ReducerRegistry.register(scope, reducer, scopeState)

 	const state = dynamicReducers(originGlobalState, {type: action});
    expect(state).toEqual( {...originGlobalState, [scope]: {...scopeState, "fromAction": action}});
    console.log('the result state', state);
  });
  
}); 
