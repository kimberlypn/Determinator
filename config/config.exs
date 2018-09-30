# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :determinator,
  ecto_repos: [Determinator.Repo]

# Configures the endpoint
config :determinator, DeterminatorWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "JHGtIlfxTWXX6IUkeCuUlu6yUQ7qLnllW4E+3C02yXLcK5ijHO8GIeTSBKyUikAS",
  render_errors: [view: DeterminatorWeb.ErrorView, accepts: ~w(html json)],
  pubsub: [name: Determinator.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:user_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
