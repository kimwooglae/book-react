import React from 'react';
import style from './Box3.module.scss';
import cn from 'classnames';

function Box({ size }) {
    if(size === 'big') {
        return <div className={`${style.box} ${style.big}`}>큰 박스</div>
    } else {
        return <div className={cn(style.box, style.small)}>작은 박스</div>
    }
}
export default Box;