

const zmq = require('zeromq');

function westWingEpisode() {
  var seasonNumber = Math.floor(Math.random() * 6);
  seasonNumber++
  var episodeNumber = Math.floor(Math.random() * 24);
  episodeNumber++
  var finalReturn = {'season':seasonNumber, 'episode':episodeNumber}
  return finalReturn
}

async function runServer() {
  const sock = new zmq.Reply();
  console.log("Waiting for the red phone to ring...")

  await sock.bind('tcp://*:5555');

  for await (const [msg] of sock) {
    sendSelection = westWingEpisode();
    console.log('Received ' + ': [' + msg.toString() + ']');
    await sock.send(JSON.stringify(sendSelection));
  }
}

runServer();
