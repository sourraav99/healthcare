import { View, Text } from 'react-native'
import React from 'react'
import { fontSizes } from '../hooks/responsive'
import { FONTS } from '../res/fonts'

const TextComp = ({
    children,
    style,
    fontSize = fontSizes.medium,
    fontFamily = FONTS.REGULAR,
    color,
    numberOfLines,
    ...props
}) => {
    return (
        <Text numberOfLines={numberOfLines} style={[{ fontSize: fontSize, fontFamily: fontFamily, color: color,  }, style]}
            {...props} >
            {children}
        </Text>
    )
}

export default TextComp