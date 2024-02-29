import React from "react";
import { Helmet } from "react-helmet";
import { Text, Heading, Img, Button, TextArea, Input } from "../../components";
import Footer2 from "../../components/Footer2";
import Header from "../../components/Header";

export default function ContactsPage() {
  return (
    <>
      <Helmet>
        <title>Orebi Ecommerce </title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-[131px] bg-white-A700">
        <Header className="flex flex-col items-center justify-center w-full" />
        <div className="flex flex-row justify-center w-full max-w-[1603px]">
          <div className="flex flex-col items-start justify-start w-full gap-[132px]">
            <div className="flex flex-col items-start justify-start w-[14%] gap-2.5">
              <div className="flex flex-row justify-center">
                <Heading size="3xl" as="h1">
                  Contacts
                </Heading>
              </div>
              <div className="flex flex-row justify-start">
                <Text size="s" as="p">
                  {`Home  >  Contacts`}
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-[49%]">
              <div className="flex flex-row justify-center">
                <Heading size="xl" as="h2" className="mt-0.5">
                  Fill up a Form
                </Heading>
              </div>
              <div className="flex flex-col items-start justify-start w-full mt-[42px] gap-2.5">
                <Heading as="h3">Name</Heading>
                <div className="flex flex-col items-start justify-start gap-[15px]">
                  <Text size="md" as="p">
                    Your name here
                  </Text>
                  <div className="h-px w-full bg-gray-200" />
                </div>
              </div>
              <div className="flex flex-col items-start justify-start mt-[23px] gap-2.5">
                <Heading as="h4">Email</Heading>
                <Input size="sm" type="email" name="email" placeholder="Your email here" className="w-full" />
              </div>
              <div className="flex flex-col items-start justify-start w-full mt-[23px] pt-0.5 gap-2.5">
                <Heading as="h5">Message</Heading>
                <TextArea
                  name="your_message"
                  placeholder="Your message here"
                  className="w-full pr-[35px] text-gray-600_02"
                />
              </div>
              <Button size="sm" className="mt-[30px] ml-0.5 font-bold min-w-[200px]">
                Post
              </Button>
            </div>
            <div className="flex flex-row justify-start w-full ml-[3px]">
              <div className="flex flex-row justify-start w-full">
                <div className="flex flex-row justify-start w-full">
                  <div className="h-[572px] w-full bg-blue_gray-100 relative">
                    <Img
                      src="images/img_shape_gray_900_36x27.svg"
                      alt="shape_one"
                      className="h-9 bottom-[18%] right-[38%] m-auto absolute"
                    />
                    <div className="justify-center h-[572px] w-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                      <Img
                        src="images/img_image_1.png"
                        alt="imageone_one"
                        className="justify-center h-[572px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                      />
                      <div className="flex flex-col items-center justify-start w-[29%] h-max left-[5%] bottom-0 top-0 m-auto absolute">
                        <div className="flex flex-row justify-between w-full p-3.5 z-[2] border-gray-200 border border-solid bg-white-A700">
                          <Heading as="h6" className="ml-1">
                            Germany Office
                          </Heading>
                          <Img src="images/img_button.svg" alt="button_one" className="h-[21px] w-[21px] my-[15px]" />
                        </div>
                        <div className="flex flex-row justify-between w-full mt-[-1px] p-[13px] z-[1] border-gray-200 border border-solid bg-white-A700">
                          <Heading as="h6" className="ml-[5px]">
                            Slovakia Office
                          </Heading>
                          <Img
                            src="images/img_button.svg"
                            alt="buttoncopy_one"
                            className="h-[21px] w-[21px] mt-4 mb-[15px]"
                          />
                        </div>
                        <div className="flex flex-col items-start justify-center w-full mt-[-1px] gap-[21px] p-[19px] border-gray-200 border border-solid bg-white-A700">
                          <Heading as="h6" className="mt-[9px]">
                            Lithuania Office
                          </Heading>
                          <Text as="p">575 Crescent Ave. Quakertown, PA 18951</Text>
                          <Text as="p">+432 533 12 523</Text>
                          <Text as="p">info@domain.com</Text>
                          <Text as="p" className="mb-2">
                            Mon - Fri: 9am - 6pm
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer2 className="flex justify-center items-center w-full" />
      </div>
    </>
  );
}
