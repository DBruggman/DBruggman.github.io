
import {
  Button,
  Fieldset,
  Input,
  Stack,
  Textarea,
  Center,
  Flex,
  Container,
  Heading,
  Text,
  Separator
} from '@chakra-ui/react'
import { Field } from './components/ui/field'
import React, { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'
 

function ContactMe() {
  return (
    <Fieldset.Root size="lg" maxW="md">
      <Stack>
        <Fieldset.Legend>
          <Heading> Contact Me</Heading>
        </Fieldset.Legend>
        <Fieldset.HelperText>
          Please provide contact your details below

        </Fieldset.HelperText>
      </Stack>

      <Fieldset.Content>
        <Field  label="Name">
          <Input name="name" placeholder="Enter your name" />
        </Field>

        <Field label="Email address">
          <Input name="email" type="email" placeholder="Enter your email address" />
        </Field>

        <Field label="Message">
          <Textarea name="message" placeholder="Enter your message" />
        </Field>
      </Fieldset.Content>

      <Button type="submit" alignSelf="flex-start">
        Submit
      </Button>
    </Fieldset.Root>
  )
}

function AboutMe() {
  return (
    <>
      <Heading>About Me</Heading>
      <Text >
          I hold a BS in Computer science and have experience applying my programming talent to many different fields
          from data science to shader programming. 
      </Text>
        
        
        
      <Text>
        I look forward to working with you!
      </Text>
    </>
  )
}


function App() {
    
  return(
    <>
        <Flex direction="column" align="center">
      <Stack gap="14" align="center">  
          
            <Container centerContent>
              <AboutMe />
            </Container>
            <Separator />
            <Container centerContent>
              <ContactMe />
            </Container>
          
      </Stack>
        </Flex>
    </>
  )
}

export default App;