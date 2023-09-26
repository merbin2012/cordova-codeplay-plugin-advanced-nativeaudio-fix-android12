/// <reference path="types.d.ts" />
/// <reference path="interfaces/Options.d.ts" />

declare module 'cordova-plugin-advanced-nativeaudio' {

    export default class NativeAudio {

        static setOptions(options: Options, resultCallback: (result: any) => void, errorCallback: (error: any) => void);

        static preloadSimple(id: string, assetPath: string, resultCallback: (result: any) => void, errorCallback: (error: any) => void);

        static preloadComplex(id: string, assetPath: string, volume: number, voice: number, delay: number, streamType: StreamType, resultCallback: (result: any) => void, errorCallback: (error: any) => void);

        static play(id: string, resultCallback: (result: any) => void, errorCallback: (error: any) => void, completeCallback: (result: any) => void);

        static stop(id: string, resultCallback: (result: any) => void, errorCallback: (error: any) => void);

        static loop(id: string, resultCallback: (result: any) => void, errorCallback: (error: any) => void);

        static unload(id: string, resultCallback: (result: any) => void, errorCallback: (error: any) => void);

        static setVolumeForComplexAsset(id: string, volume: number, resultCallback: (result: any) => void, errorCallback: (error: any) => void);

    }

}
