
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
import BackgroundShader from './components/BackgroundShader';

 
const containerTheme = {
  color: 'teal.100',
  bg: 'teal.500',
  borderRadius: 'xl',
  boxShadow: 'md',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  maxW:"480px"
};



function ContactMe() {
  return (

    <Container {...containerTheme}>
      <Fieldset.Root size="lg" maxW="md">
        <Stack>
          <Fieldset.Legend>
            <Heading color="teal.100"> Contact Me</Heading>
          </Fieldset.Legend>
          <Fieldset.HelperText color="teal.100">
            Please provide contact your details below
          </Fieldset.HelperText>
        </Stack>
        <Fieldset.Content>
          <Field label="Name">
            <Input bg="gray.300" name="name" placeholder="Enter your name" />
          </Field>
          <Field label="Email address">
            <Input bg="gray.300" name="email" type="email" placeholder="Enter your email address" />
          </Field>
          <Field label="Message">
            <Textarea bg="gray.300" name="message" placeholder="Enter your message" />
          </Field>
        </Fieldset.Content>
        <Button  color="teal.100" bg="teal.700" type="submit" alignSelf="flex-start">
          Submit
        </Button  >
      </Fieldset.Root>
    </Container>
  )
}

function AboutMe() {
  return (
    <Container {...containerTheme}
      label="About Me" 
    >

      <Heading>About Me</Heading>
      <Text >
          
        I hold a BS in Computer science and have experience applying my programming talent to many different fields
        from data science to shader programming. I'm interested in anything involving 3D graphics, digital audio,
        education, statistics, web development, and mobile development.
                  
      </Text>  
      <Text>
        I look forward to working with you!
      </Text>
    </Container>
  )
}

function Projects() {
  return (
    <Container {...containerTheme}>
      <Heading>Projects</Heading>
      <Text>
        I have worked on many projects. Here are a few of them.
      </Text>
    </Container>
  )
}

function App() {
    
  return(
    <Container centerContent margin="10px" padding="20px">
        <Flex gap="14" direction="column" align="center">          
            
          <BackgroundShader />
              <AboutMe />
            

              <Projects />
            
            
              <ContactMe />
            

        </Flex>
    </Container>
  

  
  )
}

export default App;