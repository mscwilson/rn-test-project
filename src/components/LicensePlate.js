import React, { Component } from 'react';
import secrets from '../../secrets';
import { View, Text } from 'react-native';
import axios from 'axios';

class LicensePlate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: [],
    };
  }

  async componentDidMount() {
    const headers = {
      // 'Content-Type': 'application/json',
      'x-api-key': `${secrets}`,
    };
    const body = { registrationNumber: this.props.vin };
    try {
      const response = await axios.post(
        'https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles',
        body,
        { headers },
      );
      this.setState({
        isLoading: false,
        data: response.data,
      });
      // console.log(response.data);
    } catch (error) {
      console.error('There was an error!', error);
    }
  }

  render() {
    return (
      <View>
        <Text>{this.state.data.make}</Text>
        <Text>{this.state.data.colour}</Text>
        <Text>Hello from LicensePlate</Text>
      </View>
    );
  }
}

export default LicensePlate;
