@albums.each do |album|
  json.set! album.id do 
    json.id album.id
    json.albumname album.albumname
    json.email album.email
    json.band album.band
    json.bio album.bio
    json.location album.location
    json.image_url asset_path(album.image.url)
  end
end 