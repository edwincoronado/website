import { Heading, Link, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <>
      <Heading as="h1" size="2xl" color="teal.400">
        Hello!
      </Heading>
      <Text py="4">
        My Name is Edwin Coronado. I am a software engineer currently working at{" "}
        <Link href="https://servicenow.com" color="teal.400" isExternal>
          ServiceNow
        </Link>
        .
        <br />
        <br />I also co-founded{" "}
        <Link href="https://uyuyuy.com" color="teal.400" isExternal>
          ¡UyUyUy!
        </Link>
        ; A Mexican-inspired nutritional supplements brand with original flavors
        and{" "}
        <Link href="https://fntlife.com" color="teal.400" isExternal>
          FNT Life
        </Link>
        ; a fitness & nutrition coaching company and{" "}
        <Link href="https://youtube.com/c/fntlife" color="teal.400" isExternal>
          YouTube channel
        </Link>{" "}
        with over 211k subscribers.
        <br />
        <br />
        You can find me in the links below.
      </Text>
    </>
  );
};

export default About;
