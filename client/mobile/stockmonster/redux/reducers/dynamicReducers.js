import ReducerRegistry from './reducerRegistry'

const _parseScopeAction = (action) => {
  return action && action.type && action.type.indexOf('/') > 0 ? action.type.split('/') : ["NOT_FOUND_SCOPE", ""];
}

export function createActionType (scopeName, actionTypeName) {
  return `${scopeName}/${actionTypeName}`;
}

export function dynamicReducers (state, action)  {
  const globalState = state || {};
  const [scopeName, scopedAction] = _parseScopeAction(action)
  const reducer = ReducerRegistry.reducers[scopeName]
  let resultState = {...globalState}
  if (reducer){
    //initial state for the reducer
    const initState = ReducerRegistry.initStates[scopeName] || {};
    console.log("reducer init state ", initState);
    if( (typeof reducer[scopedAction]) === 'function' ){
      if (!globalState[scopeName]){
        globalState[scopeName] = initState;
      }
      const resultReducerState =  reducer[scopedAction].call(reducer, globalState[scopeName], action);
      resultState = {...globalState, [scopeName]: resultReducerState};
    } else {
      resultState = {...globalState, [scopeName]: initState};
    }
  }
  return resultState;
}