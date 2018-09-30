defmodule DeterminatorWeb.PageController do
  use DeterminatorWeb, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
