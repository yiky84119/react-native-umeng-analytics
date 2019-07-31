import { NativeModules } from 'react-native';
var UMAnalyticsModule = NativeModules.UMAnalyticsModule;

export default class Analytics {
    static profileSignOff(){
        UMAnalyticsModule.profileSignOff()
    }
    static onEvent(eventname){
        UMAnalyticsModule.onEvent(eventname);
    }
    static onEventWithLabel(eventname, label){
        UMAnalyticsModule.onEventWithLabel(eventname, label);
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
        //UMAnalyticsModule.onPageBegin(pageName);
        UMAnalyticsModule.onEventWithLabel(pageName, "1");
    }

    static onPageEnd(pageName) {
        //UMAnalyticsModule.onPageEnd(pageName);
        UMAnalyticsModule.onEventWithLabel(pageName, "0");
    }
}
