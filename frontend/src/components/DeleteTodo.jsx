import React, { useContext } from 'react'
import { TareasContext } from './Todos'
import { Button } from '@chakra-ui/react'

export const DeleteTodo = ({id}) => {

    const {fetchTareas} = useContext(TareasContext)

    const deleteTarea = async () => {
        await fetch(`http://localhost:8000/tarea/${id}`, {
            method: 'DELETE',
            headers: { "Content-Type": "application/json" },
            body: {'id': id}
        })
        await fetchTareas()
    }

  return (
    <Button h='1.5rem' size='sm' onClick={deleteTarea}>Borrar Tarea</Button>
  )
}
