import axios from 'axios'
import React, { useState } from 'react'
import { Form, Button, FormControl } from 'react-bootstrap'
import { createSearchParams, useNavigate } from 'react-router-dom'

const SearchBox = ({ navigate }) => {
  const [keyword, setKeyword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()

    // try {
    //   const response = await fetch(
    //     `https://bintus-commerce.onrender.com/api/search/${searchQuery}`
    //   )
    //   if (response.ok) {
    //     const data = await response.json()
    //     setSearchResults(data.results)
    //   } else {
    //     navigate('/')
    //   }
    // } catch (error) {
    //   console.error('Error:', error)
    // }

    if (keyword.trim()) {
      navigate(`/search/${keyword}`)
    } else {
      navigate('/')
    }
  }

  return (
    <Form onSubmit={submitHandler} className='d-flex'>
      <Form.Control
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='search products...'
        className='mr-sm-2 ml-sm-5'></Form.Control>

      <Button type='submit' variant='outline-success' className='p-2'>
        Search
      </Button>
    </Form>
  )
}

export default SearchBox
