import React, { useState } from "react"
import {
  SafeAreaView,
  SectionList,
  ScrollView,
  FlatList,
  View,
  Text
} from "react-native"

//components
import TopCard from "../Components/Card/TopCard"
import ExpenseCard from "../Components/Card/ExpenseCard"
import ButtonAdd from "../Components/Button/FloatingCircle"

//styles
import styles from './Styles/HomeScreenStyle'
import { apply } from '../Themes/OsmiProvider'

const Home = props => {
  const { navigation } = props
  const [categories, setCategories] = useState([
    {
      id: 1,
      icon: 'pizza',
      title: 'Makanan',
      total: 70000
    },
    {
      id: 2,
      icon: 'signal',
      title: 'Internet',
      total: 50000
    },
    {
      id: 3,
      icon: 'transport',
      title: 'Transportasi',
      total: 20000
    }
  ])

  const [expenses, setExpenses] = useState([
    {
      sectionTitle: 'Hari ini',
      data: [{
        id: 1,
        icon: 'pizza',
        title: 'Ayam Geprek',
        amount: 15000
      }, {
        id: 2,
        icon: 'transport',
        title: 'GoJek',
        amount: 15000
      }]
    },
    {
      sectionTitle: 'Kemarin',
      data: [{
        id: 1,
        icon: 'signal',
        title: 'Paket Data',
        amount: 50000
      }, {
        id: 2,
        icon: 'pizza',
        title: 'Makan Siang',
        amount: 13000
      }]
    }
  ])

  return (
    <SafeAreaView style={apply('flex bg-white')}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.topContainer}>
          <Text style={styles.topContainerTitle}>Halo, User!</Text>
          <Text style={styles.topContainerDesc}>Jangan lupa catat keuanganmu setiap hari!</Text>

          <View style={apply('full row mt-5')}>
            <TopCard
              type="left"
              title="Pengeluaranmu hari ini"
              amount={30000}
            />

            <TopCard
              type="right"
              title="Pengeluaranmu bulan ini"
              amount={335500}
            />
          </View>
        </View>

        <Text style={styles.titleSection}>Pengeluaran berdasarkan kategori</Text>
        <FlatList
          data={categories}
          extraData={categories}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => (
            <ExpenseCard
              type="horizontal"
              icon={item?.icon}
              title={item?.title}
              amount={item?.total}
            />
          )}
          contentContainerStyle={apply('p-5')}
          horizontal
        />

        <SectionList
          sections={expenses}
          extraData={expenses}
          keyExtractor={(_, index) => index.toString()}
          contentContainerStyle={apply('p-5')}
          renderSectionHeader={({ section }) => <Text style={[styles.titleSection, apply('ml-0 mb-3')]}>{section?.sectionTitle}</Text>}
          renderItem={({ item }) => (
            <ExpenseCard
              icon={item?.icon}
              title={item?.title}
              amount={item?.amount}
            />
          )}
        />
      </ScrollView>

      <ButtonAdd
        ripple="light"
        rippleRadius={24}
        onPress={() => navigation.navigate("AddExpense")}
      />
    </SafeAreaView>
  )
}

export default Home