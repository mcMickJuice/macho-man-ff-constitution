var ghpages = require('gh-pages')
var path = require('path')

var repo = 'test-branch1'


ghpages.publish(path.join(__dirname, 'dist'), {
    branch: repo,
    message: `deploying to branch: ${repo}`,
    user: {
        name: 'Mike Joyce',
        email: 'mikejoyce19@gmail.com'
    },
    logger: function(message) {
        console.log(message)
    }
}, function (err) {
    if (err) {
        console.error('An error has occurred', err)
        return
    }

    console.log(`Stuff pushed to ${repo}`)
})

