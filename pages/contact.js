

import Head from 'next/head';
import { VStack, Stack, Text, Input, Button, Flex  } from "@chakra-ui/react";
import { useForm } from 'react-hook-form';



export default function Contact () {
  const {
    register,
    handleSubmit
  } = useForm();
  
  
  function submitHandler (data) {
    console.log(data);
  }
    
    return (
      <>
      <Head>
        <title>Create Next App</title>
      </Head>
       
      <VStack spacing="1px" width="70%" align="center">
      <Text fontSize="2xl" fontWeight="bold">
        Your response matters!
      </Text>

      <Stack textAlign={'center'} flexDirection={'column'}>
        <form onSubmit={handleSubmit(submitHandler)}>
          <Input
            placeholder="Enter Name"
            variant="filled"
            mt={2}
            {...register('Name', { required: 'Please enter your name' })}
          />
          {errors.Name && errors.Name.message}
          <Input
            placeholder="Enter Message"
            variant="filled"
            mt={2}
            {...register('Feedback', { required: 'Enter your feedback!' })}
          />
          {errors.Feedback && errors.Feedback.message}
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
    </>
    )
}
