import React from 'react';

class MouseTracer extends React.Component {
    state = {
        x: null,
        y: null
    };

    onMouseMove = (e) => {
        this.setState({
            x: e.clientX,
            y: e.clientY
        });
    };

    render() {
        debugger;
        const { children } = this.props;
        const { x, y } = this.state;
        return <div onMouseMove={this.onMouseMove}>{children({x, y})}</div>;
    }
}


export default function MyComonent() {
    return (
        <MouseTracer >{({x, y}) => {
            return <p> {`(x, y): (${x}, ${y})`}</p>;
        }}</MouseTracer>
    )
}