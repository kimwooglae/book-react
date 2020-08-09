import React from 'react';
import ReactDOM from 'react-dom';
import MyComponent from './MyComponent';

function App() {

  const elem = <a href='http://google.com'>click here</a>;
  console.log(elem);

  const elem1 = <h1>제 나이는 {40+4}<b>살</b> 입니다.</h1>;
  console.log(elem1);

  const elem2 = <MyComponent />;
  console.log(elem2);

  return (
    <div className="App">
      <MyComponent />
      <div id="root1"></div>
    </div>
  );
}

let started = (new Date()).getTime();
let called = 0;
function update() {
  called++;
  let diffed = Math.round(((new Date()).getTime() - started)/1000);
  const element = (
    <div>
      <h1>안녕하세요~</h1>
      <h2>지금까지 {diffed}초가 지났습니다.</h2>
      <h2>지금까지 {called}번 호출되었습니다.</h2>
      <h2>예상보다 {diffed - called}번 덜 호출되었습니다.</h2>
    </div>
  )
  ReactDOM.render(element, document.getElementById('root1'));
}

setInterval(update, 1000);
export default App;
