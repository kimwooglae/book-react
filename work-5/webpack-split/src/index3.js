console.log("AAAAA");
debugger;
function myFunc() {
    import('./util').then(({ add }) => 
        import('lodash').then(({ default: _ }) => 
            console.log('myFunc value', _.fill([1, 2, 3], add(10, 20)))
        )
    )
}

myFunc();

function myFunc1() {
    import('./util').then(function({ add }) { 
        return import('lodash').then(function({ default: _ }) { 
            console.log('myFunc1 value', _.fill([1, 2, 3], add(10, 20)));
        })
    })
}

myFunc1();


async function myFunc2() {
    const [{ add }, { default: _}] = await Promise.all([
        import("./util"),
        import("lodash")
    ]);
    console.log('myFunc2 value', _.fill([1, 2, 3], add(10, 20)));
}

myFunc2();