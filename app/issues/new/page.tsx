'use client'
import { Button, Callout, Text, TextArea, TextField } from '@radix-ui/themes'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { createIssueSchema } from '@/app/validationSchema'
import { z } from "zod"

type IssueForm= z.infer<typeof createIssueSchema>

const NewIssuesPage = () => {
  const {register,handleSubmit,formState:{errors}}= useForm<IssueForm>({
    resolver:zodResolver(createIssueSchema)
  });
  const router=useRouter()
  const [error,setError]=useState('')
  return (
    <div className='max-w-xl'>
      { error && <Callout.Root color='red' className='mb-5'>
        <Callout.Text>{error}</Callout.Text>
      </Callout.Root>
      }
    <form className='space-y-3' 
      onSubmit={handleSubmit(async(data)=> {
        try {
          await axios.post('/api/issues',data)
          router.push('/issues')
          
        } catch (error) {
          setError('An unexpected error occured.')
        }}
    )}>
      <TextField.Root placeholder='Title' {...register('title')}>
      </TextField.Root>
      {errors.title?.message&& <Text color="red" as='p'>{errors.title.message}</Text>}
      <TextArea placeholder='Description' {...register('description')}/>
      {errors.description?.message && <Text color='red' as='p'>{errors.description.message}</Text>}
      <Button>Submit New Issue</Button>
    </form>
    </div>
  )
}

export default NewIssuesPage