import React, { memo } from "react"
import PropTypes from "prop-types"
import { TouchableOpacity, View, Text } from "react-native"

// Components
import Base from "./Base"
import Icon, { IconTypes, IconBackgrounds } from "./Icon"

// Styles
import styles from "../Styles/Card/ExpenseCardStyle"
import { apply } from "../../Themes/OsmiProvider"

const ExpenseCard = props => {
    const { amount, title, icon, type } = props

    const _getIcon = () => {
        return type === "horizontal" ? {
            icon: IconTypes[icon.toUpperCase()],
            bg: IconBackgrounds[icon.toUpperCase()]
        } : {
            icon: IconTypes[icon.toUpperCase() + "_FILL"],
            bg: IconBackgrounds.NONE
        }
    }

    return (
        <Base cardStyle={type === "horizontal" ? styles.containerHorizontal : styles.containerVertical}>
            <View style={type === "horizontal" ? styles.iconAreaHorizontal : styles.iconAreaVertical}>
                <Icon iconType={_getIcon().icon} iconBackground={_getIcon().bg} />
                <Text style={type === "horizontal" ? styles.titleHorizontal : styles.titleVertical}>{title}</Text>
            </View>
            <Text style={styles.amount}>Rp {amount}</Text>
        </Base>
    )
}

ExpenseCard.propTypes = {
    type: PropTypes.oneOf(["horizontal", "vertical"]),
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
}

ExpenseCard.defaultProps = {
    type: "vertical"
}

export default memo(ExpenseCard)