class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      login!(@user)
      render :show
    else
      render json: 'Invalid Login', status: 422
    end
  end

  def destroy
    if logged_in?
      logout!
      render json: {}
    else
      render json: 'Can\'t log out if you\'re not logged in', status: 404
    end
  end
end
