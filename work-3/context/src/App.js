import React, { useState, useRef, useEffect } from 'react';

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
    </div>
  );
}

export default App;

function TextInput({inputRef}) {
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button>저장</button>
    </div>
  )
}

function Form() {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <TextInput inputRef={inputRef} />
      <button onClick={() => inputRef.current.focus()}> 텍스트로 이동 </button>
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