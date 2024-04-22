#My App for React Native

This is a Netflix React Native application.

## Commencing

You can use these procedures to get a local machine copy of the project up and running for testing and development.

### Requirements

Before opening the application, make sure the necessary software is installed on your development computer:

- Node.js (version 12 or above)
- yarn or npm
- Xcode (for iOS development, Mac only) - React Native CLI
- Android Studio (for creating Android applications)

### Setting Up
Enter the project directory and run npm install or yarn install.

### iOS


1) npx react-native run-ios
2) Using this command, the iOS application will be built and run in the iOS Simulator. Verify if Xcode is installed on your Mac.
3) Launch the Xcode project:
4) Launch YourApp.xcworkspace on iOS.
5) Choose the intended device and begin configuring it.
6) Select "Archive" from the top menu after selecting "Product".
To distribute the application, adhere to the Xcode instructions.


### Android

1) React Native npx on Android
2) Connect an actual device to your computer or launch an Android emulator before launching the program on either.
3) Keystore has been added and established appropriately.
3) select Android and then./gradlew assembleRelease
4) The android/app/build/outputs/apk/release directory will contain the created APK file.


### Test Cases

The command to execute the test cases is npx jest.
