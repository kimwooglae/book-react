console.log("BBBB - yes ");
async function myFunc() {
    await new Promise(res => setTimeout(res, 10000));
    const [{ add }, { default: _ }] = await Promise.all([
        // import('./util'),
        // import('lodash')
        import(/* webpackPreload: true*/ './util'),
        import(/* webpackPrefetch: true*/ 'lodash')
    ]);
    console.log('myFunc value', _.fill([1, 2, 3], add(10, 20)));
}

myFunc();