import React from 'react';
import { getValue } from './legacy';
import _ from 'lodash';
import Icon from './icon.png';

window.setTimeout(function(){}, 1000);
window.myValue = 22;

type EventObject<T = HTMLElement> = React.SyntheticEvent<T>;
type EventFunc<T = HTMLElement> = (e: EventObject<T>) => void;

function App({name, age}:{name:string; age:number}) {
    const val:number = getValue();
    console.log(val);

    console.log("val".padStart(5,'0'));

    return (
        <div>
            <p>{name}</p>
            <p>{age}</p>
            <img src={Icon} />
        </div>
    );
}
export default App;