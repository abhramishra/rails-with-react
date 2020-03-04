class ProductsController < ApplicationController
    def index
        @products = Product.all
        # render @products
        # render json: { data: @products }
    end
    def get_prod
        @product = Product.all
        render json: { data: @product }
    end
end
