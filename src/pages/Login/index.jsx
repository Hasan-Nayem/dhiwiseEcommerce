import React from "react";
import { Helmet } from "react-helmet";
import { Button, Text, Heading, Input } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function LoginPage() {
  return (
    <>
      <Helmet>
        <title>Orebi Ecommerce </title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-[134px] bg-white-A700">
        <Header className="flex flex-col items-center justify-center w-full" />
        <div className="flex flex-row justify-center w-full max-w-[1603px]">
          <div className="flex flex-col items-start justify-start w-full">
            <div className="flex flex-col items-start justify-start w-[8%] gap-[5px]">
              <a href="#">
                <Heading size="3xl" as="h1">
                  Login
                </Heading>
              </a>
              <div className="flex flex-row justify-center">
                <Text size="s" as="p" className="!text-gray-700">
                  {`Home  >  Login`}
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start mt-[127px] gap-[62px]">
              <Text as="p" className="w-[41%] !leading-[30px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry&#39;s standard dummy text ever since the.
              </Text>
              <div className="h-px w-full bg-gray-200" />
            </div>
            <div className="flex flex-col items-start justify-start w-full mt-[57px] gap-14">
              <div className="flex flex-row justify-center">
                <Heading size="xl" as="h2" className="mt-px">
                  Returning Customer
                </Heading>
              </div>
              <div className="flex flex-row justify-start w-[66%]">
                <div className="flex flex-col items-start justify-start w-full gap-[29px]">
                  <div className="flex flex-row justify-start w-full gap-[39px]">
                    <div className="flex flex-col items-start justify-start w-[49%] gap-3">
                      <Heading as="h3">Email address</Heading>
                      <div className="flex flex-col items-start justify-start gap-3.5">
                        <Text size="md" as="p">
                          company@domain.com
                        </Text>
                        <div className="h-px w-full bg-gray-200" />
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[49%] gap-[19px]">
                      <Heading as="h4">Password</Heading>
                      <Input size="xs" name="password" className="w-full" />
                    </div>
                  </div>
                  <Button
                    color="white_A700"
                    size="sm"
                    className="font-bold border-blue_gray-900 border border-solid min-w-[200px]"
                  >
                    Log in
                  </Button>
                </div>
              </div>
              <div className="h-px w-full bg-gray-200" />
            </div>
            <div className="flex flex-col items-start justify-start w-[41%] mt-[57px] gap-11">
              <div className="flex flex-row justify-center">
                <Heading size="xl" as="h5">
                  New Customer
                </Heading>
              </div>
              <Text as="p" className="!leading-[30px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry&#39;s standard dummy text ever since the.
              </Text>
              <Button size="sm" className="font-bold min-w-[200px]">
                Continue
              </Button>
            </div>
          </div>
        </div>
        <Footer className="flex justify-center items-center w-full" />
      </div>
    </>
  );
}
