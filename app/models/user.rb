# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  username        :string           not null
#  first_name      :string           not null
#  last_name       :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
    has_secure_password

    validates :username,
        uniqueness: true,
        presence: true,
        length: { in: 3..40 },
        format: { without: URI::MailTo::EMAIL_REGEXP, message: "Username cannot be an email"}
    validates :email,
        uniqueness: true,
        presence: true,
        length: { in: 3..100 },
        format: { with: URI::MailTo::EMAIL_REGEXP }
    validates :session_token,
        presence: true,
        uniqueness: true
    validates :password,
        length: { in: 6..40 },
        allow_nil: true

    before_validation :ensure_session_token

    # Associations

    has_many :reads,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :Read

    has_many :books, 
        through: :reads,
        source: :book

    has_many :ratings,
        foreign_key: :user_id,
        class_name: :Rating
        

    def self.find_by_credentials(credential, password)
        column = credential =~ URI::MailTo::EMAIL_REGEXP ? :email : :username

        user = User.find_by(column => credential)
        user&.authenticate(password)

    end

    def reset_session_token!
        self.session_token = ensure_session_token()
        self.save!
        self.session_token
    end

    private

    def generate_unique_session_token
        while true
            token = SecureRandom.base64
            return token if !User.exists?(session_token: token)
        end
    end

    def ensure_session_token
        if !self.session_token 
            self.session_token = generate_unique_session_token()
        end
    end

end
