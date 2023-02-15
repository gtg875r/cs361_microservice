
const zmq = require('zeromq');

async function runClient() {
  console.log('Connecting to the White House…');

  //  Socket to talk to server
  const sock = new zmq.Request();
  sock.connect('tcp://localhost:5555');

  
  console.log('Calling the red phone now...');
  await sock.send("What's your favorite epside Mr. President?");
  const [result] = await sock.receive();
  console.log(JSON.parse(result));
  return result.toString();
  
};
runClient();