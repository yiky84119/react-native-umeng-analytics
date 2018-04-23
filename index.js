import { NativeModules } from 'react-native';
var UMAnalyticsModule = NativeModules.UMAnalyticsModule;

export default class Analytics {
    static profileSignOff(){
        UMAnalyticsModule.profileSignOff()
    }
    static onEvent(eventname){
        UMAnalyticsModule.onEvent(eventname);
    }
    static onEventWithLable(eventname, label){
        UMAnalyticsModule.onEventWithLable(eventname, label);
    }
    static onEventWithMap(eventname, jsonData){
        UMAnalyticsModule.onEventWithMap(eventname, jsonData);
    }
    static onEventWithMapAndCount(eventname, jsonData, count){
        UMAnalyticsModule.onEventWithMapAndCount(eventname, jsonData, count);
    }
    static onTrack(trackname){
        UMAnalyticsModule.track(trackname);
    }
    static onTrackWithMap(trackname, jsonData){
        UMAnalyticsModule.trackWithMap(trackname, jsonData);
    }
    static registerSuperProperty(jsonData){
        UMAnalyticsModule.registerSuperProperty(jsonData);
    }

    static clearSuperProperties(){
        UMAnalyticsModule.clearSuperProperties();
    }
    static setFirstLaunchEvent(eventArray){
        UMAnalyticsModule.setFirstLaunchEvent(eventArray);
    }

    static onPageBegin(pageName) {
        UMAnalyticsModule.onPageBegin(pageName);
    }

    static onPageEnd(pageName) {
        UMAnalyticsModule.onPageEnd(pageName);
    }
}