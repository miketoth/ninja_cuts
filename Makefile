content_script = --join js/content_script.js --compile coffee/index.coffee

default: 
	node_modules/coffee-script/bin/coffee $(content_script)

watch:
		node_modules/coffee-script/bin/coffee --watch $(content_script)
