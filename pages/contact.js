import Head from 'next/head';
import styles from '../styles/Contact.module.css';

import { VStack, Stack, Text, Input, Button, Flex } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

export default function Contact() {
  // Handles the submit event on form submit.
  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault()

    // Get data from the form.
    const data = {
      first: event.target.first.value,
      last: event.target.last.value,
    }

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data)

    // API endpoint where we send form data.
    const endpoint = '/api/form'

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: 'POST',
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json',
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    }

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options)

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json()
    alert(`Is this your full name: ${result.data}`)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Updog Contact</title>
      </Head>

      <main className={styles.main}>
        <VStack spacing="1px" width="70%" align="center">
          <Text fontSize="2xl" fontWeight="bold">
            Your response matters!
          </Text>

          <Stack textAlign={'center'} flexDirection={'column'}>
            <form onSubmit={handleSubmit}>
              <Input
                placeholder="Enter Name"
                variant="filled"
                mt={2}
                
              />
              
              <Input
                placeholder="Enter Message"
                variant="filled"
                mt={2}
               
              />
         
              <VStack align="center">
                <Button
                  colorScheme="teal"
                  bg={'gray.500'}
                  textColor={'white'}
                  _hover={{
                    bgColor: 'pink.200',
                    textColor: 'gray.900',
                  }}
                  type="submit"
                  mt={2}
                  variant="ghost"
                >
                  Submit Form
                </Button>
              </VStack>
            </form>
          </Stack>
        </VStack>
      </main>
    </div>
  );
}