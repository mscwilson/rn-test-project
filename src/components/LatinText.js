import React from 'react'
import axios from 'axios';
import JsonPlaceholder from '../api/JsonPlaceholder'

class LatinText extends React.component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      data: [],
    }
  }

  async componentDidMount() {
    try {
      const response = await JsonPlaceholder.get();
      this.setState(
        {
          isLoading: false,
          data: response,
        }
      )
    }
    catch(error) { console.error(error)}
  }

  render() {
    return (
      {this.state.data}
    )
  }
}

export default LatinText
