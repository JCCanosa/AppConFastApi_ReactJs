import { Button, Input, InputGroup, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { TareasContext } from './Todos'

export const UpdateTodo = ({ item, id }) => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [tarea, setTarea] = useState(item)
    const { fetchTareas } = useContext(TareasContext)

    const updateTarea = async () => {
        await fetch(`http://localhost:8000/tarea/${id}`, {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ item: tarea })
        })
        onClose()
        await fetchTareas()
    }

    return (
        <>
            <Button h="1.5rem" size='sm' onClick={onOpen}>Actualizar Tarea</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay/>
                <ModalContent>
                    <ModalHeader>Actualizar Tarea</ModalHeader>
                    <ModalCloseButton/>
                    <ModalBody>
                        <InputGroup size='md'>
                            <Input
                                pr="4.5rem"
                                type="text"
                                placeholder='Añade una tarea'
                                aria-label='Añade una tarea'
                                value={tarea}
                                onChange={event => setTarea(event.target.value)}
                            />
                        </InputGroup>
                    </ModalBody>

                    <ModalFooter>
                        <Button h="1.5rem" size='sm' onClick={updateTarea}>Actualizar Tarea</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
