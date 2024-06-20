require 'rails_helper'

RSpec.describe "Api::Books", type: :request do
  describe "GET /index" do
    it "returns http success" do
      get "/api/books/index"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /show" do
    it "returns http success" do
      get "/api/books/show"
      expect(response).to have_http_status(:success)
    end
  end

end
