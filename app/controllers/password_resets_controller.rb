class PasswordResetsController < ApplicationController
  before_action :get_user, only: [:edit, :update]
  before_action :valid_user, only: [:edit, :update]
  before_action :check_expiration, only: [:edit, :update]

  def new
  end

  def create
  	@member = Member.find_by(email: params[:password_reset][:email].downcase)
  	if @member
  		@member.create_reset_digest
  		@member.send_password_reset_email
  		flash[:info] = "Email sent with password reset instructions"
  		redirect_to membership_path
  	else
  		flash.now[:danger] = "Email address not found"
  		render 'new'
  	end
  end


  def edit
  end

  def update
    if params[:member][:password].empty?
      @member.errors.add(:password, "can't be empty")
      render 'edit'
    elsif @member.update_attributes(member_params)
      log_in @member
      @member.update_attribute(:reset_digest, nil)
      flash[:success] = "Password has been reset."
      redirect_to @member
    else
      render 'edit'
    end
  end

  private

  def member_params
    params.require(:member).permit(:password, :password_confirmation)
  end

  #Before filters

  def get_user
    @member = Member.find_by(email: params[:email])
  end

  def valid_user
    redirect_to root_url unless (@member && @member.authenticated?(:reset, params[:id]))
  end

  def check_expiration
    if @member.password_reset_expired?
      flash[:danger] = "Password reset has expired."
      redirect_to new_password_reset_url
    end
  end
end
