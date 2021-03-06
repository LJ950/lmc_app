require 'test_helper'

class StaticPagesControllerTest < ActionDispatch::IntegrationTest

	def setup
		@base_title = "Leeds Mountaineering Club"
	end

	test "should get root" do
		get '/'
		assert_response :success
	end

  test "should get home" do
    get home_path
    assert_response :success
    assert_select "title", "#{@base_title}"
  end
end
