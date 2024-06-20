json.author do
    json.extract! @author, :id, :first_name, :last_name, :bio
end

json.readers do 
    @author.readers.each do |reader|
        json.set! reader.id do 
            json.extract! reader, :id, :username
        end
    end
end