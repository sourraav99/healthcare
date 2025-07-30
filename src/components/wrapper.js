import React from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ViewStyle,
    StyleProp,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { COLORS } from '../res/colors';

const Wrapper= ({
    children,
    headerChildren,
    headerStyles,
    showHeader = true,
    containerStyle,
}) => {
    const insets = useSafeAreaInsets();

    return (
        <View style={[styles.container, containerStyle]}>
            <View style={{ paddingTop: insets.top }} />
            {showHeader && (
                <View style={[styles.header, headerStyles]}>
                    {headerChildren}
                </View>
            )}
            {children}
                  <View style={{ backgroundColor:'translucent' }} />
        </View>
    );
};

export default Wrapper;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        // marginHorizontal: 16,
        paddingVertical: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // borderBottomWidth:0.5,
        // borderBottomColor:COLORS.border
    },
    // leftContainer: {
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     gap: 10,
    // },
    title: {
        color: COLORS.headerText,
        fontSize: 18,
        fontWeight: '600',
    },
    // iconButton: {
    //     backgroundColor: COLORS.secondaryOpacity(0.4),
    //     padding: 10,
    //     borderRadius: 999,
    // },
    // iconImage: {
    //     width: 20,
    //     height: 20,
    //     resizeMode: 'contain',
    // },
    // input: {
    //     height: 38,
    //     minWidth: 180,
    //     borderRadius: 10,
    //     paddingHorizontal: 10,
    //     borderColor: COLORS.whiteOpacity(0.2),
    //     borderWidth: 1,
    //     color: COLORS.white,
    // },
});