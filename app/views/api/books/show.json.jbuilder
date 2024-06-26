json.book do 
    json.partial! 'book', book: @book
    json.summary @book.summary
    json.readerIds @book.reader_ids
    json.author "#{@book.author.first_name} #{@book.author.last_name}"
end

json.readers do
    @book.readers.each do |reader|
        json.set! reader.id do
            json.username reader.username
        end
    end
end

# json.author do 
#     json.extract! @book.author, :first_name, :last_name, :id
# end