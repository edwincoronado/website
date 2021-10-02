import { useState } from "react";

import {
  Button,
  HStack,
  Textarea,
  Collapse,
  useDisclosure,
} from "@chakra-ui/react";

import marked from "marked";

const MarkdownEditor = () => {
  const { isOpen, onToggle } = useDisclosure();

  const handleInputChange = (e) => {
    const markedString = marked(e.target.value);
    document.getElementById("markdown").innerHTML = markedString;
  };

  return (
    <>
      <Button onClick={onToggle}>Click Me</Button>
      <HStack spacing="24px">
        <Collapse in={isOpen} animateOpacity>
          <Textarea
            onChange={handleInputChange}
            placeholder="Here is a sample placeholder"
            size="lg"
          />
        </Collapse>
        <div id="markdown" />
      </HStack>
    </>
  );
};

export default MarkdownEditor;
