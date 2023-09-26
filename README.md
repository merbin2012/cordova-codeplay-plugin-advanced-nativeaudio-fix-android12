# Cordova Native Audio Plugin

Cordova / PhoneGap 3.5+ extension for Native Audio playback, aimed at HTML5 gaming and audio applications which require minimum latency, polyphony and concurrency.

## Original Plugin

This Plugin is forked by [this Fork](https://github.com/wizpanda/cordova-plugin-nativeaudio) and has some added features. 

## Contents

1. [Description](#description)
7. [Supported Platforms](#supported-platforms)
8. [Installation](#installation)
9. [Usage](#usage)
10. [API](#api)

## Description

This Cordova / PhoneGap (3.5+) plugin enables concurrency (multi-channel playback), polyphony (multi-voice playback) and minimized latency (via caching) in audio-based applications, by leveraging native audio APIs. Designed for the use in HTML5-based cross-platform games and mobile/hybrid audio applications.

## Supported Platforms

* iOS
* Android

## Installation

Via Cordova CLI:
```bash
cordova plugin add cordova-plugin-advanced-nativeaudio
```

## Usage


1. Wait for `deviceReady`.
1. Preload an audio asset and assign an id - either optimized for single-shot style short clips (`preloadSimple()`) or looping, ambient background audio (`preloadComplex()`)
2. `play()` the audio asset via its id.
3. `unload()` the audio asset via its id.

## API

### Preloading

```javascript
preloadSimple: function ( id, assetPath, successCallback, errorCallback)
```
Loads an audio file into memory. Optimized for short clips / single shots (up to five seconds).
Cannot be stopped / looped.

Uses lower-level native APIs with small footprint (iOS: AudioToolbox/AudioServices).
Fully concurrent and multichannel.

* params
 * id - string unique ID for the audio file
 * assetPath - the relative path or absolute URL (inluding http://) to the audio asset.
 * successCallback - success callback function
 * errorCallback - error callback function


```javascript
preloadComplex: function ( id, assetPath, volume, voices, delay, successCallback, errorCallback)
```

Loads an audio file into memory. Optimized for background music / ambient sound.
Uses highlevel native APIs with a larger footprint. (iOS: AVAudioPlayer).
Can be stopped / looped and used with multiple voices. Can be faded in and out using the delay parameter.


#### Volume & Voices

The default **volume** is 1.0, a lower default can be set by using a numerical value from 0.1 to 1.0.

By default, there is 1 **vice**, that is: one instance that will be stopped & restarted on play().
If there are multiple voices (number greater than 0), it will cycle through voices to play overlapping audio.

Change the float-based **delay** parameter to increase the fade-in/fade-out timing.

### Playback

* params
 * id - string unique ID for the audio file
 * assetPath - the relative path to the audio asset within the www directory
 * volume - the volume of the preloaded sound (0.1 to 1.0)
 * voices - the number of multichannel voices available
 * successCallback - success callback function
 * errorCallback - error callback function

```javascript
play: function (id, successCallback, errorCallback, completeCallback)
```

Plays an audio asset.

* params:
 * id - string unique ID for the audio file
 * successCallback - success callback function
 * errorCallback - error callback function
 * completeCallback - error callback function

```javascript
loop: function (id, successCallback, errorCallback)
```
Loops an audio asset infinitely - this only works for assets loaded via preloadComplex.

* params
 * ID - string unique ID for the audio file
 * successCallback - success callback function
 * errorCallback - error callback function

```javascript
stop: function (id, successCallback, errorCallback)
```

Stops an audio file. Only works for assets loaded via preloadComplex.

* params:
 * ID - string unique ID for the audio file
 * successCallback - success callback function
 * errorCallback - error callback function

```javascript
unload: function (id, successCallback, errorCallback)
```

Unloads an audio file from memory.


* params:
 * ID - string unique ID for the audio file
 * successCallback - success callback function
 * errorCallback - error callback function

```javascript
setVolumeForComplexAsset: function (id, volume, successCallback, errorCallback)
```

Changes the volume for preloaded complex assets.
 
 
* params:
 * ID - string unique ID for the audio file
 * volume - the volume of the audio asset (0.1 to 1.0)
 * successCallback - success callback function
 * errorCallback - error callback function

## Example Code

In this example, the resources reside in a relative path under the Cordova root folder "www/".

```javascript
if (window.plugins && window.plugins.NativeAudio) {

    // Preload audio resources
    window.plugins.NativeAudio.preloadComplex('music', 'audio/music.mp3', 1, 1, 0, function (msg) {
    }, function (msg) {
        console.log('error: ' + msg);
    });

    window.plugins.NativeAudio.preloadSimple('click', 'audio/click.mp3', function (msg) {
    }, function (msg) {
        console.log('error: ' + msg);
    });


    // Play
    window.plugins.NativeAudio.play('click');
    window.plugins.NativeAudio.loop('music');


    // Stop multichannel clip after 60 seconds
    window.setTimeout(function () {

        window.plugins.NativeAudio.stop('music');

        window.plugins.NativeAudio.unload('music');
        window.plugins.NativeAudio.unload('click');

    }, 1000 * 60);
}
```
