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
import { width } from '../hooks/responsive';

const Wrapper = ({
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
            <View style={{ backgroundColor: 'translucent' }} />
        </View>
    );
};

export default Wrapper;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    header: {
        paddingVertical: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        color: COLORS.headerText,
        fontSize: 18,
        fontWeight: '600',
    },
});