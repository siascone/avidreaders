# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

ApplicationRecord.transaction do 
    puts "Destroying tables..."

    Read.destroy_all
    Book.destroy_all
    Author.destroy_all
    User.destroy_all
    
    puts "Resetting primary keys..."

    ApplicationRecord.connection.reset_pk_sequence!('users')
    ApplicationRecord.connection.reset_pk_sequence!('authors')
    ApplicationRecord.connection.reset_pk_sequence!('books')
    ApplicationRecord.connection.reset_pk_sequence!('reads')


    puts "Creating users..."

    User.create!({
        username: 'theBookworm',
        email: 'siascone@avidreaders.io',
        first_name: 'Spencer',
        last_name: 'Iascone',
        password: 'password'
    })

    25.times do 
        User.create!({
            username: Faker::Internet.unique.username(specifier: 3),
            email: Faker::Internet.unique.email(domain: 'avidreaders.io'),
            first_name: Faker::Name.first_name,
            last_name: Faker::Name.last_name,
            password: 'password'
        })
    end

    puts "Creating authors..."

    25.times do 
        Author.create!({
            first_name: Faker::Name.first_name,
            last_name: Faker::Name.last_name,
            bio: Faker::Lorem.paragraph,
        })
    end

    puts "Creating books..."
    
    25.times do |idx|
        Book.create!({
            title: Faker::Book.title,
            subtitle: Faker::Lorem.sentence, 
            summary: Faker::Lorem.paragraph,
            genre: Faker::Book.genre,
            author_id: idx+1
        })
    end


    puts "Creating user reads..."

    STATUSES = ['Read', 'Reading', 'Unread']

    pairs = []
    i = 0;
    while  i < 100
        
        pair = [rand(1..25), rand(1..25)]

        if !pairs.include?(pair) 
            
            pairs << pair

            Read.create!({
                user_id: pair[0],
                book_id: pair[1],
                status: STATUSES.sample()
            })

            i += 1
        end

    end

    puts "Database has been reset and seeded!"
end