import React from "react";
import { Helmet } from "react-helmet";
import { Button, Text, Heading, SelectBox, Img } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function CartPage() {
  return (
    <>
      <Helmet>
        <title>Orebi Ecommerce </title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-[132px] bg-white-A700">
        <Header className="flex flex-col items-center justify-center w-full" />
        <div className="flex flex-row justify-center w-full max-w-[1605px]">
          <div className="flex flex-col items-end justify-start w-full">
            <div className="flex flex-col items-start justify-start w-[7%] mr-[1500px] gap-[11px]">
              <div className="flex flex-row justify-start">
                <Heading size="3xl" as="h1">
                  Cart
                </Heading>
              </div>
              <div className="flex flex-row justify-start">
                <Text size="s" as="p" className="!text-gray-700">
                  {`Home  >  Cart`}
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-full mt-[136px]">
              <div className="flex flex-row justify-center w-full">
                <div className="flex flex-row justify-between w-full p-5 bg-gray-100_01">
                  <div className="flex flex-row justify-center my-[13px]">
                    <Heading as="h2">Product</Heading>
                  </div>
                  <div className="flex flex-row justify-center">
                    <Heading as="h3">Price</Heading>
                  </div>
                  <div className="flex flex-row justify-center pt-0.5">
                    <Heading as="h4">Quantity</Heading>
                  </div>
                  <div className="flex flex-row justify-center mr-[324px]">
                    <Heading as="h5" className="mr-px">
                      Total
                    </Heading>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-center w-full z-[1]">
                <div className="flex flex-row justify-between items-center w-full p-[19px] border-gray-200 border border-solid bg-white-A700">
                  <div className="flex flex-row justify-between items-center w-[31%] my-2.5">
                    <div className="flex flex-row justify-between items-center w-3/5">
                      <Img src="images/img_path_gray_900_10x10.svg" alt="path_three" className="h-2.5 w-2.5" />
                      <div className="flex flex-row justify-start items-center w-[83%] gap-5">
                        <div className="flex flex-col items-center justify-start h-[100px] w-[100px]">
                          <div className="flex flex-col items-center justify-start h-[100px] w-[100px] bg-blue_gray-100">
                            <Img
                              src="images/img_2_grande_5.png"
                              alt="2grandefive_one"
                              className="w-[100px] object-cover"
                            />
                          </div>
                        </div>
                        <div className="flex flex-row justify-start w-[48%]">
                          <Heading as="h6">Product name</Heading>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row justify-center">
                      <Heading size="md" as="h5">
                        $44.00
                      </Heading>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between items-center w-[31%] mr-[293px]">
                    <div className="flex flex-row justify-between w-auto p-[5px] border-gray-200 border border-solid">
                      <Text as="p" className="ml-3.5">
                        -
                      </Text>
                      <Text as="p">1</Text>
                      <Text as="p" className="mr-3.5">
                        +
                      </Text>
                    </div>
                    <div className="flex flex-row justify-center">
                      <Heading size="md" as="h5">
                        $44.00
                      </Heading>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-center w-full mt-[-1px]">
                <div className="flex flex-row justify-between items-center w-full p-[18px] border-gray-200 border border-solid bg-white-A700">
                  <div className="flex flex-row justify-start items-center w-[24%] gap-[23px]">
                    <SelectBox
                      color="gray_200_01"
                      size="md"
                      indicator={<Img src="images/img_caretdownsolid_copy.svg" alt="caret-down-solid copy" />}
                      name="size"
                      placeholder="SIZE"
                      options={dropDownOptions}
                      className="w-[69%] gap-px"
                    />
                    <Heading size="xs" as="p">
                      Apply coupon
                    </Heading>
                  </div>
                  <div className="flex flex-row justify-center">
                    <Heading size="xs" as="p" className="text-right">
                      Update cart
                    </Heading>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end justify-start w-[41%] mt-[53px] gap-[23px]">
              <div className="flex flex-row justify-center w-[17%]">
                <Heading size="md" as="h5">
                  Cart totals
                </Heading>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-row justify-center w-full z-[1]">
                  <Heading as="h6" className="pl-5 pr-[35px] py-4 z-[1] border-gray-200 border border-solid">
                    Subtotal
                  </Heading>
                  <Text as="p" className="ml-[-1px] pl-[21px] pr-[35px] py-4 border-gray-200 border border-solid">
                    389.99 $
                  </Text>
                </div>
                <div className="flex flex-row justify-center w-full mt-[-1px]">
                  <Heading as="h6" className="pl-5 pr-[35px] py-4 z-[1] border-gray-200 border border-solid">
                    Total
                  </Heading>
                  <div className="flex flex-row justify-start w-[51%] ml-[-1px] p-[15px] border-gray-200 border border-solid">
                    <div className="flex flex-row justify-center w-[23%] ml-[5px]">
                      <Text as="p" className="mr-px !text-gray-900">
                        389.99 $
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Button size="sm" className="mt-[30px] mr-0.5 font-bold min-w-[200px]">
              Proceed to Checkout
            </Button>
          </div>
        </div>
        <Footer className="flex justify-center items-center w-full" />
      </div>
    </>
  );
}
