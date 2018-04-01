class MemberMailer < ApplicationMailer

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.member_mailer.password_reset.subject
  #
  def password_reset(member)
    @member = member
    mail to: member.email, subject: "Password reset"
  end

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.member_mailer.welcome_message.subject
  #
  def welcome_message(member, content)
    @member = member
    @email = content
    mail to: member.email, subject: "Your Leeds Mountaineering Club Application"
  end

  def new_application
  end

  def newsfeed(member, content)
    @recipient = member
    @email = content
    mail to: member.email, subject: "#{content.subject}"
  end
end
