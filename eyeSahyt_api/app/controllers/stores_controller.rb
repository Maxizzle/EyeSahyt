class StoresController < ApplicationController
  before_action :set_store, only: [:show, :update, :destroy]

  # GET /stores
  def index
    @stores = Store.all

    render json: @stores.to_json(include: :products)
  end

  # GET /stores/1
  def show
    render json: @store.to_json(inlcude: :products)
  end

  # POST /stores
  def create
    puts 'store params', store_params
    @store = Store.new(store_params)
    puts 'store', @store.name, @store.image_url
    

    if @store.save
      render json: @store, status: :created, location: @store
    else
      render json: @store.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /stores/1
  def update
    if @store.update(store_params)
      render json: @store
    else
      render json: @store.errors, status: :unprocessable_entity
    end
  end

  # DELETE /stores/1
  def destroy
    @store.destroy
    # puts 'paramsid', params[:id]
    # @store = Store.where(name: params[:id])
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_store
      @store = Store.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def store_params
      params.permit(:name, :image_url, :address, :number)
    end
end
