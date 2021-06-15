class ArticleSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :status
  belongs_to :user
end
