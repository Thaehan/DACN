import React, { useEffect, useState } from 'react'
import { Button, TextField } from '@mui/material'

import { getAllAsync, createAsync } from '../Api/TutorialApi'
import { ITutorial } from '../Types/ITutorial'

export default function HomeScreen() {
  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [data, setData] = useState<ITutorial[]>()

  useEffect(() => {
    getAllAsync()
      .then((data1) => {
        console.log(data1)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  return (
    <div>
      <TextField
        value={title}
        onChange={(event) => {
          console.log(event.target.value)
          setTitle(event.target.value)
        }}
      />
      <TextField
        value={description}
        onChange={(event) => {
          console.log(event.target.value)
          setDescription(event.target.value)
        }}
      />
      <Button
        title="Submit"
        onClick={async () => {
          await createAsync({
            title: title,
            description: description,
          })
        }}
      >
        Submit
      </Button>
    </div>
  )
}
