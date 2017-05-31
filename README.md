[Actual site](https://mcmickjuice.github.io/macho-man-ff-constitution/league/constitution)

[Trello Board](https://trello.com/b/rWksYkfd/macho-man-constitution)

# Local dev instructions

* install ruby globally
* `gem install jekyll` to install jekyll globally
* `npm run start-site` to run locally
* I think you need to access site via 127.0.0.1/5000 ... i think. localhost:5000 does not work

# Deployment

* check all code we want pushed to gh-pages into master. merge master into gh-pages branch
* this includes webpack bundles

# TODO

* improve deployment flow to not have to manually do this for each deployment
* integrate docker with jekyll for better dev experience and portability of code