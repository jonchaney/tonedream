@featured_artists.each do |artist|
  json.set! artist.id do
    json.name artist.name
    json.id artist.id
    json.image_url artist.image.url
  end
end

