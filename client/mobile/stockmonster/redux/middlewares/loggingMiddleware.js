export const loggingMiddleware =  ({loggingSeprator}) => (store) => (next) => (action) => {
	const seprator = loggingSeprator || "*"
	console.log(seprator.repeat(80));
	console.log('dispatching', action);
    let result = next(action);
    console.log('state after dispathcing', store.getState());
    console.log(seprator.repeat(80));
    return result
}