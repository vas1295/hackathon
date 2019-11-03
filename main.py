import bottle

from bottle import run
print ("hello there")

@bottle.route("/functions.js")
def jsroute():
  with open ("functions.js") as f:
    return f.read()

@bottle.route("/")
def htmlroute():
    with open ('index.html') as j:
      return j.read()

run(host='0.0.0.0', port= 8080, debug=True) ###
