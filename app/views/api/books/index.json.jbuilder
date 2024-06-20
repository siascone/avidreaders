json.books do 
    @books.each do |book|
        json.set! book.id do
            json.partial! 'book', book: book
            json.author "#{book.author.first_name} #{book.author.last_name}"
        end
    end
end

