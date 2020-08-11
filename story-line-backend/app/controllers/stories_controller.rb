class StoriesController < ApplicationController
    before_action :set_stories, only: [:show, :update, :destroy]

    def index
        stories = Story.all

        render json: stories
    end

    def show
       render json: @story
    end

    def create
        @story = Story.new(story_params)

        if @story.save
            render json: @story, status: :created, location: @story
        else 
            render json: @story.errors, status: :unprocessable_entity
        end
    end

    def destroy
        @story.destroy
    end

    private

    def set_stories
        @story = Story.find(params[:id])
    end

    def story_params
        params.require(:story).permit(:title,:body)
    end
end
