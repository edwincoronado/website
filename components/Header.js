import { Box, Flex, Heading, Spacer } from "@chakra-ui/react";
import ColorModeSwitch from "../components/ColorModeSwitch";

const Header = () => {
  return (
    <Flex alignItems="center" flexWrap="wrap" pt="2" mb="16">
      <Box>
        <Heading>edwin coronado</Heading>
      </Box>
      <Spacer />
      <Box>
        <ColorModeSwitch />
      </Box>
    </Flex>
  );
};

export default Header;
