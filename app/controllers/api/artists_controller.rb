class Api::ArtistsController < ApplicationController

  def show
    @artist = Artist.find(params[:id])
  end

  def create
    p params
    @artist = Artist.new(artist_params)
    if @artist.save
      current_user.artists << @artist
      render 'api/artists/show'
    else
      render json: @artist.errors.full_messages, status: 422
    end
  end

  def index
    @artists = current_user.artists
    render :index
  end

  def update
    @artist = current_user.artists.find(params[:id])
    if @artist.update_attributes(artist_params)
      render :show
    else
      render json: @artist.errors.full_messages, status: 422
    end
  end

  def destroy
    @artist = current_user.artists.find(params[:id])

    if @artist
      @artist.destroy
      render json: ['success']
    else
      render json: ['error'], status: 404
    end
  end

  private

  def artist_params
    params.require(:artist).permit(:name, :bio, :location, :image)
  end
end
