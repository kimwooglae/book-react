function myFunc() {
    import('./util').then(({ add }) => 
        import('lodash').then(({ default: _ }) => 
            console.log('value', _.fill([1, 2, 3], add(10, 20)))
        )
    )
}

function myFunc1() {
    import('./util').then(function({ add }) { 
        return import('lodash').then(function({ default: _ }) { 
            return console.log('value', _.fill([1, 2, 3], add(10, 20)));
        })
    })
}

myFunc();
myFunc1();