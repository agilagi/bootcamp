import React, { memo } from 'react'
import PropTypes from "prop-types"
import {
    TouchableNativeFeedback,
    TouchableOpacity,
    Platform,
    View,
} from "react-native"

// Style

import styles from "../Styles/Button/BaseStyle"
import { apply } from '../../Themes/OsmiProvider'

const BaseButton = props => {
    const { buttonStyle, ...restProps } = props
    const { ripple, rippleRadius } = restProps

    return Platform.OS === "ios" ? (
        <TouchableOpacity activeOpacity={0, 8} {...props} style={buttonStyle}>
            {props.children}
        </TouchableOpacity>
    ) : (
        <TouchableNativeFeedback
            background={TouchableNativeFeedback.Ripple(
                apply(ripple === "light" ? "white-soft" : "black-soft"),
                false,
                rippleRadius
            )}
            {...restProps}
        >
            <View style={buttonStyle}>
                {props.children}
            </View>
        </TouchableNativeFeedback>
    )
}

BaseButton.propTypes = {
    buttonStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    ripple: PropTypes.string,
    rippleRadius: PropTypes.number
}

BaseButton.defaultProps = {
    ripple: "",
    rippleRadius: 0
}

export default memo(BaseButton)