class ApplicationController < ActionController::API
  include RenderConcern
  include ExceptionHandlerConcern
end
