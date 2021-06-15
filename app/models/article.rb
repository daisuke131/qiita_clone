class Article < ApplicationRecord
  belongs_to :user
  validates :title, :body, presence: true
  enum status: { draft: 0, published: 1 }
end
