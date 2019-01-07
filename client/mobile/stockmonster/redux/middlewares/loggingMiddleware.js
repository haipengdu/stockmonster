export const loggingMiddleware =  ({loggingSeprator}) => (store) => (next) => (action) => {
	const seprator = loggingSeprator || "*"
	if (__DEV__){
		console.log(seprator.repeat(80));
		console.log('dispatching', action);
    }
    let result = next(action);

    if (__DEV__){
	    console.log('state after dispathcing', store.getState());
	    console.log(seprator.repeat(80));
	}
    return result
}