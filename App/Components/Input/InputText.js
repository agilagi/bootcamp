import React, { memo } from 'react'
// import PropTypes from 'prop-types'
import { TextInput, View, Text } from 'react-native'

// Styles
import styles from '../Styles/Input/InputTextStyle'
import { apply } from '../../Themes/OsmiProvider'

const InputText = props => {
  const {
    inputContainerStyle,
    setFieldValue,
    inputStyle,
    value,
    error,
    name
  } = props

  return (
    <View style={[styles.container, inputContainerStyle]}>
      <TextInput
        placeholderTextColor={apply('gray-300')}
        {...props}
        style={[styles.inputContainer, inputStyle]}
        onChangeText={val => setFieldValue(name, val)}
        value={value}
      />

      {error && (
        <Text>{error}</Text>
      )}
    </View>
  )
}

// // Prop type warnings
// InputText.propTypes = {
//   someProperty: PropTypes.object,
//   someSetting: PropTypes.bool.isRequired,
// }
//
// // Defaults for props
// InputText.defaultProps = {
//   someSetting: false
// }

export default memo(InputText)
