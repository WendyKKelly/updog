

import { VStack, Text, Input } from "@chakra-ui/react"




function Contact () {
    function submitHandler () {
     // POST request
    }
    
    return (
       
        <VStack>
            
          <Text fontSize="2xl" fontWeight="bold">
            Your response matters!
          </Text>
          
          <form onSubmit={submitHandler}>
              <Input placeholder="Enter Name" />
              <Button>Submit!</Button>
          </form>
         
        </VStack>
        
    )
}
