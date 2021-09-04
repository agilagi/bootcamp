import React, { memo } from "react"
import PropTypes from 'prop-types'
import { View } from "react-native"

// Icon
import {
    IconPizza,
    IconSignal,
    IconTransport,
    IconPizzaFill,
    IconSignalFill,
    IconTransportFill
} from "../../Images/Svg"

//styles
import styles from "../Styles/Card/IconStyle"
import { apply } from "../../Themes/OsmiProvider"

export const IconTypes = Object.freeze({
    PIZZA: <IconPizza width={24} height={24} />,
    SIGNAL: <IconSignal width={24} height={24} />,
    TRANSPORT: <IconTransport width={24} height={24} />,
    PIZZA_FILL: <IconPizzaFill width={24} height={24} />,
    SIGNAL_FILL: <IconSignalFill width={24} height={24} />,
    TRANSPORT_FILL: <IconTransportFill width={24} height={24} />,
})

export const IconBackgrounds = Object.freeze({
    NONE: apply("bg-transparant"),
    PIZZA: apply("bg-yellow-500"),
    SIGNAL: apply("bg-cyan-500"),
    TRANSPORT: apply("bg-purple-500"),
})

const CardIcon = props => {
    const { iconType, iconBackground } = props

    return (
        <View style={[styles.container, iconBackground]}>
            {iconType}
        </View>
    )
}

CardIcon.propTypes = {
    iconType: PropTypes.oneOf(Object.values(IconTypes)).isRequired,
    iconBackground: PropTypes.oneOf(Object.values(IconBackgrounds)).isRequired,
}

export default memo(CardIcon)