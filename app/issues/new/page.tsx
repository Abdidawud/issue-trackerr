'use client'
import { Button, TextArea, TextField } from '@radix-ui/themes'
import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useRouter } from 'next/navigation'


interface IssueForm{
  title:string;
  description:string;
}
const NewIssuesPage = () => {
  const {register,handleSubmit}= useForm<IssueForm>();
  const router=useRouter()
  return (
    <form className='max-w-xl space-y-3' 
      onSubmit={handleSubmit(async(data)=> {
        await axios.post('/api/issues',data)
        router.push('/issues')}
    )}>
      <TextField.Root placeholder='Title' {...register('title')}>
      </TextField.Root>
      <TextArea placeholder='Description' {...register('description')}/>
      <Button>Submit New Issue</Button>
    </form>
  )
}

export default NewIssuesPage