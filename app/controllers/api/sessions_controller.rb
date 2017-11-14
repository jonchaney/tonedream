class Api::SessionsController < ApplicationController

  def create

    if (params[:user][:username])
      @user = User.find_by_credentials(
        params[:user][:username],
        params[:user][:password]
      )
    else 
      @user = User.find_by_email_credentials(
        params[:user][:email],
        params[:user][:password]
      )
    end 
      
    if @user
      login(@user)
      render "api/users/show"
    else
      render(
        json: ["invalid username or password"], status: 401
      )
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render "api/users/show"
    else
      render(
        json: ["nobody signed in"], status: 404
      )
    end
  end

end
