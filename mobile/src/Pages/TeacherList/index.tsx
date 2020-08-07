import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { ScrollView, TextInput, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage';

import styles from './styles';
import PageHeader from '../../Components/PageHeader';
import TeacherItem, { Teacher } from '../../Components/TeacherItem';
import api from '../../services/api';

function TeacherList() {
  const [filtersVisible, setFiltersVisible] = useState(false);

  const [subject, setSubject] = useState('');
  const [week_day, setWeek_day] = useState('');
  const [time, setTime] = useState('');
  const [teachers, setTeachers] = useState([]);
  const [favorites, setFavorites] = useState<number[]>([]);


  async function getFavotites() {
    const response = await AsyncStorage.getItem('favorites');
    if(response) {
      const favoriteTeachers = JSON.parse(response);
      const favoriteTeachersId = favoriteTeachers.map((teacher: Teacher) => {
        return teacher.id;
      });

      setFavorites(favoriteTeachersId);
    }
  }
  
  function handleToggleFiltersVisible() {
    setFiltersVisible(!filtersVisible);
  }

  async function searchTeachers() {
    getFavotites();

    const response = await api.get('classes', {
      params: {
        subject,
        week_day,
        time
      }
    });
    setFiltersVisible(false);
    setTeachers(response.data);
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
              value={subject}
              onChangeText={setSubject}
              placeholder="Qual a matéria"
              placeholderTextColor="#C1BCCC"
            />
          
            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da semana</Text>
                <TextInput
                  style={styles.input}
                  value={week_day}
                  onChangeText={setWeek_day}
                  placeholder="Qual o dia?"
                  placeholderTextColor="#C1BCCC"
                />
              </View>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text>
                <TextInput
                  style={styles.input}
                  value={time}
                  onChangeText={setTime}
                  placeholder="Qual horário?"
                  placeholderTextColor="#C1BCCC"
                />
              </View>

            </View>

            <RectButton style={styles.submitButton} onPress={searchTeachers}>
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
        {teachers.map((teacher: Teacher) => {
          return (
            <TeacherItem
              key={teacher.id}
              teacher={teacher}
              favorite={favorites.includes(teacher.id)}
            />
          )
        })}
      </ScrollView>
    </View>
  )
}

export default TeacherList;