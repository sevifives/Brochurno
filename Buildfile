# ==========================================================================
# Project:   Brochurno
# Copyright: @2011 Jason Dooley
# ==========================================================================

# This is your Buildfile for your app, Brochurno. This tells SproutCore
# how to build your app. These settings override those in your project
# Buildfile, which contains default settings for all apps in your project.
#
# This line tells SproutCore's CSS preprocessor what class names to target.
# Since your app has a theme named 'brochurno', and it is based on SproutCore's
# Ace theme (named 'ace'), it is set to 'ace.brochurno'.
config :brochurno,  :css_theme => 'brochurno', :required => [:sproutcore,:'core-brochurno',:'sproutcore/media',:scui], :load_fixtures => true
