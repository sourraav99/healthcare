import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { fontSizes, height, usePercentageWidth } from '../hooks/responsive';
import { COLORS } from '../res/colors';
import { FONTS } from '../res/fonts';
import TextComp from './textComp';

const InputField = ({
    label = '',
    icon = null,
    placeholder = '',
    value,
    onChangeText,
    secureTextEntry = false,
    keyboardType = 'default',
    containerStyle,
    onFocus,
    onBlur,
    ...props
}) => {
    return (
        <View style={[{ marginBottom: height * 0.03 }, containerStyle]}>
            <View style={{
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderRadius: 10,
                borderWidth: 1,
                borderColor: COLORS.border,
                position: 'relative',
                width: '100%',
            }}>
                {icon && (
                    <View style={{ paddingHorizontal: usePercentageWidth(3) }}>
                        {icon}
                    </View>
                )}
                <TextInput
                    value={value}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onChangeText={onChangeText}
                    placeholder={placeholder}
                    style={{
                        flex: 1,
                        height: height * 0.065,
                        fontFamily: FONTS.REGULAR,
                        fontSize: fontSizes.medium,
                        paddingRight: 10,
                    }}
                    secureTextEntry={secureTextEntry}
                    keyboardType={keyboardType}
                    {...props}
                />
            </View>

            {label ? (
                <View style={{
                    position: 'absolute',
                    top: -usePercentageWidth(2.5),
                    left: usePercentageWidth(4),
                    backgroundColor: COLORS.white,
                    paddingHorizontal: usePercentageWidth(3),
                }}>
                    <TextComp style={{
                        fontSize: fontSizes.small,
                        fontFamily: FONTS.REGULAR,
                        color: COLORS.text,
                    }}>{label}</TextComp>
                </View>
            ) : null}
        </View>
    );
};

export default InputField;
