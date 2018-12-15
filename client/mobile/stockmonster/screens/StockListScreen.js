import React from 'react';
import { ScrollView, StyleSheet , Text} from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class StockListScreen extends React.Component {
  static navigationOptions = {
    title: 'Stocks',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.optionsText}>
            This is the list i want
          </Text>
           <Text style={styles.optionsText}>
            TWTR
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