class Article < ApplicationRecord
  belongs_to :user
  validates :title, :body, presence: true
  enum status: { published: 0, draft: 1 }
end
