module.exports = function({types: t}) {
    return {
        visitor: {
            FunctionDeclaration(path) {
                if(path.node.id.name.startsWith("on")) {
                    path.get('body').unshiftContainer(
                        'body', t.expressionStatement(
                            t.callExpression(
                                t.memberExpression(
                                    t.identifier('console'),
                                    t.identifier('log')
                                ),
                                [t.stringLiteral(`call ${path.node.id.name}`), t.stringLiteral('asdf')]
                            )
                        )
                    )
                }
            }
        }
    }
}