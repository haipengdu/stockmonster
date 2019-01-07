const APIContstants = {
	url: 'https://api.iextrading.com/1.0',
	defaultHeaders : {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  stockTypesMap : {
	"AD": "ADR",
	"RE":"REIT",
	"CE":"ClosedEndFund",
	"SI":"SecondaryIssue",
	"LP":"LimitedPartnerships",
	"CS":"CommonStock",
	"ET":"ETF"
  }
}
export default ApiClient = {
	getAllStockSymbols : () => {
		return fetch(`${APIContstants.url}/ref-data/symbols`, {
			  method: 'GET',
			  headers: {...APIContstants.defaultHeaders}
		  }).then(response => response.json()).
		then(responseJson => {
			const stockMap = {}
			responseJson.forEach( ele => {
				stockMap[ele.symbol] = {
					symbol: ele.symbol,
					type: APIContstants.stockTypesMap[ele.type.toUpperCase()],
					company: ele.name,

				}
			});
			return stockMap;
		});
	}
}