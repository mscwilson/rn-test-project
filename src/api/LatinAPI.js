import axios from 'axios';
import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

export default class FetchGetExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: [],
    };
  }

  componentDidMount() {
    return axios
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson,
          },
          function () {},
        );
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />>
        </View>
      );
    }

    return (
      <View style={{ flex: 1, padding: 20 }}>
        <FlatList
          data={this.state.dataSource}
          // ItemSeparatorComponent = {this.FlatListItemSeparator}
          renderItem={({ item }) => (
            <Text>
              text
              {item.title}, {item.body}
            </Text>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    );
  }
}
