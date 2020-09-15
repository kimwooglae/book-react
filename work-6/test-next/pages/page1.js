import Icon from '../static/icon.png';
import Link from 'next/link';
import { add } from '../src/util';
import styled from 'styled-components';

const MyP = styled.div`
    color: blue;
    font-size: 18pt;
`;

function Page1() {
    return (
        <div>
            <MyP>This is home page(page1)</MyP>
            <MyP>{`10 + 20 = ${add(10,20)}`}</MyP>
            <img src={Icon} />
            <Link href="/page2"><a>page2로 이동</a></Link>
        </div>
    );
}
export default Page1