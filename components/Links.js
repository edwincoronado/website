import { Flex, Icon, IconButton, Link, Spacer } from "@chakra-ui/react";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";

const Links = () => {
  return (
    <Flex mt="8">
      <Spacer />
      <Link href="mailto:hi@edwincoronado.io" isExternal>
        <IconButton
          aria-label="E-mail Me"
          mx="1"
          colorScheme="teal"
          isRound="true"
          size="sm"
        >
          <Icon as={AiFillMail} />
        </IconButton>
      </Link>
      <Link href="https://www.linkedin.com/in/edwincoronado" isExternal>
        <IconButton
          aria-label="LinkedIn Profile"
          mx="1"
          colorScheme="teal"
          isRound="true"
          size="sm"
        >
          <Icon as={AiFillLinkedin} />
        </IconButton>
      </Link>
      <Link href="https://github.com/edwincoronado" isExternal>
        <IconButton
          aria-label="GitHub Profile"
          mx="1"
          colorScheme="teal"
          isRound="true"
          size="sm"
        >
          <Icon as={AiFillGithub} />
        </IconButton>
      </Link>
      <Spacer />
    </Flex>
  );
};

export default Links;
