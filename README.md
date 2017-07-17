# tonedream

[Heroku link][heroku]

[Trello link][trello]

[heroku]: https://tonedream.herokuapp.com/
[trello]: https://trello.com/b/2NLKQYRR/full-stack-project

## Minimum Viable Product

Tonedream is a web application, inspired by Bandcamp, built using Ruby on Rails
and React/Redux.  Once completed this project will have all of the following
features:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Artist Page
- [ ] Song Player
- [ ] Search
- [ ] Upload/Download Songs
- [ ] Production README [sample](docs/production_readme.md)

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: docs/wireframes
[components]: docs/component-hierarchy.md
[sample-state]: docs/sample-state.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

### Phase 2: Complete Styling of all pages (2 days)

**Objective:** Artist, Album, Sign In, Sign Up, and Search Page

### Phase 3: Album model, Tracks Model, API, and components (2 days)

**Objective:** Albums and Tracks can be created, read, edited and destroyed through
the API. Tracks belong to albums. Artist has many albums and tracks.

### Phase 4: Fully functioning song player (2 days)

**Objective:** Tracks/Albums can be played.

### Phase 5: Search (2 day)

**Objective:** Site can be searched and artists/albums/songs displayed

### Bonus Features (TBD)
- [ ] Purchase Songs
- [ ] Follows
- [ ] Edit Album Page
- [ ] Fan Page
- [ ] Label Page
- [ ] Events
