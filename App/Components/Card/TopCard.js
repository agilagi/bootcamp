import React, { memo } from "react"
import { Text } from "react-native"
import PropTypes from 'prop-types'

//components
import Base from './Base'

//style
import styles from '../Styles/Card/TopCardStyle'
import { apply } from "../../Themes/OsmiProvider"

const TopCard = props => {
    const {
        amount,
        title,
        type
    } = props

    return (
        <Base cardStyle={type === "left" ? styles.leftCard : styles.rightCard} >
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.amount}>Rp {amount}</Text>
        </Base>
    )
}

TopCard.propTypes = {
    title: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['left', 'right']).isRequired,
    amount: PropTypes.number.isRequired
}

TopCard.defaultProps = {
    title: 'Pengeluaranmu',
    type: 'left',
    amount: 0
}

export default memo(TopCard)