import React, { memo } from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'

import styles from '../Styles/Card/BaseStyle'

const Base = props => {
    const { cardStyle, children } = props

    return (
        <View style={[styles.container, cardStyle]}>
            {children}
        </View>
    )
}

Base.propTypes = {
    cardStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.array])
}

Base.defaultProps = {}

export default memo(Base)