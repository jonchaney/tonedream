json.id @album.id
json.title @album.title
json.date @album.date
json.user_id @album.user_id
json.image_url @album.image.url

json.tracks do
  @album.tracks.each_with_index do |track, idx|
    json.set! track.track_num do 
      json.title track.title
      json.audio_url track.audio.url
      json.track_num track.track_num
      json.download track.download
      json.id track.id
      json.user_id track.user_id
      json.album_id track.album_id
      json.duration track.duration
    end
  end

end