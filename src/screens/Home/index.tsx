import { useState } from 'react'
import { View, Image, TextInput, TouchableOpacity, Text, FlatList, Alert } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import uuid from 'react-native-uuid'

import { styles } from './styles'
import logo from '../../assets/logo.png'
import clipboard from '../../assets/clipboard.png'
import { Task } from '../../components/Task'

type Task = {
  id: string
  description: string
  checked: boolean
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [task, setTask] = useState('')
  const [inputFocus, setInputFocus] = useState(false)

  function handleAddTask() {
    if (task === '') return Alert.alert('Alera', 'Coloque uma descrição para a tarefa!')
    const newTask = {
      id: uuid.v4().toString(),
      description: task,
      checked: false
    }
    setTasks(prevState => [...prevState, newTask])
    setTask('')
  }

  function handleRemoveTask(id: string) {
    Alert.alert('Deletar', 'Deseja realmente deletar essa tarefa?', [
      {
        text: 'Sim',
        onPress: () => setTasks(prevState => prevState.filter(task => task.id !== id))
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  function handleChekcedTask(id: string) {
    setTasks(prevState => {
      const newState = prevState.map(task => {
        if (task.id === id) {
          return { ...task, checked: !task.checked }
        }
        return task
      })
      return newState
    })
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} />
      </View>

      <View style={styles.form}>
        <TextInput
          style={[styles.input, inputFocus && { borderColor: '#5E60CE' }]}
          placeholder='Adicione uma nova tarefa'
          placeholderTextColor='#808080'
          onChangeText={setTask}
          onFocus={() => setInputFocus(true)}
          onBlur={() => setInputFocus(false)}
          value={task}
        />
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.button}
          onPress={handleAddTask}
        >
          <Feather name='plus-circle' size={16} color='#F2F2F2' />
        </TouchableOpacity>
      </View>

      <View style={styles.infos}>
        <View style={styles.info}>
          <Text style={[styles.infoText, { color: '#4EA8DE' }]}>Criadas</Text>
          <View style={styles.counter}>
            <Text style={styles.counterText}>
              {tasks.length}
            </Text>
          </View>
        </View>
        <View style={styles.info}>
          <Text style={[styles.infoText, { color: '#8284FA' }]}>Concluídas</Text>
          <View style={styles.counter}>
            <Text style={styles.counterText}>
              {tasks.filter(task => task.checked).length}
            </Text>
          </View>
        </View>
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        style={{ marginHorizontal: 24 }}
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Task
            description={item.description}
            checked={item.checked}
            check={() => handleChekcedTask(item.id)}
            remove={() => handleRemoveTask(item.id)}
          />
        )}
        ListEmptyComponent={() => (
          <View style={styles.empty}>
            <Image style={{ marginBottom: 16 }} source={clipboard} />
            <Text style={[styles.emptyText, { fontWeight: 'bold' }]}>Você ainda não tem tarefas cadastradas</Text>
            <Text style={[styles.emptyText]}>Crie tarefas e organize seus itens a fazer</Text>
          </View>
        )}
      />
    </View>
  )
}