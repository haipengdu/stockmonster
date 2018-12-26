import {loggingMiddleware} from './loggingMiddleware'
import thunk from 'redux-thunk';

export const configureMiddlewares =  (helpers) => {
	return [
		loggingMiddleware(helpers),
		thunk.withExtraArgument(helpers)
	];
}