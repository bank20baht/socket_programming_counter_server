const net = require('net')
const PORT = 6969
const HOST = 'localhost'

const client = new net.Socket();

client.connect(PORT, HOST, function() {
    client.write("bob")
    
    client.on('data', function(data) {
        if(data == 'ok') {
            client.write("20")
        }
        console.log("recive => " + data)
    })
    client.on('close', function(data) {
        console.log("you connection lose, please re-connect");
    })
})