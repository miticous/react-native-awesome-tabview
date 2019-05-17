import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native'

export default class TabBar extends Component {
    constructor() {
        super()
        this.state = {
            selectedTabIndex: 0
        }
    }

    render() {
        const { tabTitles, onPressTabItem, screens, position, selectedTabColor } = this.props

        return (
            <View style={{ flex: 1 }}>
                <View style={[
                    styles.tabBarTitleContainer,
                    {
                        top: position === 'top' ? 0 : undefined,
                        bottom: position === 'bottom' ? 0 : undefined,
                        position: position === 'top' ? 'relative' : 'absolute'
                    }
                ]}>
                    {
                        tabTitles && !!tabTitles.length && tabTitles.map((title, index) =>
                            <TouchableWithoutFeedback
                                key={index}
                                onPress={() => this.setState({ selectedTabIndex: index }, onPressTabItem)}
                            >
                                <View style={{
                                    flex: 1,
                                    alignItems: 'center',
                                    borderTopColor: index === this.state.selectedTabIndex ? selectedTabColor : '#F6F6F6',
                                    borderTopWidth: 0.8,
                                    paddingVertical: 15
                                }}>
                                    <Text style={{
                                        fontWeight: index === this.state.selectedTabIndex ? 'bold' : 'normal'
                                    }}>
                                        {title}
                                    </Text>
                                </View>
                            </TouchableWithoutFeedback>
                        )
                    }
                </View>
                <View>
                    {
                        screens && !!screens.length && screens.map((scn, index) =>
                            index === this.state.selectedTabIndex && <View key={index}>{scn}</View>
                        )
                    }
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    tabBarTitleContainer: {
        right: 0,
        left: 0,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
});
