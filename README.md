# react-native-react-native-awesome-tabview

## Getting started

`$ npm install react-native-react-native-awesome-tabview --save`

### Mostly automatic installation

`$ react-native link react-native-react-native-awesome-tabview`

### Manual installation

#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-react-native-awesome-tabview` and add `RNReactNativeAwesomeTabview.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNReactNativeAwesomeTabview.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`

- Add `import com.reactlibrary.RNReactNativeAwesomeTabviewPackage;` to the imports at the top of the file
- Add `new RNReactNativeAwesomeTabviewPackage()` to the list returned by the `getPackages()` method

2. Append the following lines to `android/settings.gradle`:
   ```
   include ':react-native-react-native-awesome-tabview'
   project(':react-native-react-native-awesome-tabview').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-react-native-awesome-tabview/android')
   ```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
   ```
     compile project(':react-native-react-native-awesome-tabview')
   ```

#### Windows

[Read it! :D](https://github.com/ReactWindows/react-native)

1. In Visual Studio add the `RNReactNativeAwesomeTabview.sln` in `node_modules/react-native-react-native-awesome-tabview/windows/RNReactNativeAwesomeTabview.sln` folder to their solution, reference from their app.
2. Open up your `MainPage.cs` app

- Add `using React.Native.Awesome.Tabview.RNReactNativeAwesomeTabview;` to the usings at the top of the file
- Add `new RNReactNativeAwesomeTabviewPackage()` to the `List<IReactPackage>` returned by the `Packages` method

## Usage

```javascript
import RNReactNativeAwesomeTabview from 'react-native-react-native-awesome-tabview';

import React, { Component } from 'react'
import { View } from 'react-native'
import TabBar from '../../components/theme/tabbar';
import { colors } from '../../components/theme/styles';
import { connect } from "react-redux";

class SplitPickUp extends Component {

    render() {
        const { order } = this.props.ShoppingCartReducer

        return (
            <View style={styles.container}>
                <TabBar
                    position='top'
										options=
											{
												[
													'Produtos Disponíveis',
													'Produtos Selecionados'
												]
											}
										screens=
										{
											[
												<SplitItemList
													availableItems={order.items}
													selectedItems={this.props.selectedItems} />,
												<SplitItemChecked	selectedItems={this.props.selectedItems} />
											]
										}
                    selectedTabColor={colors.primary}
                />
            </View>
        )
    }
}

export default connect...

// TODO: What to do with the module?
RNReactNativeAwesomeTabview;
```
