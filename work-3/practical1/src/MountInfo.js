import React from 'react';

class MountInfo extends React.Component {
    state = {
        hasMounted: false
    };
    componentDidMount() {
        this.setState({
            hasMounted: true
        });
    }
    render() {
        const {children} = this.props;
        const {hasMounted} = this.state;
        return children({hasMounted});
    }
}

class MyComponent extends React.Component {
    componentDidUpdate() {
        const { hasMounted } = this.props;
        console.log(`lifecycle functions can access hasMounted(${hasMounted})`);
    }
    render() {
        const { hasMounted } = this.props;
        return <p>{`hasMounted: ${hasMounted}`}</p>;
    }
}

export default function MyComponentWrapper(props) {
    return (
        <MountInfo>
            {({hasMounted}) => <MyComponent {...props} hasMounted={hasMounted} />}
        </MountInfo>
    );
}