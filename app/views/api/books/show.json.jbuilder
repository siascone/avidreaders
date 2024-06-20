json.book do 
    json.partial! 'book', book: @book
    json.readerIds @book.reader_ids
end

json.readers do
    @book.readers.each do |reader|
        json.set! reader.id do
            json.username reader.username
        end
    end
end