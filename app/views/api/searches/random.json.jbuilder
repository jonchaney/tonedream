count = 1
@random_albums.each do |album|
  json.set! count do
    json.id album.id
    json.title album.title
    json.band album.artist.band
    json.user_id album.user.id
    json.image album.image.url
  end
  count += 1
end