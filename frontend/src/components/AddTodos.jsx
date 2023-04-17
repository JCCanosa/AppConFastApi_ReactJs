import React, { useContext, useState } from "react"
import { TareasContext } from "./Todos"
import { InputGroup, Input } from "@chakra-ui/react"

export function AddTodo() {
    const [item, setItem] = useState('')
    const {tareas, fetchTareas} = useContext(TareasContext)
  
    const handleInput = e => {
      setItem(e.target.value)
    }
  
    const handleSubmit = (event) => {
      const newTarea = {
        "id": tareas.length + 1,
        "item": item
      }
  
      fetch("http://localhost:8000/tarea", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTarea)
      }).then(fetchTareas)
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type="text"
            placeholder="Add a todo item"
            aria-label="Add a todo item"
            onChange={handleInput}
          />
        </InputGroup>
      </form>
    )
  }
