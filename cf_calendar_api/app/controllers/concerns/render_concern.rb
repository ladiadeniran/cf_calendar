module RenderConcern
  extend ActiveSupport::Concern

  def render_json(json_object, status: :ok)
    render json: json_object, status: status
  end
end