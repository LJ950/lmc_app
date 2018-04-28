class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  include SessionsHelper

  private
    def logged_in_member
      unless logged_in?
        store_location
        flash[:danger] = "Please log in."
        redirect_to login_url
      end
    end

    def correct_member
      @member = Member.find(params[:id])
      redirect_to(root_url) unless current_user?(@member)
    end
    
    def all_future_meets
      Meet.where('meet_date >= ?', Date.today).all.order(:meet_date)
    end

    def next_meets
      Meet.where('meet_date >= ?', Date.today).order(:meet_date).first(4)
    end

    def past_meets
      Meet.where('meet_date < ?', Date.today).all.order(meet_date: :desc)
    end

end
