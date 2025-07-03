import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalFooter,
  Button,
  Text,
  Box,
  Flex,
  Input,
  FormLabel,
  Image
} from '@chakra-ui/react';
import { FaTimes } from 'react-icons/fa';
import bgImage from '../images/Modal.png';

const CallModal = ({ isOpen, onClose }) => {
  return (
    <Modal
    isOpen={isOpen}
    onClose={onClose}
    isCentered
    closeOnOverlayClick
  >
    {/* semi‑opaque black overlay */}
    <ModalOverlay bg="blackAlpha.600" />
    <ModalContent maxW="600px" bg="transparent" boxShadow="none">
      <ModalBody p={0}>
        <Image
          src={bgImage}
          alt="Modal Content"
          w="100%"
          h="auto"
          cursor="pointer"
          onClick={onClose}
        />
      </ModalBody>
    </ModalContent>
  </Modal>
  );
};

export default CallModal;
