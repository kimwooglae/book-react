import React, { useState, useRef, useEffect, useCallback } from 'react';
import Profile1 from './useReducer';

const UserContext = React.createContext({username: '', helloCount: 0});
const SetUserContext = React.createContext(() => {})
const ThemeContext = React.createContext('dark');

function App() {
  const [user, setUser] = useState({username : 'mikke', helloCount: 0});
  return (
    <div>
      <ThemeContext.Provider value="dark">
        <SetUserContext.Provider value={setUser}>
          <UserContext.Provider value={user}>
            <div>상단 메뉴</div>
            <Profile />
            <div>하단 메뉴</div>
          </UserContext.Provider>
        </SetUserContext.Provider>
      </ThemeContext.Provider>
      <input type="text" value={user.username} onChange={e => setUser({username: e.target.value})} />
      <Form/>

      <Form1/>

      <Form2/>
      <><input></input>aa</>

      <Profile1 />
    </div>
  );
}

export default App;

function Form2() {
  const inputRef = useRef();
  const [showText, setShowText] = useState(true);

  return (
    <div>
      {showText && <input type="text" ref={inputRef} />}
      <button onClick={() => setShowText(!showText)}>텍스트 보이기/가리기</button>
      <button onClick={() => inputRef.current && inputRef.current.focus()}>텍스트로 이동</button>
    </div>
  )
}

function Form1() {
  const ININTIAL_TEXT = "가가";
  const [text, setText] = useState(ININTIAL_TEXT);
  const [showText, setShowText] = useState(true);
  const setInitialText = useCallback(ref => ref && setText(ININTIAL_TEXT), []);
  return (
    <div>
      {showText && (
        <input
          type="text" 
          ref={setInitialText} 
          value={text}
          onChange={e => setText(e.target.value)}
        />
      )}
      <button onClick={() => setShowText(!showText)}>보이기/가리기</button>
    </div>
  );
}

function TextInput({inputRef}) {
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button>저장</button>
    </div>
  )
}

const TextInput1 = React.forwardRef((props, ref) => (
  <div>
    <input type="text" ref={ref} />
    <button>저장1</button>
  </div>
));

function Form() {
  const inputRef = useRef();
  const inputRef1 = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <TextInput inputRef={inputRef} />
      <button onClick={() => inputRef.current.focus()}> 텍스트로 이동 </button>
      <TextInput1 ref={inputRef1} />
      <button onClick={() => inputRef1.current.focus()}> 텍스트로 이동(1) </button>
    </div>
  );
}

// function Profile() {
//   return (
//     <div>
//       <Greeting/>
//     </div>
//   );
// }

const Profile = React.memo(() => {
  return (
    <div>
      <Greeting></Greeting>
    </div>
  )
})

function Greeting() {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <SetUserContext.Consumer>
          {setUser => (
            <UserContext.Consumer>
              {({username, helloCount}) => (
                <div>
                  <p style={{color: theme === 'dark' ? 'gray' : 'green'}}>{`${username}님 안녕하세요. `}</p>
                  <p>{`인사 횟수: ${helloCount}`}</p>
                  <button onClick={() =>
                    setUser({username, helloCount:helloCount + 1})}> 인사 하기
                  </button>
                </div>
              )}
            </UserContext.Consumer>
          )}
        </SetUserContext.Consumer>
      )}
    </ThemeContext.Consumer>
  )
}