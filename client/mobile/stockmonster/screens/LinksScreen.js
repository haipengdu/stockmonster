import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Button, Platform, ScrollView, StyleSheet, Text, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

import HomeScreen from './HomeScreen';
import {LinksScreenDispatcher, LinksScreenReducer} from '../redux/reducers/linksScreenReducer';
import TabBarIcon from '../components/TabBarIcon';

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    count: LinksScreenReducer.state(state).count
  };
};

const mapDispatchToProps = {
    clickCounter: LinksScreenDispatcher.clickCounter,
    scheduleCounter: LinksScreenDispatcher.scheduleCounter,
    resetCounter: LinksScreenDispatcher.resetCounter
};

export class LinksScreen extends React.Component {
  static navigationOptions = {
    title: "Links"
  };

  static defaultProps  = {
      count: 0
  };

  static propTypes = {
    clickCounter: PropTypes.func.isRequired,
    count: PropTypes.number.isRequired,
    resetCounter: PropTypes.func.isRequired,
  }

  constructor () {
    super();
  }

  componentDidMount() {
    //this.props.clickCounter();
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
        
        <Text> Count: {this.props.count} </Text>
        <View>
        <Button
          onPress={this.props.clickCounter}
          title="Add Count"
          color="#00f"
        />
        <Button
          onPress={this.props.resetCounter}
          title="Reset Count"
          color="#f00"
        />
        <Button
          onPress={ () => {this.props.scheduleCounter(3000);} }
          title="Schedule Count"
          color="#ff0"
        />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#ff0',
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LinksScreen);
