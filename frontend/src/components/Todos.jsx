import React, { useEffect, useState } from 'react'
import {
    Box,
    Button,
    Flex,
    Input,
    InputGroup,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Stack,
    Text,
    useDisclosure
} from "@chakra-ui/react";
import { AddTodo } from './AddTodos';
import { TodoHelper } from './TodoHelper';


export const TareasContext = React.createContext({
    tareas:[], fetchTareas: () => {}
})


export default function Todos () {
    const [tareas, setTareas] = useState([])
    const fetchTareas = async () => {
        const respuesta = await fetch('http://localhost:8000/tarea')
        const tareas = await respuesta.json()
        setTareas(tareas.data)
    }

    useEffect(() => {
        fetchTareas()
    }, [])


  return (
    <TareasContext.Provider value={{tareas, fetchTareas}}>
        <AddTodo/>
        <Stack spacing={5}>
            {tareas.map((tarea) => (
                <TodoHelper item={tarea.item} id={tarea.id} fetchTareas={fetchTareas} />
            ))}
        </Stack>
    </TareasContext.Provider>
  )
}
