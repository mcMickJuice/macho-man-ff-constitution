var ghpages = require('gh-pages')
var path = require('path')


ghpages.publish(path.join(__dirname, 'dist'), {
    message: `deploying to branch: gh-pages`,
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

