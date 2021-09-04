import React, { memo } from 'react'
import PropTypes from "prop-types"
import { IconAdd } from "../../Images/Svg"

// Components
import Base from "./Base"

// Styles
import styles from "../Styles/Button/FloatingCircleStyle"

const FloatingCircle = props => {
    return (
        <Base {...props} buttonStyle={styles.container}>
            <IconAdd width={24} height={24} />
        </Base>
    )
}

FloatingCircle.propTypes = {}

export default memo(FloatingCircle)