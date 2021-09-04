import React, { memo } from 'react'
// import PropTypes from 'prop-types'
import { Text } from 'react-native'

// Components  
import Base from "./Base"

// Styles
import styles from '../Styles/Button/ButtonSaveStyle'
import { apply } from '../../Themes/OsmiProvider'

const ButtonSave = props => {
  return (
    <Base {...props} buttonStyle={styles.container}>
      <Text style={apply('text-white font-bold text-lg')}>Simpan</Text>
    </Base>
  )
}

// // Prop type warnings
ButtonSave.propTypes = {}
//
// // Defaults for props
// ButtonSave.defaultProps = {
//   someSetting: false
// }

export default memo(ButtonSave)
