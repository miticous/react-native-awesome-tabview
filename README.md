# react-native-awesome-tabview

## Getting started

`$ npm install react-native-awesome-tabview --save`

## Usage

```javascript
import RNReactNativeAwesomeTabview from 'react-native-awesome-tabview';

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
		    options={[
			'Produtos Disponíveis',
			'Produtos Selecionados'
		    ]}
		    screens={[
			<SplitItemList
			   availableItems={order.items}
		  	   selectedItems={this.props.selectedItems}
			 />,
			<SplitItemChecked	selectedItems={this.props.selectedItems} />
		    ]}
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
