# West Wing Random Episode Microservice

## What this Microservice Does
Have you ever wanted to randomly select an episode of your favorite TV show, West Wing?  WWREM is here to help!  Using this microservice will provide you with a random season number and episode for you to watch.

## Getting Setup
This microservice uses ZeroMQ.  You can read the full documentation [here](https://zguide.zeromq.org/).  Below is a list of steps to help you get up and going with a Node.js implementation.
1.  [Install](https://zeromq.org/download/) ZeroMQ in your file directory.
2.  Download the server.js and worker.js files.
3.  Incorporate the worker.js file into your application.
4.  Start up the server.js file (outside of your application)
    ```node.js
    node server.js
    ```
5.  Start the worker.js file:
    ```node.js
    node worker.js
    ```

## A Little About West Wing
West Wing aired for [seven seasons](https://en.wikipedia.org/wiki/List_of_The_West_Wing_episodes), with the number of episodes varying from season to season.  This microservice will provide a random season number (1-7), and then provide a random episode based on the total number of episodes within the season selected.

## What to Expect
Your response will be provide in a JSON string.  For example if season 6, episode 21 is randomly generated the response will be in the following format:
```node.js
{ 'season': 6, 'episode': 21 }
```
    
