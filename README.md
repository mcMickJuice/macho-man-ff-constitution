[Actual site](https://mcmickjuice.github.io/macho-man-ff-constitution/league/constitution)

[Trello Board](https://trello.com/b/rWksYkfd/macho-man-constitution)

# Local dev instructions

* install ruby globally
* `gem install jekyll` to install jekyll globally
* `npm start` to run locally
* Access the site locally via `localhost:4001`.  express proxies all requests that get past webpack middleware (really any asset requests) and sends to jekyll server at `127.0.0.1:5000`.  If you access `127.0.0.1:5000` locally, jekyll created content will work but generated assets managed by webpack will not work.

# Deployment

* check all code we want pushed to gh-pages into master. merge master into gh-pages branch
* this includes webpack bundles

# TODO

* improve deployment flow to not have to manually do this for each deployment
* integrate docker with jekyll for better dev experience and portability of code