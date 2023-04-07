import { Box, Heading, Text } from '@chakra-ui/react';

type Props = {
  children: React.ReactNode;
  title: string;
  han: string;
  situation: string;
  content: string;
  mainColor: "blue.100" | "green.100" | "yellow.100" | "purple.100" | "red.100";
  subColor: "blue.300" | "green.300" | "yellow.300" | "purple.300" | "red.300"; 
};

export const Yaku = (props: Props) => {
  const { children, title, han, situation, content, mainColor, subColor } = props;

  return (
    <Box border="solid" margin="2% 0">
      <Box bg={mainColor} marginBottom="1.5%">
        <Heading fontSize="25px">{title}</Heading>
        <Box display="flex" fontSize="18px">
          <Text bg={subColor} border="solid" margin="0 1%">
            {han}
          </Text>
          <Text bg={subColor} border="solid" marginRight="1%">
            {situation}
          </Text>
        </Box>
      </Box>
      {children}
      <Text fontSize="20px" margin="1% 1%">
        {content}
      </Text>
    </Box>
  );
};