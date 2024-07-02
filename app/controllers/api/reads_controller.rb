class Api::ReadsController < ApplicationController

    def index
        # @reads = Read.where(user_id: params[:user_id])
        
        # if @reads.length > 0
        #     render json: @reads
        # else
        #     render json: {errors: ['No reads available']}, status: 422
        # end

        @reads = Read.all

        render :index
    end

    def show
        @read = Read.find_by(id: params[:id])

        render json: @read
    end

    def create
        @user = current_user

        if !@user
            render json: { errors: ['You must be logged in to add a book to your reading list']}, status: :unauthorized
        else 
            @read = Read.new
            @read.user_id = @user.id
            @read.book_id = params[:book_id]
            @read.status = params[:status]

            if @read.save!
                render json: { messages: ['Successfully added to your reading list']}
            else
                render json: { errors: @read.errors.full_messages }, status: 422
            end
        end

    end

    def update
        @user = current_user

        if !@user
            render json: { errors: ['You must be logged in to updated the status of a book on your reading list']}, status: :unauthorized
        else
            @read = Read.find_by(id: params[:id])
            # @read.status = params[:status]

            if @read && @read.update(read_params)
                render json: {messages: ['Successfully updated your reading list']}
            end
        end
        
    end

    def destroy
        @user = current_user

        if !@user
            render json: { errors: ['You must be logged in to remove a book from your reading list']}, status: :unauthorized
        else
            @read = Read.find_by(id: params[:id])
            # @read.status = params[:status]

            if @read && @read.delete
                render json: {messages: ['Successfully removed this book from your reading list']}
            end
        end
    end

    def read_params
        params.require(:read).permit(:status)
    end
end
