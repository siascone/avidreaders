class Api::AuthorsController < ApplicationController
  def show
    @author = Author.find_by(id: params[:id])

    render :show
  end
end
