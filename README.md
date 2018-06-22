# \<blox-scrypt\>

[![Build Status](https://travis-ci.org/EOSBlox/blox-scrypt.svg?branch=master)](https://travis-ci.org/EOSBlox/blox-scrypt)

A web component that exposes the scrypt password-based KDF

## Install the Polymer-CLI

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) and npm (packaged with [Node.js](https://nodejs.org)) installed. Run `npm install` to install your element's dependencies, then run `polymer serve` to serve your element locally.

## Install blox-scrypt

```
$ npm install blox-scrypt
```

## Viewing Your Element

```
$ polymer serve
```

## Running Tests

```
$ polymer test
```

## Import

```
$ import 'blox-scrypt';
```

## Basic Use

```html
<blox-scrypt
    password="secret!!"
    result="{{result}}"
    error="{{error}}"
    salt="psv5lvsrnaw3">
</blox-scrypt>
```

## Advanced Use

```html
<blox-scrypt
    password="secret!!"
    result="{{result}}"
    error="{{error}}"
    salt="psv5lvsrnaw3"
    password-length=8
    memoryCost=16384
    blocksize=8
    parallelization=1
    dkLen=16
    encoding='hex'></blox-scrypt>
```

## Javascript Use

```html
<blox-scrypt id="bloxScrypt"></blox-scrypt>
<script>
    this.$.bloxScrypt.scrypt('secret!!')
    .then((hash) => {
        // Do Something
    })
    .catch((err) => {
        // Do Something
    })
</script>
```

