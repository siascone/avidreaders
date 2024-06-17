# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

ApplicationRecord.transaction do 
    puts "Destroying tables..."

    User.destroy_all

    puts "Resetting primary keys..."

    ApplicationRecord.connection.reset_pk_sequence!('users')

    puts "Creating users..."

    User.create!({
        username: 'theBookworm',
        email: 'siascone@avidreaders.io',
        first_name: 'Spencer',
        last_name: 'Iascone',
        password: 'password'
    })

    10.times do 
        User.create!({
            username: Faker::Internet.unique.username(specifier: 3),
            email: Faker::Internet.unique.email(domain: 'avidreaders.io'),
            first_name: Faker::Name.first_name,
            last_name: Faker::Name.last_name,
            password: 'password'
        })
    end

    puts "Database has been reset and seeded!"
end