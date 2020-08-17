import React, { useCallback } from 'react';

/* 렌더링을 할 때마다 새로운 함수를 만들어서 자식 컴포넌트의 속성값으로 전달 */
function Parent() {
    const [selectedFruit, setSelectedFruit] = useState('apple');
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>{`count: ${count}`}</p>
            <button onClick={() => setCount(count + 1)}>increase count</button>
            <SelectFruit selected={selectedFruit}
                onChange={fruit => setSelectedFruit(fruit)} />
        </div>
    )
}

/* use State의 상탯값 변경 함수를 입력하여 속성값을 고정 */
function Parent1() {
    const [selectedFruit, setSelectedFruit] = useState('apple');
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>{`count: ${count}`}</p>
            <button onClick={() => setCount(count + 1)}>increase count</button>
            <SelectFruit selected={selectedFruit} onChange={setSelectedFruit} />
        </div>
    )
}

/* useCallback을 이용하여 속성값을 고정 */
function Parent2() {
    const [selectedFruit, setSelectedFruit] = useState('apple');
    const [count, setCount] = useState(0);
    const onChangeFruit = useCallback(fruit => {
        setSelectedFruit(fruit);
        sendLog({type: "fruit change", value:fruit});
    }, []);
    return (
        <div>
            <p>{`count: ${count}`}</p>
            <button onClick={() => setCount(count + 1)}>increase count</button>
            <SelectFruit selected={selectedFruit} onChange={onChangeFruit} />
        </div>
    )
}

/* 렌더링을 할 때마다 새로운 객체를 만들어서 자식 컴포넌트에 전달 */
function SelectFruit({selectedFruit, onChange}) {
    return (
        <div>
            <Select options={[
                {name:"apple", price: 500},
                {name:"banana", price: 1000},
                {name:"orange", price: 1500},
            ]}
            selected={selectedFruit}
            onChange={onChange} />
        </div>
    )
}

/* 변하지 않는 상수 변수로 관리하기 */
function SelectFruit1({selectedFruit, onChange}) {
    return (
        <div>
            <Select options={FRUITS} selected={selectedFruit}
                onChange={onChange} />
        </div>
    )
}

const FRUITS = [
    {name:"apple", price: 500},
    {name:"banana", price: 1000},
    {name:"orange", price: 1500}
]

/* 상탯값을 이용해서 속성값을 계산 */
function SelectFruit2({selectedFruit, onChange}) {
    const [maxPrice, setMaxPrice] = useState(1000);

    return (
        <div>
            <Select options={FRUITS.filter(item => item.price <= maxPrice)}
                selected={selectedFruit}
                onChange={onChange} />
        </div>
    )
}

/*useMemo 훅을 이용해서 속성값을 계산 */
function SelectFruit3({selectedFruit, onChange}) {
    const fruits = useMemo(() => FRUITS.filter(item => item.price <= maxPrice), [maxPrice]);
    return (
        <div>
            <Select options={fruits} selected={selectedFruit} onChange={onChange} />
        </div>
    )
}
