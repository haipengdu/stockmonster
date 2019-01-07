import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { ScrollView, SectionList, StyleSheet , Text, View} from 'react-native';
import { SearchBar } from 'react-native-elements'

import {FavoriteStocksDispatcher, FavoriteStocksReducer} from '../redux/reducers/favoriteStocksReducer';

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    stocks: FavoriteStocksReducer.state(state).stocks
  };
};

const mapDispatchToProps = {
    addFavoriteStocks: FavoriteStocksDispatcher.addFavoriteStocks,
    loadFavoriteStocks: FavoriteStocksDispatcher.loadFavoriteStocks
};

export class FavoriteStocksScreen extends React.Component {
  static navigationOptions = {
    //title: 'Favorite Stocks',
    header: (
       <View style = {{ height: 90,  flex:1}}>
        <Text style = {{paddingTop: 60}} > Favorite </Text>
        </View>
      )
  };

  static defaultProps  = {
      stocks: []
  };

  static propTypes = {
    addFavoriteStocks: PropTypes.func.isRequired,
    loadFavoriteStocks: PropTypes.func.isRequired,
    stocks: PropTypes.array
  };

 constructor(props){
  super(props);
 }

 componentDidMount() {
    this.props.loadFavoriteStocks();
  };

  render() {
    const stocks = this.props.stocks || []
    return (
      <View style={styles.container}>
        <SearchBar
        onChangeText={ (text) => alert(text) }
        placeholder='Type Here...' 
        />

        <SectionList
          sections={[
            {title: 'D', data: ['Devin']},
            {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
   container: {
   flex: 1,
   paddingTop: 0,
   backgroundColor: "red"
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteStocksScreen);