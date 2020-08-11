class CharactersController < ApplicationController
    before_action :set_characters, only: [:show, :update, :destroy]


    def index
        characters = Character.all
        render json: characters
    end

    def show
        render json: @characters
    end

    def create
        @character = Character.new(character_params)

        if @character.save
            render json: @character, status: :created, location: @character
        else 
            render json: @character.errors, status: :unprocessable_entity
        end
    end

    def destroy
        @characters.destroy
    end

    private

    def set_characters
        @characters = Character.find_by(params[:id])
    end


    def character_params
        params.require(:character).permit(:name, :age, :sex, :history, :story_id)
    end

end
