json.id album.id
json.title album.title
json.genre album.genre
json.image_url album.image.url
json.tracks album.tracks do |track|
  json.title track.title
  json.audio_url track.audio.url
end