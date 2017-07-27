json.id @album.id
json.title @album.title
json.date @album.date
json.user_id @album.user_id
json.image_url @album.image.url
json.tracks @album.tracks do |track|
  json.title track.title
  json.audio_url track.audio.url
  json.track_num track.track_num
  json.download track.download
  json.id track.id
end
