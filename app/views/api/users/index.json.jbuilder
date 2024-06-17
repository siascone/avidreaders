# json.users do 
#     @users.each |user| do 
#         json.set! user.id do 
#             json.partial! 'api/users/user', user: user
#         end
#     end
# end 

json.users do
    @users.each do |user|
        json.set! user.id do 
            json.partial! 'api/users/user', user: user
        end
    end
end