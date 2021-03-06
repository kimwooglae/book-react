import React from 'react';
import ReactDOM from 'react-dom';
import MyComponent from './MyComponent';
import MyComponent1 from './MyComponent1';
import WidthPrinter from './WidthPrinter';
import WidthPrinter1 from './WidthPrinter1';

function App() {

  const elem = <a href='http://google.com'>click here</a>;
  console.log(elem);

  const elem1 = <h1>제 나이는 {40+4}<b>살</b> 입니다.</h1>;
  console.log(elem1);

  const elem2 = <MyComponent />;
  console.log(elem2);

  return (
    <div className="App">
      <div>
        <div>상단 메뉴</div>
        <Profile username="mike" />
        <div>하단 메뉴</div>
      </div>
      <MyComponent />
      <MyComponent1 />
      <WidthPrinter />
      <WidthPrinter1 />
      <div id="root1"></div>
    </div>
  );
}

function Profile({username}) {
  return (
    <div>
      <Greeting username={username} />
    </div>
  )
}

function Greeting({username}) {
  return <p>{`${username}님 안녕하세요.`}</p>
}
let started = (new Date()).getTime();
let lastCalled = (new Date()).getTime();
let intervalTime = [];
let called = 0;
function update() {
  called++;

  let diffed = Math.round(((new Date()).getTime() - started)/1000);
  let interval = ((new Date()).getTime() - lastCalled);

  intervalTime.push(interval);
  lastCalled = (new Date()).getTime();

  const element = (
    <div>
      <h1>안녕하세요~</h1>
      <h2>지금까지 {diffed}초가 지났습니다.</h2>
      <h2>지금까지 {called}번 호출되었습니다.</h2>
      <h2>예상보다 {diffed - called}번 덜 호출되었습니다.</h2>
  <div>{intervalTime.join("  ")}</div>
    </div>
  )
  ReactDOM.render(element, document.getElementById('root1'));
}

setInterval(update, 1000);
export default App;
