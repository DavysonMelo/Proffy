import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { ScrollView, TextInput, BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import styles from './styles';
import PageHeader from '../../Components/PageHeader';
import TeacherItem from '../../Components/TeacherItem';

function TeacherList() {
  const [filtersVisible, setFiltersVisible] = useState(false);
  
  function handleToggleFiltersVisible() {
    setFiltersVisible(!filtersVisible);
  }
  return(
    <View style={styles.container}>
      <PageHeader
        title="Proffys disponíveis"
        headerRight={(
          <RectButton
            style={styles.filterButton}
            onPress={handleToggleFiltersVisible}
          >
            <Feather  name="filter" color="#FFF" size={20} />
            <Text style={styles.filterButtonText}>Filtrar</Text>
          </RectButton>
        )}
      >

        { filtersVisible && (
          <View style={styles.searchForm}>
            <Text style={styles.label}>Matéria</Text>
            <TextInput
              style={styles.input}
              placeholder="Qual a matéria"
              placeholderTextColor="#C1BCCC"
            />
          
            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da semana</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Qual o dia?"
                  placeholderTextColor="#C1BCCC"
                />
              </View>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Qual horário?"
                  placeholderTextColor="#C1BCCC"
                />
              </View>

            </View>

            <RectButton style={styles.submitButton}>
              <Text style={styles.submitButtonText}>Buscar Proffys</Text>
            </RectButton>
          </View>
        ) }
      </PageHeader>

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16
        }}
      >
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </ScrollView>
    </View>
  )
}

export default TeacherList;