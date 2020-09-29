import React, { Component } from 'react';
import MyComponent2 from './MouiseTracer';
import MyComponent3 from './MountInfo';

function App() {
  return (
    <div>
      <MyComponent />
      
      <MyComponent1 />
    
      <MyComponent2 />

      <MyComponent3 />
    </div>
  );
}

export default App;

class MyComponent extends React.Component {
  state = {
    text: ''
  };

  divRef = React.createRef();
  componentDidUpdate() {
    const div = this.divRef.current;
    const rect = div.getBoundingClientRect();
    // console.log("componentDidUpdate", div.scrollWidth, rect.width);
    if( div.scrollWidth > rect.width) {
      alert('스크롤이 가능합니다.');
    }
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  onChange = event => {
    const text = event.target.value;
    // console.log("onChange", text);
    this.setState({text});
  };
  render() {
    const { text } = this.state;
    // console.log("render", text);
    return (
      <React.Fragment>
        <input onChange={this.onChange} value={text} />
        <div ref={this.divRef} style={{width:1000, height:100, backgroundColor:'gray', overflow: 'scroll'}}>
          {text}
        </div>
      </React.Fragment>
    );
  }
}


class MyComponent1 extends Component {
  state = {
    count: 0
  };

  onClickHello = e => {
    e.preventDefault();
    alert('hello world');
  }

  onClickDec = () => {
    const {count} = this.state;
    console.log("onclickDec", count);
    this.setState({count:count-1});
  };

  onClickInc = () => {
    const {count} = this.state;
    console.log("onclickInc", count);
    this.setState({count:count+1});
  };

  render() {
    return (
      <div>
        <button onClick={this.onClickHello}>hello</button>
        <button onClick={this.onClickDec}>dec</button>
        <button onClick={this.onClickInc}>inc</button>
      </div>
    )
  }
}