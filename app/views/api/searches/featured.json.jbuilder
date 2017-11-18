@featured_artists.each do |artist|
  json.set! artist.id do
    json.name artist.name
    json.artist_id artist.id
    json.image_url artist.image.url
  end
end

