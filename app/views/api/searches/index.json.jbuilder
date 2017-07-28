@results.each do |key, result|
  json.set! key do
    json.type result[:type]
    json.id result[:id]
    json.name result[:name]
    json.image result[:image].url
  end
end