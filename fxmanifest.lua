fx_version "cerulean"

description "React SmartPhone"
author "Siza"
version '1.0.0'
repository 'https://github.com/Siza36/React-Mobile'

lua54 'yes'

games {
  "gta5"
}

ui_page 'web/build/index.html'

client_script "client/**/*"
server_script "server/**/*"

files {
  'web/build/index.html',
  'web/build/**/*'
}