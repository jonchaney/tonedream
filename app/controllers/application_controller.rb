class ApplicationController < ActionController::Base
  # protect_from_forgery with: :exception

  helper_method :current_user, :signed_in?

  def current_user
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  def login(user)
    session[:session_token] = user.reset_session_token
  end

  def logout
    current_user.reset_session_token
    session[:session_token] = nil
  end

  def signed_in?
    !!current_user
  end

  def require_signed_in
    render json: { base: ['invalid credentials'] }, status: 401 if !current_user
  end

end
