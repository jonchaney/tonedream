class Api::AlbumsController < ApplicationController

  def show
    @album = Album.find(params[:id])
  end

  def create
    @album = Album.new(album_params)
    # @album.user_id = current_user.id
    if @album.save
      render 'api/albums/show'
    else
      render json: @album.errors.full_messages, status: 422
    end
  end

  def index
    @albums = current_user.albums
    render :index
  end

  def update
    @album = current_user.albums.find(params[:id])

    if @album.update_attributes(album_params)
      render :show
    else
      render json: @album.errors.full_messages, status: 422
    end
  end

  def destroy
    @album = current_user.albums.find(params[:id])

    if @album.destroy
      render json: ['success']
    else
      render json: ['error'], status: 404
    end
  end

  private

  def album_params
    params.require(:album).permit(:title, :date, :genre, :artwork_url, :user_id)
  end
end
