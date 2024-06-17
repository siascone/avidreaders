class ApplicationController < ActionController::API

    private

    def snake_case_params
        params.deep_transform_keys!(&:underscore)
    end
end
