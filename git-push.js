var ghpages = require('gh-pages')
var path = require('path')

var repo = 'test-repo'

ghpages.publish(path.join(__dirname, 'dist'), {
    branch: repo,
    user: {
        name: 'Mike Joyce',
        email: 'mikejoyce19@gmail.com'
    }
}, function (err) {
    if (err) {
        console.error('An error has occurred', err)
        return
    }

    console.log(`Stuff pushed to ${repo}`)
})