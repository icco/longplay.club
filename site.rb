RACK_ENV ||= ENV["RACK_ENV"] ||= "development" unless defined?(RACK_ENV)

require "rubygems" unless defined?(Gem)
require "bundler/setup"
Bundler.require(:default, RACK_ENV)

get '/' do
  @sounds = Dir.glob('public/sounds/*.mp3').sample(10).map {|s| File.basename(s) }
  erb :index
end
