
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
  maxW: '524px',
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
        Hello! I'm Drew Bruggman, a software and web development freelancer with a broad skillset and an honest drive 
        to learn new tech and expand my skillset.  
        <br />
        <br />I have a BS in Computer Science from California State University Sacramento, where I graduated with honors.
        I am a problem solver and critical thinker with a creative bent.
        I have been a passionate creator for all of my life, from my early days as an illustrator, to my formative
        years as a journalist and writer, to my efforts as a music producer and composer.
         
        <br /> 
        <br />I bring a broad understanding of disparate concepts and schools of thoughts to the table, and I am a
        perceptive listener and communicator. 
        I hope you will consider me for your next project.
        Below are some of the other projects I've worked on, and below that is a contact form you can use to reach out to me.        
        <br/>
        <br/>I look forward to working with you!
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
    <>
      <BackgroundShader />
      <Container centerContent padding="10%">
          <Flex gap="14" direction="column" align="center">
            <AboutMe />
            <Projects />
            <ContactMe />
          </Flex>
      </Container>
    </>  
  )
}

export default App;