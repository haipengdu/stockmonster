import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { ScrollView, StyleSheet , Text} from 'react-native';
import { ExpoLinksView } from '@expo/samples';

import {StockListDispatcher, StockListReducer} from '../redux/reducers/stockListReducer';

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    stocks: StockListReducer.state(state).stocks
  };
};

const mapDispatchToProps = {
    loadStocks: StockListDispatcher.loadStocks
};

export class StockListScreen extends React.Component {
  static navigationOptions = {
    title: 'Stocks',
  };

  static defaultProps  = {
      stocks: {}
  };

  static propTypes = {
    loadStocks: PropTypes.func.isRequired,
    stocks: PropTypes.object.isRequired,
  };

 constructor(props){
  super(props);
 }

 componentDidMount() {
    this.props.loadStocks()
  };

  render() {
    const stocks = this.props.stocks || {}
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.optionsText}>
            This is the list i want
          </Text>
           <Text style={styles.optionsText}>
            TWTR: {JSON.stringify(stocks["TWTR"])}
          </Text>
           <Text style={styles.optionsText}>
            NBC
          </Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  optionsText: {
    fontSize: 15,
    color: '#f00',
    marginTop: 1,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(StockListScreen);