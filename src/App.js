import React, { Component } from 'react';
import './app.css'
import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';
import { fetchData } from './api';


class App extends Component {
  state = {
    data : {},
    country: ''
  }

  handleCountryChange = async (country) => {
    const fatchedData = await fetchData(country);
    // console.log(country)
    // console.log(fatchedData)
    this.setState({data : fatchedData , country : country})
  }

  async componentDidMount(){
    const fatchedData = await fetchData();
    this.setState({data : fatchedData})
    // console.log(data)
  }
  render() {
    const {data , country} = this.state;
    return (
        <div className="container">
        <Cards data={data}/>
        <CountryPicker handleCountryChange = {this.handleCountryChange}/>
        <Chart data={data} country={country}/>

      </div>
    );
  }
}

export default App;

