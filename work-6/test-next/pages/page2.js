import { callApi } from '../src/api';
import Router from 'next/router';
import { add } from '../src/util';

Page2.getInitialProps = async({ query }) => {
    const { sayHello } = await import('../src/sayHello');
    console.log(sayHello(), '!!!!');
    const text = query.text || 'none';
    const data = await callApi();
    // throw new Error('exception in page2')
    return { text, data }
}

export default function Page2({ text, data}) {
    function onClick() {
        import('../src/sayHello').then(({sayHello}) => console.log(sayHello()));
    }

    return (
        <div>
            <p>this is home page2</p>
            <p>{`10 + 20 = ${add(10,20)}`}</p>
            <p>{`text: ${text}`}</p>
            <p>{`data is ${data}`}</p>
            <button onClick={onClick}>sayHello</button>
            <button onClick={() => Router.push('/page1')}>page1로 이동</button>
        </div>
    )
}