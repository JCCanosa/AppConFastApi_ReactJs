import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { UpdateTodo } from './UpdateTodo'
import { DeleteTodo } from './DeleteTodo'

export const TodoHelper = ({item, id, fetchTareas}) => {
  return (
    <Box p={1} shadow='sm'>
        <Flex justify='space-between'>
            <Text mt={4} as='div'>
                {item}
                <Flex align='end'>
                    <UpdateTodo item={item} id={id} fetchTareas={fetchTareas} />
                    <DeleteTodo id={id} fetchTareas={fetchTareas}/>
                </Flex>
            </Text>
        </Flex>
    </Box>
  )
}
