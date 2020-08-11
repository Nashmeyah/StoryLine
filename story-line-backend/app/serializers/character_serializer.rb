class CharacterSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :sex, :history
  belongs_to :story
end
