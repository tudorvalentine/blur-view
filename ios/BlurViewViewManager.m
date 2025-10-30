#import <React/RCTViewManager.h>

@interface RCT_EXTERN_MODULE(BlurViewViewManager, RCTViewManager)

RCT_EXPORT_VIEW_PROPERTY(maxBlurRadius, NSNumber)
RCT_EXPORT_VIEW_PROPERTY(direction, NSString)
RCT_EXPORT_VIEW_PROPERTY(startOffset, NSNumber)

@end
