class Api::SearchesController < ApplicationController
  def index
    query = search_params[:query].downcase
    users = User.where("LOWER(band) ~ ?", query)
    albums = Album.where("LOWER(title) ~ ?", query)
    tracks = Track.where("LOWER(title) ~ ?", query)
    @results = {}
    counter = 1;

    users.each do |user|
      @results[counter] = {}
      @results[counter][:type] = "artist"
      @results[counter][:id] = user.id
      @results[counter][:name] = user.band
      @results[counter][:artist] = user.band
      @results[counter][:image] = user.image.url
      counter += 1
    end

    albums.each do |album|
      @results[counter] = {}
      @results[counter][:type] = "album"
      @results[counter][:id] = album.user_id
      @results[counter][:name] = album.title
      @results[counter][:artist] = album.user.band
      @results[counter][:image] = album.image.url
      counter += 1
    end

    tracks.each do |track|
      @results[counter] = {}
      @results[counter][:type] = "track"
      @results[counter][:id] = track.album.user_id
      @results[counter][:name] = track.title
      @results[counter][:artist] = track.user.band
      @results[counter][:image] = track.album.image.url
      counter += 1
    end

    if @results.keys.length > 0
      render "api/searches/index"
    else
      render json: ["nothing found"], status: 200
    end
  end

    def show
    @featured_albums = User.order("RANDOM()").first(10)
    
    render "api/searches/featured"
  end
  
  private

  def search_params
    params.require(:search).permit(:query, :id)
  end
end