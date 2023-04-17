from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

origins = [
    "http://localhost:3000",
    "localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*']
)

tareas = [
    {
        "id": "1",
        "item": "Read a book."
    },
    {
        "id": "2",
        "item": "Cycle around town."
    },
    {
        "id": "3",
        "item": "Ir a la compra."
    }
]


@app.get('/tarea')
async def get_tarea():
    return {'data': tareas}

@app.post('/tarea')
async def add_tarea(tarea: dict):
    tareas.append(tarea)
    return {
        "data": {'Tarea añadida'}
    }

@app.put('/tarea/{id}')
async def update_tarea(id: int, body: dict):
    for tarea in tareas:
        if int(tarea['id']) == id:
            tarea['item'] = body['item']
            return {
                'data': f"La tarea con id {id} ha sido actualizada"
            }
        
    return {
        'data': f'La tarea con id {id} no se ha encontrado'
    }

@app.delete('/tarea/{id}')
async def delete_tarea(id: int):
    for tarea in tareas:
        if int(tarea['id']) == id:
            tareas.remove(tarea)
            return {
                'data': f"La tarea con id {id} se a eliminado"
            }
        
    return {
        'data': f'La tarea {id} no se ha encontrado'
    }