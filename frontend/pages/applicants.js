import {
  Avatar,
  Heading,
  Box,
  Button,
  HStack,
  Icon,
  Stack,
  Tag,
  Text,
  useColorModeValue,
  Wrap,
} from "@chakra-ui/react";
import * as React from "react";
import { HiCash, HiLocationMarker, HiShieldCheck } from "react-icons/hi";
import { Card } from "../components/__common/Applicant/Card";
import { CustomerReviews } from "../components/__common/Applicant/CustomerReviews";

export default function Applicants() {
  return (
    <>
      <Heading as="h1" fontSize="4xl" noOfLines={1}>
        Applicants
      </Heading>
      <Box as="section">
        <Card>
          <Stack
            direction={{
              base: "column",
              md: "row",
            }}
            spacing={{
              base: "3",
              md: "10",
            }}
            align="flex-start"
          >
            <Stack spacing="4">
              <Avatar
                size="2xl"
                src="https://lh3.googleusercontent.com/a-/AFdZucqHg2tLc6BNFZ_ueymDIji1EGtsK89oGoko55uDMg=s120-p-k-rw-no"
                name="Melinda Paul"
              />
              <Button
                width="full"
                variant="outline"
                display={{
                  base: "none",
                  md: "initial",
                }}
              >
                Contact me
              </Button>
            </Stack>
            <Box>
              <Stack
                spacing={{
                  base: "1",
                  md: "2",
                }}
                direction={{
                  base: "column",
                  md: "row",
                }}
              >
                <Text as="h2" fontWeight="bold" fontSize="xl">
                  Kostyan
                </Text>
                <HStack
                  fontSize={{
                    base: "md",
                    md: "lg",
                  }}
                >
                  <Text
                    as="span"
                    color={useColorModeValue("gray.500", "gray.300")}
                    lineHeight="1"
                  >
                    @kostyan_enterprise
                  </Text>
                  <Icon as={HiShieldCheck} color="green.500" />
                </HStack>
              </Stack>
              <Text mt="2">Backend Developer</Text>
              <Wrap shouldWrapChildren my="4" spacing="4">
                <CustomerReviews reviewCount={84} rating={5.0} />
                <HStack>
                  <Icon as={HiCash} fontSize="xl" color="gray.400" />
                  <Text
                    fontSize="sm"
                    fontWeight="medium"
                    color={useColorModeValue("gray.600", "gray.300")}
                  >
                    <b>$2.5k</b> earned
                  </Text>
                </HStack>

                <HStack spacing="1">
                  <Icon as={HiLocationMarker} color="gray.400" />
                  <Text
                    fontSize="sm"
                    fontWeight="medium"
                    color={useColorModeValue("gray.600", "gray.300")}
                  >
                    Toronto, Canada
                  </Text>
                </HStack>
              </Wrap>
              <Box fontSize="sm" noOfLines={2}>
                Hi, I am a professional Graphic Designer and Web Developer. I am
                a member of Evolving team [login to view URL] and I have
                experience of 5+ years even before joining this.
              </Box>
              <Wrap
                shouldWrapChildren
                mt="5"
                color={useColorModeValue("gray.600", "gray.300")}
              >
                {["Symphony", "React.js", "PHP", "Amazon"].map((tag) => (
                  <Tag key={tag} color="inherit" px="3">
                    {tag}
                  </Tag>
                ))}
              </Wrap>
            </Box>
          </Stack>
          <Button
            variant="outline"
            display={{
              md: "none",
            }}
          >
            Contact me
          </Button>
        </Card>
      </Box>
    </>
  );
}
