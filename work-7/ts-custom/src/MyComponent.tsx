import React from 'react';

interface Props {
    name: string;
    age?: number;
}

const MyComponent: React.FunctionComponent<Props> = function({name, age=23}) {
    return (
        <div>
            <p>{name}</p>
            <p>{age}</p>
        </div>
    )
}

export default MyComponent;
