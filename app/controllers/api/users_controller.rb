class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    @user = User.find(current_user.id)
    if @user.update_attributes(user_params)
        render "api/users/show"
    else 
      render json: @user.errors.full_messages, status: 422
    end 
  end 

  def show 
    @user = User.find_by(id: params[:id])
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :email, :image, :id)
  end
end
