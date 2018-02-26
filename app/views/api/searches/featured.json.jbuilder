@featured_artists.each do |artist|
  json.set! artist.id do
    json.name artist.name
    json.id artist.id
    json.location artist.location
    json.image_url artist.image.url
  end
end

