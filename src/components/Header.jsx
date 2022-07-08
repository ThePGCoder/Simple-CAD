import { Box, Image, Heading, Flex, Spacer } from "@chakra-ui/react";
import "../App.css";
import PGCLogo from "/PGCoder.png";

const Header = () => {
  return (
    <div className="Header">
      <Box padding="6">
        <Flex>
          <Box width="200px" pr="2">
            <Image src={PGCLogo} />
          </Box>
          <Spacer/>
        </Flex>
      </Box>
    </div>
  );
};

export default Header;
