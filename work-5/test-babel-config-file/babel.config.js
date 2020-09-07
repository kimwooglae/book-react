const presets = [
    '@babel/preset-react', 
    [
        '@babel/preset-env', 
        {
            targets: {
                chrome: '66'
            },
            useBuiltIns: 'usage',
            corejs: {version:3, proposals:true}
        }
    ]
];
const plugins = [
    [
        '@babel/plugin-transform-template-literals',
        {
            loose: true
        }
    ]
];

module.exports = { presets, plugins};