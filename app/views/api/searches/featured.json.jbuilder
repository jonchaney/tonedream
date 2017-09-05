count = 1
@featured_albums.each do |artist|
  json.set! count do
    json.name artist.band
    json.id artist.id
    json.image_url artist.image.url
  end
  count += 1
end

