import { AsyncStorage } from "react-native"

export const STORAGE_KEYS = {
	STOCK_BY_SYMBOLS: "stock-by-symbols",
	FAVORITE_STOCK: "favorite-stock"
}

export default LocalStorage = {
	getAllStocks : () => {
		return AsyncStorage.getItem(STORAGE_KEYS.STOCK_BY_SYMBOLS)
		.then((value) => JSON.parse(value), (reason) => { console.log("%%%" + reason); return {}; });
	},
	setAllStocks: (stockData) => {
		return AsyncStorage.setItem(STORAGE_KEYS.STOCK_BY_SYMBOLS, JSON.stringify(stockData))
		 .then(() => true, () => false);
	},
	getFavoriteStocks: () => {
		return AsyncStorage.getItem(STORAGE_KEYS.FAVORITE_STOCK)
		.then((value) => JSON.parse(value), (reason) => { console.log("%%%" + reason); return []; });
	},
	addFavoriteStocks: (stockSymbols) => {
		return AsyncStorage.mergeItem(STORAGE_KEYS.FAVORITE_STOCK, JSON.stringify(stockSymbols))
		 .then(() => true, () => false);
	}

}