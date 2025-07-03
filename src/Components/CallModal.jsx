import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Text,
  useDisclosure
} from '@chakra-ui/react';

const CallModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Schedule A Call</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>Please fill in your details and we will contact you shortly.</Text>
          {/* Add form fields here if needed */}
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="red" mr={3} onClick={onClose}>Close</Button>
          <Button colorScheme="blue">Submit</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CallModal;