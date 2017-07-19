```js
{
  sessions: {
    currentUser: {
      id: 1,
      email: 'michealhoenig@gmail.com',
      artist: 'Micheal Hoenig',
      bio: '70s german synth/kraut',
      location: 'San Francisco',
    },
    errors: {
      base: ['invalid username or password'],
      username: ["can't be blank"],
      password: ['is too short (minimum is 6 characters)'],
    },
  },
  users: {
    1: {
      id: 1,
      email: 'michealhoenig@gmail.com',
      artist: 'Micheal Hoenig',
      bio: '70s german synth/kraut',
      location: 'San Francisco',
    },
  },
  albums: {
    1: {
      id: 1,
      artistId: 1,
      title: 'Departure From Northern Wasteland',
      artworkUrl: 'cover_art.png',
      numTracks: 10,
      },
    },
  },
  tracks: {
    1: {
      id: 1,
      title: 'Hanging Garden Transfer',
      albumId: 1,
      albumUrl: 'https://www.tonedream.com/api/albums/1'
    },
  },
}
```
