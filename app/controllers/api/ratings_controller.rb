class Api::RatingsController < ApplicationController
    wrap_parameters include: Rating.attribute_names

    def create
        @user = current_user

        if !@user
            render json: { errors: ['You must be logged in to rate a book']}, status: :unauthorized
        else
            @rating = Rating.new
            @rating.user_id = @user.id
            @rating.book_id = params[:book_id]
            @rating.value = params[:value]

            if @rating.save!
                render json: @rating
            else
                render json: {errors: @rating.errors.full_messages }, status: 422
            end
        end
    end

    def update
        @user = current_user

        if !@user
            render json: { errors: ['You must be logged in to updated a book rating']}, status: :unauthorized
        else
            @rating = Rating.find_by(id: params[:id])
        
            if @rating && @rating.update(rating_params)
                render json: @rating
            end
        end
    end

    def destroy
        @user = current_user

        if !@user
            render json: { errors: ['You must be logged in to delete a book rating']}, status: :unauthorized
        else
            @rating = Rating.find_by(id: params[:id])

            if @rating && @rating.delete
                render json: {messages: ['Successfully removed this rating']}
            end
        end
    end

    private

    def rating_params
        params.require(:rating).permit(:value)
    end
end
