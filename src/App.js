import React, { Component } from 'react';
import CardImage from './components/cardImage';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    };

  }

  componentWillMount() {
    const oReq = new XMLHttpRequest();
    oReq.onload = function (e) {
      const sRes = oReq.response; // not responseText
      const oRes = JSON.parse(sRes);
      this.setState({
        data: [oRes[0]]
      })
    }.bind(this)
    oReq.open("GET", "https://jsonplaceholder.typicode.com/comments");
    oReq.send()

  }

  render() {
    const { data } = this.state;
    return (
      <div className="card-columns">
        {data.map((curr, i) => <CardImage {...curr} key={i} />)}
      </div>
    );
  }
}

export default App;
