import Icon from '../static/icon.png';
import Link from 'next/link';
import { add } from '../src/util';

function Page1() {
    return (
        <div>
            <p>This is home page(page1)</p>
            <p>{`10 + 20 = ${add(10,20)}`}</p>
            <img src={Icon} />
            <Link href="/page2"><a>page2로 이동</a></Link>
        </div>
    );
}
export default Page1