var ghpages = require('gh-pages')
var path = require('path')


//really, i should read in gitconfig and build this up that way...
//./_site, ./.vscode, ./build, ./node_modules, webpack.config.js, ./src
// var ignoreFiles = ['_site', 'build', 'node_modules', 'webpack.config.js', 'src']
// var ignorePattern = ignoreFiles.map(f => {
//     return `!${f}`;
// })

// ghpages.publish(path.join(__dirname, './'), {
//     message: `deploying to branch: test`,
//     user: {
//         name: 'Mike Joyce',
//         email: 'mikejoyce19@gmail.com'
//     },
//     branch: 'test',
//     src: ignorePattern,
//     logger: function(message) {
//         console.log(message)
//     }
// }, function (err) {
//     if (err) {
//         console.error('An error has occurred', err)
//         return
//     }
// })
//this doesnt work. cant get directory copying to work. looks like src only looks for files to copy

