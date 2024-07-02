json.reads do 
    @reads.each do |read|
        json.set! read.id do
            json.extract! read, :id, :book_id, :user_id, :status
        end
    end
end