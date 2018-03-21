install:

  • node, npm: https://nodejs.org (current version is 9.4.0)

  • live-server: npm install -g live-server

  • babel-cli: npm install -g babel-cli (current version 6.26.0 (babel-core 6.26.0))

run:

  • npm install (for first clones)

  • npm start

    - live-server public

    - babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch