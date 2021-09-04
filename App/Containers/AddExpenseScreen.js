import React, { useCallback } from 'react'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { KeyboardAvoidingView, Platform, ScrollView, View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Yup from 'yup'
import { Formik } from 'formik'

// Styles
import styles from './Styles/AddExpenseScreenStyle'
import { apply } from '../Themes/OsmiProvider'

// Components
import InputText from '../Components/Input/InputText'
import ButtonSave from "../Components/Button/ButtonSave"

// Validation Rules
const Schema = Yup.object().shape({
  title: Yup.string()
    .required("Nama pengeluaran wajib diisi"),
  category: Yup.object()
    .required("Kategori pengeluaran wajib diisi"),
  date: Yup.string()
    .required("Tanggal pengeluaran wajib diisi"),
  amount: Yup.string()
    .required("Jumlah pengeluaran wajib diisi")
})

const AddExpenseScreen = props => {

  const renderForm = ({ values, setFieldValue, errors, handleSubmit }) => {
    const setValue = useCallback(setFieldValue, [])

    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={apply('p-5')}
      >
        <View style={styles.inputWrapper}>
          <InputText
            placeholder="Nama Pengeluaran"
            setFieldValue={setValue}
            value={values.title}
            error={errors.title}
            name="title"
          />
        </View>
        <View style={styles.inputWrapper}>
          <InputText
            placeholder="Jumlah Pengeluaran"
            setFieldValue={setValue}
            value={values.amount}
            error={errors.amount}
            name="amount"
          />
        </View>

        <ButtonSave
          ripple="light"
          rippleRadius={250}
        />
      </ScrollView>
    )
  }

  const handleSubmit = async (values, actions) => {
    actions.setSubmitting(false);

    return false;
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        keyboardVerticalOffset={60}
        style={apply('flex full')}>
        <Formik
          onSubmit={handleSubmit}
          validationSchema={Schema}
          validateOnChange={false}
          initialValues={{
            title: '',
            category: {},
            date: '',
            amount: ''
          }}
        >
          {formProps => renderForm(formProps)}
        </Formik>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(AddExpenseScreen)
