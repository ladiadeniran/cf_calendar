module ExceptionHandlerConcern
  extend ActiveSupport::Concern

  included do
    rescue_from ActiveRecord::RecordNotFound do |error|
      respond(:record_not_found, 404, error.to_s)
    end
  end

  def respond(_error, status, message)
    message = message.to_json
    render_json(message, status: status)
  end
end
