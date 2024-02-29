import React from "react";
import { Helmet } from "react-helmet";
import { Text, Heading, Button, Img } from "../../components";
import Footer1 from "../../components/Footer1";
import Header from "../../components/Header";

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>Orebi Ecommerce </title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-[127px] bg-white-A700">
        <Header className="flex flex-col items-center justify-center w-full" />
        <div className="flex flex-row justify-center w-full max-w-[1603px]">
          <div className="flex flex-col items-start justify-start w-full gap-[136px]">
            <div className="flex flex-col items-start justify-start w-[10%] gap-[11px]">
              <div className="flex flex-row justify-start">
                <Heading size="3xl" as="h1">
                  About
                </Heading>
              </div>
              <div className="flex flex-row justify-start">
                <Text size="s" as="p">
                  {`Home  >  About`}
                </Text>
              </div>
            </div>
            <div className="flex flex-row justify-start w-full">
              <div className="flex flex-col items-center justify-start w-full gap-[123px]">
                <div className="flex flex-row w-full gap-10">
                  <div className="flex flex-row justify-center w-[49%]">
                    <div className="flex flex-row justify-center w-full">
                      <div className="flex flex-row justify-center w-full bg-blue_gray-100">
                        <div className="h-[776px] w-full relative">
                          <Img
                            src="images/img_23_8e8d59a6_ada_776x780.png"
                            alt="238e8d59a6ada"
                            className="justify-center h-[776px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                          />
                          <div className="flex flex-row justify-center w-[37%] bottom-[8%] right-0 left-0 m-auto absolute">
                            <Button size="lg" className="w-full font-bold">
                              Our Brands
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-center w-[49%]">
                    <div className="flex flex-row justify-center w-full">
                      <div className="flex flex-row justify-center w-full">
                        <div className="flex flex-row justify-center w-full bg-blue_gray-100">
                          <div className="h-[776px] w-full relative">
                            <Img
                              src="images/img_22_9ad7cedf_f38_776x780.png"
                              alt="229ad7cedffthir"
                              className="justify-center h-[776px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                            />
                            <Button
                              size="lg"
                              className="bottom-[8%] right-0 left-0 m-auto font-bold min-w-[281px] absolute"
                            >
                              Our Stores
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-center w-full">
                  <Text size="2xl" as="p" className="!text-gray-900">
                    Orebi is one of the world’s leading ecommerce brands and is internationally recognized for
                    celebrating the essence of classic Worldwide cool looking style.
                  </Text>
                </div>
                <div className="flex flex-row w-full gap-10">
                  <div className="flex flex-col items-start justify-start w-[32%] gap-3">
                    <Heading size="lg" as="h2">
                      Our Vision
                    </Heading>
                    <Text as="p" className="!leading-[30px]">
                      <span className="text-gray-600_02">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry&#39;s standard dummy text ever since the 1500s, when an{" "}
                      </span>
                      <span className="text-gray-600_02"></span>
                      <span className="text-gray-600_02">
                        printer took a galley of type and scrambled it to make a type specimen book.
                      </span>
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start w-[32%] pt-1 gap-[9px]">
                    <Heading size="lg" as="h3">
                      Our Story
                    </Heading>
                    <Text as="p" className="!leading-[30px]">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                      the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley
                      of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                      but also the leap into electronic.
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start w-[32%] gap-3">
                    <Heading size="lg" as="h4">
                      Our Brands
                    </Heading>
                    <Text as="p" className="!leading-[30px]">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                      the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a
                      galley.
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer1 className="flex justify-center items-center w-full" />
      </div>
    </>
  );
}
