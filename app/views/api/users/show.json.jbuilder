json.user do 
    json.partial! 'api/users/user', user: @user
end

json.reads do
    @user.reads.each do |read|
        json.set! read.id do 
            json.extract! read, :id, :user_id, :book_id, :status
        end
    end
end