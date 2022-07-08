import React from "react";
import ReactDOM from "react-dom";
import {
  Flex,
  Center,
  Spacer,
  Heading,
  SimpleGrid,
  FormLabel,
  IconButton,
} from "@chakra-ui/react";
import InputBox from "../components/InputBox";
import { AddIcon, CloseIcon } from "@chakra-ui/icons";

const Modal = ({
  visible,
  toggle,
  handleSubmit,
  height,
  heightInput,
  width,
  widthInput,
  length,
  lengthInput,
  positionX,
  positionXInput,
  positionY,
  positionYInput,
  positionZ,
  positionZInput,
}) =>
  visible
    ? ReactDOM.createPortal(
        <div className="modal">
          <div className="modal-pop" role="dialog" aria-modal="true">
            <form onSubmit={handleSubmit}>
              <Flex pb="4">
                <Heading size="lg">Add 3D Box</Heading>
                <Spacer />
                <IconButton
                  colorScheme="blue"
                  size="sm"
                  icon={<CloseIcon />}
                  onClick={toggle}
                />
              </Flex>
              <FormLabel htmlFor="email" mt="3">
                Dimension:
              </FormLabel>
              <SimpleGrid columns={3} spacing={1}>
                <InputBox
                  placeholder="H"
                  value={height}
                  valueInput={heightInput}
                />
                <InputBox
                  placeholder="W"
                  value={width}
                  valueInput={widthInput}
                />
                <InputBox
                  placeholder="L"
                  value={length}
                  valueInput={lengthInput}
                />
              </SimpleGrid>
              <FormLabel htmlFor="email" mt="3">
                Position:
              </FormLabel>
              <SimpleGrid columns={3} spacing={1}>
                <InputBox
                  placeholder="X"
                  value={positionX}
                  valueInput={positionXInput}
                />
                <InputBox
                  placeholder="Y"
                  value={positionY}
                  valueInput={positionYInput}
                />
                <InputBox
                  placeholder="Z"
                  value={positionZ}
                  valueInput={positionZInput}
                />
              </SimpleGrid>
              <Center>
                <IconButton
                  mt="6"
                  type="submit"
                  colorScheme="blue"
                  icon={<AddIcon />}
                />
              </Center>
            </form>
          </div>
          <div className="modal-overlay"></div>
        </div>,
        document.body
      )
    : null;

export default Modal;
