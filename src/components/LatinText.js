import React, { Component } from 'react';
import { View } from 'react-native';
import JsonPlaceholder from '../api/JsonPlaceholder';

class LatinText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: [],
    };
  }

  async componentDidMount() {
    console.log('here in componentDidMount');
    try {
      const response = await JsonPlaceholder.get();
      this.setState({
        isLoading: false,
        data: response,
      });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return <View>{this.state.data}</View>;
  }
}

export default LatinText;
