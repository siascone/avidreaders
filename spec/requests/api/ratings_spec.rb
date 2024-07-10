require 'rails_helper'

RSpec.describe "Api::Ratings", type: :request do
  describe "GET /create" do
    it "returns http success" do
      get "/api/ratings/create"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /update" do
    it "returns http success" do
      get "/api/ratings/update"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /delete" do
    it "returns http success" do
      get "/api/ratings/delete"
      expect(response).to have_http_status(:success)
    end
  end

end
