# GameToken
[![Build Status](https://travis-ci.org/sc0Vu/GameToken.svg?branch=master)](https://travis-ci.org/sc0Vu/GameToken)

Simple ethereum token.

> Do not use this in production environment.

# Usage

    npm install gametoken

    import 'gametoken/contracts/GameToken.sol'

Or

    import 'gametoken/contracts/SecureGameToken.sol'

# Development

    npm install

# Test

Before run test, make sure you have installed truffle.

    npm install -g truffle

* Run test with truffle and testrpc.

    npm install -g testrpc

Run testrpc

    testrpc

Run test

    truffle test

* Run test with private blockchain.

    truffle  test --network private

> Remember to modify providers/private.js

* Run test without install testrpc globally.

    truffle  test --network test

# container

If you want to type host name like testrpc or geth in truffle.js, you can use docker or other virtual service to do.

1. write docker-compose.yml

2. run container
