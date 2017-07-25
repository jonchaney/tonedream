@albums.each do |album|
  json.set! album.id do 
    json.id album.id
    json.title album.title
    json.date album.date
    json.genre album.genre
    json.image_url asset_path(album.image.url)
  end
end 