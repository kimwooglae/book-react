import React, { createRef } from 'react';

interface Props {
    containerStyle: React.CSSProperties;
    theme: string;
}

const defaultProps = {
    theme: 'dark'
};

interface State {
    name: string;
    age?: number;
}

class MyComponent extends React.Component<Props, State> {
    state: State = {
        name: 'mike'
    };

    static defaultProps = defaultProps;
    pRef = createRef<HTMLParagraphElement>();
    onClick1 = (e: EventObject) => {
        console.log(e.currentTarget.dataset.food);
    };
    onClick2 = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(`${e.clientX}, ${e.clientY}`);
    };
    render() {
        const { containerStyle, theme } = this.props;
        const { name, age } = this.state;
        return (
            <div style={containerStyle}>
                <p ref={this.pRef}>{name}</p>
                <p>{`${name} ${age}`}</p>
                <p>{`theme is ${theme.substr(1)}`}</p>
                <button data-food="soup" onClick={this.onClick1}>
                    버튼1
                </button>
                <button onClick={this.onClick2}>버튼2</button>
            </div>
        );
    }
}
