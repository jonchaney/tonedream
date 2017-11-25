@results.each do |item, result|
  json.set! item do
    json.type result[:type]
    json.id result[:artist_id]
    if result[:type] != "Artist"
      json.id result[:album_id]
    end
    json.name result[:name]
    json.image result[:image]
  end
end