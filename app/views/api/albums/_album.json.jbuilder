json.id album.id
json.title album.title
json.date album.date
json.artist_id album.artist_id
json.image_url album.image.url

album.tracks.each do |track|
  json.set! track.track_num do 
    json.title track.title
    json.audio_url track.audio.url
    json.track_num track.track_num
    json.download track.download
    json.duration track.duration
  end
end
