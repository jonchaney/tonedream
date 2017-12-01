![logo](docs/image_concepts/logo1a.jpg)


[Live Demo][tonedream]

[tonedream]: https://tonedream.herokuapp.com/

Tonedream is an independent music network built using Ruby on Rails
and React/Redux. 

# Tonedream Features

## Album Pages

![artist_page](docs/images/artist-page.png)

All user's on tonedream can be the admin of multiple artists. They can upload their music, or other if they are a record label, and allow others to download it. They also have the option of making it only available for streaming. Above is a screenshot of an album page.

## Audio Player

![artist_page](docs/images/sound_player.png)

The song player uses the React Howler Audio Player, which is a wrapper for the Web Audio API. It allows for shuffle, looping a single track, and looping an album.

## Search

A search feature allows for quick search of the database for music. The results are split up into tracks, albums, and artists.

![artist_page](docs/images/search.png)


# The Future

Planned features:

## Audio Player

Add sound bar and volume adjustment. Implement "add to up next feature" which will add a song to a queue to be played next.

## Purchases

Implementation of Stripe or Square API to allow users to sell music. 

## Follows and a "wall"

Allow User's to follow Artists and Record Labels. Create a Facebook like wall where artists can share events and news that will be shown to their followers.

## Events

Provide a space for fans to go to know where their favorite bands are playing. Facebook style events.
