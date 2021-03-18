import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class LatinText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: [],
    };
  }

  async componentDidMount() {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts/1',
      );
      this.setState({
        isLoading: false,
        data: response.data,
      });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <View>
        <Text>{this.state.data.title}</Text>
        <Text>Hello from LatinText</Text>
      </View>
    );
  }
}

export default LatinText;
