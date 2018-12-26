class ReducerRegistry {
  constructor() {
    this.reducers = {};
    this.initStates = {};
  }

  getReducers() {
    return { ...this.reducers };
  }

  register(scopeName, reducer, initState = {}) {
    this.reducers[scopeName] = reducer,
    this.initStates[scopeName] = initState
  }

  remove(scopeName) {
    if (this.reducers[scopeName]){
    	delete this.reducers[scopeName]
    }
    if (this.initStates[scopeName]){
      delete this.initStates[scopeName]
    }
  }

  reset(){
    this.reducers = {};
    this.initState = {};
  }
}

/**
 * Export a singleton for general use in the application.
 */
let registry;
const _createReducerRegistry = () => {
  if (!registry) {
    registry = new ReducerRegistry();
  }
  return registry;
};

export default _createReducerRegistry();