require 'json'

package = JSON.parse(File.read(File.join(__dir__, 'package.json')))

Pod::Spec.new do |s|
  s.name         = package['name']
  s.version      = package['version']
  s.summary      = package['description']
  s.license      = package['license']

  s.authors      = package['author']
  s.homepage     = package['homepage']
  s.platform     = :ios, "9.0"

  s.source       = { :git => "https://github.com/yiky84119/react-native-umeng-analytics.git", :tag => "v#{s.version}" }
  s.source_files  = "ios/**/*.{h,m}"

  s.vendored_frameworks = "ios/UMAnalytics/framework/UMAnalytics.framework", "ios/UMAnalytics/framework/UMCommon.framework"
  s.frameworks = "CoreTelephony", "SystemConfiguration"
  s.libraries = "sqlite3", "z"

  s.dependency 'React'
end
