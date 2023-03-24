var net = require('net')
var PORT = 6969
var HOST = 'localhost'
var db = {}
var value
net.createServer(function(sock) {
    var state = 0
    var current_key = null
    sock.on('data', function(data) {
        switch(state) {
            case 0:
                current_key = data
                state = 1
                sock.write("ok")
                break
            case 1:
                value = parseInt(data)
                if(!db[current_key]) {
                    db[current_key] = 0
                }
                db[current_key] += value
                sock.write("" + db[current_key])
                state = 0
                sock.destroy()
                break
        }
    })
}).listen(PORT, HOST)