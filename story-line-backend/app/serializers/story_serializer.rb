class StorySerializer < ActiveModel::Serializer
  attributes :id, :title, :body
  has_many :characters
end
