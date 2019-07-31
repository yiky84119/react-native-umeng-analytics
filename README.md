# react-native-umeng-analytics-nevo

React Native Module for umeng analytics

## install

```
yarn add react-native-umeng-analytics-nevo
```

## Android

```
react-native link react-native-umeng-analytics-nevo
```

### Manually

* android/settings.gradle

```
include ':react-native-umeng-analytics-nevo'
project(':react-native-umeng-analytics-nevo').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-umeng-analytics-nevo/android')
```

* android/app/build.gradle

```
dependencies {
    compile project(':react-native-umeng-analytics-nevo')
}
```

* register module (in MainActivity.java)

```java
...

import com.umengs.analytics.AnalyticsReactPackage; // <--- IMPORT

public class MainActivity extends ReactActivity {

    ...

    @Override
    protected List<ReactPackage> getPackages() {
        return Arrays.<ReactPackage>asList(
            new MainReactPackage(),
            new AnalyticsReactPackage() // <--- ADD HERE
        );
    }
}
```

## iOS

### With Pod
```
pod install
```

### With rnpm

```
react-native link react-native-umeng-analytics-nevo
```

### Manually

> Link `UMAnalytics` library from your `node_modules/react-native-umeng-analytics-nevo/ios` folder like its [described here](http://facebook.github.io/react-native/docs/linking-libraries-ios.html). Don't forget to add it to "Build Phases" of project.

### Config

* Added the following libraries to your "Link Binary With Libraries":
  * [x] CoreTelephony.framework
  * [x] SystemConfiguration.framework
  * [x] libsqlite
  * [x] libz

### General Usage

```javascript
import Analytics from 'react-native-umeng-analytics-nevo';

```

```javascript
Analytics.onPageEnd('LoginScreen');

```
