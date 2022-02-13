# Word, My World
Web application helping you solve every Wordle possible. This project was build as part of PolyhacksPolyHacks - Hackatown 2022.

## Demo
There is a demo that can be accessed right [here](wordmyworld.tech)

## Inspiration
We draw our inspiration by this cool game called Wordle, where to win, the user needs to figure out in 6 tries, a daily word of 5 letters. For each guess, if a letter is at the right spot, it will be colored in green. If the letter is in the word but not in the right place, it will be in yellow and finally in dark gray if it is not present in the word. With this in mind, we built this app with an alogirithm providing you with all possible combinations for you to succeed your next Wordle!

## Use Case
The way it works is simple. The user just inputs the letters he got from Wordle at their given spot (the ones that are in yellow and green). If the letter is at the right spot, he can check the the checkbox "Right place" or else leave it. He can also input the letters that he is sure from Wordle are not present in the word. The algorithm then finds the combinations possible and renders it to the user to chose from and play.

## Getting Setup
This project assumes that you already have `Node ^14.17.6` & `npm ^6.14.15`. If you do not, please download them from [the official website](https://nodejs.org/en/download/)
Here are a couple of steps that you can follow to quickly get started with the project.

1. Clone the repository: `git clone https://github.com/mike1572/polyhacksgenx.git`
2. Install the project dependencies by running `npm install` inside the cloned directory
3. Run `npm start` to start your own local development environment! Alternatively, here are some more commands available:

| Commands        | Output
|-----------------|-------------------------------------------------------------------|
| `npm run build` | Creates a production-ready build of the project, ready for deployment |
| `npm update`    | Updates dependencies that require newer versions to keep functioning correctly|
| `serve -s`      | You *must* install serve (`npm install -g serve`) before running this command. This command makes the project accessible both locally and on your network, in the event that you want to test it on different devices or share it with your entourage.|

There are many more commands, which you can familiarise yourself with on the [Create a React App](https://create-react-app.dev/) website, or in [npm's](https://docs.npmjs.com/) documentation.

## License
This project or parts of its code are licensed under AGPLv3. Furthermore, npm libraries are subject to their own copyright.
