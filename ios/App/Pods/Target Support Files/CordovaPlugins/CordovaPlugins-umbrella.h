#ifdef __OBJC__
#import <UIKit/UIKit.h>
#else
#ifndef FOUNDATION_EXPORT
#if defined(__cplusplus)
#define FOUNDATION_EXPORT extern "C"
#else
#define FOUNDATION_EXPORT extern
#endif
#endif
#endif

#import "APPBadge.h"
#import "Calendar.h"
#import "CDVCamera.h"
#import "CDVExif.h"
#import "CDVJpegHeaderWriter.h"
#import "UIImage+CropScaleOrientation.h"
#import "CDVDevice.h"
#import "CDVAssetLibraryFilesystem.h"
#import "CDVFile.h"
#import "CDVLocalFilesystem.h"
#import "CDVFileTransfer.h"
#import "APPLocalNotification.h"
#import "APPNotificationContent.h"
#import "APPNotificationOptions.h"
#import "UNNotificationRequest+APPLocalNotification.h"
#import "UNUserNotificationCenter+APPLocalNotification.h"

FOUNDATION_EXPORT double CordovaPluginsVersionNumber;
FOUNDATION_EXPORT const unsigned char CordovaPluginsVersionString[];

