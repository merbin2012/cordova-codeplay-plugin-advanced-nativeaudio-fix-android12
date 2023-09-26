//
//
//  NativeAudioAsset.h
//  NativeAudioAsset
//
//  Created by Sidney Bofah on 2014-06-26.
//

#import <Foundation/Foundation.h>
#import <AVFoundation/AVFoundation.h>

typedef void (^CompleteCallback)(NSString*);

@interface NativeAudioAsset : NSObject<AVAudioPlayerDelegate> {
    NSMutableArray* voices;
    int playIndex;
    NSString* audioId;
    CompleteCallback finished;
    NSNumber *initialVolume;
    NSNumber *fadeDelay;
    @public
    NSString* audioStreamType;
}

- (id) initWithPath:(NSString*) path withVoices:(NSNumber*) numVoices withVolume:(NSNumber*) volume withFadeDelay:(NSNumber *)delay withStreamType:(NSString*)streamType;
- (void) play;
- (void) playWithFade;
- (void) stop;
- (void) stopWithFade;
- (void) loop;
- (void) unload;
- (void) setVolume:(NSNumber*) volume;
- (void) setCallbackAndId:(CompleteCallback)cb audioId:(NSString*)audioId;
- (void) audioPlayerDidFinishPlaying:(AVAudioPlayer *)player successfully:(BOOL)flag;
- (void) audioPlayerDecodeErrorDidOccur:(AVAudioPlayer *)player error:(NSError *)error;
- (void) resetCategory;
@end
