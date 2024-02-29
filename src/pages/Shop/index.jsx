import React from "react";
import { Helmet } from "react-helmet";
import { Text, Button, Heading, Img, SelectBox, Input, Radio } from "../../components";
import Footer1 from "../../components/Footer1";
import Header from "../../components/Header";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function ShopPage() {
  return (
    <>
      <Helmet>
        <title>Orebi Ecommerce </title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-[131px] bg-white-A700">
        <Header className="flex flex-col items-center justify-center w-full" />
        <div className="flex flex-col items-center justify-start w-full max-w-[1604px]">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-row justify-start items-start w-full gap-[39px]">
              <div className="flex flex-col items-start justify-start w-[24%]">
                <div className="flex flex-row justify-center">
                  <Heading size="3xl" as="h1">
                    Products
                  </Heading>
                </div>
                <div className="flex flex-row justify-start mt-[11px]">
                  <Text size="s" as="p">
                    {`Home  >  Products`}
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-center w-full mt-[130px] gap-8">
                  <Heading size="md" as="h2" className="mt-px">
                    Shop by Category
                  </Heading>
                  <div className="flex flex-col items-center justify-start w-full gap-5">
                    <div className="flex flex-row justify-center w-full pt-[5px]">
                      <div className="flex flex-col items-center justify-start w-full gap-[22px]">
                        <div className="flex flex-row justify-between items-start w-full">
                          <Text as="p">Category 1</Text>
                          <Img src="images/img_path_gray_600_02.svg" alt="path_three" className="h-2.5 w-2.5 mt-1" />
                        </div>
                        <div className="h-0.5 w-full bg-gray-200" />
                      </div>
                    </div>
                    <Input name="categoryCounter" placeholder="Category 2" className="w-full" />
                    <Input
                      name="categoryCounter"
                      placeholder="Category 3"
                      suffix={
                        <div className="flex justify-center items-center w-2.5 h-2.5">
                          <Img src="images/img_path_gray_600_02.svg" alt="Path" />
                        </div>
                      }
                      className="w-full gap-[35px]"
                    />
                    <Input name="categoryCounter" placeholder="Category 4" className="w-full" />
                    <Input name="categoryCounter" placeholder="Category 5" className="w-full" />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center w-full mt-[53px] gap-8">
                  <div className="flex flex-row justify-between items-start w-full">
                    <Heading size="md" as="h3">
                      Shop by Color
                    </Heading>
                    <Img src="images/img_icon_gray_900.svg" alt="icon_three" className="h-1.5 mt-[9px]" />
                  </div>
                  <div className="flex flex-col items-center justify-start w-full gap-5">
                    <div className="flex flex-col items-start justify-start w-full pt-[3px] gap-6">
                      <Radio
                        color="black_900"
                        value="color1"
                        name="colorone"
                        label="Color 1"
                        className="w-[11px] pl-2.5 gap-2.5 text-gray-600_02 text-base"
                      />
                      <div className="h-0.5 w-full bg-gray-200" />
                    </div>
                    <div className="flex flex-col items-start justify-start w-full pt-[3px] gap-6">
                      <Radio
                        color="red_A100"
                        value="color2"
                        name="colortwo"
                        label="Color 2"
                        className="w-[11px] pl-2.5 gap-2.5 text-gray-600_02 text-base"
                      />
                      <div className="h-0.5 w-full bg-gray-200" />
                    </div>
                    <div className="flex flex-col items-start justify-start w-full pt-[3px] gap-6">
                      <Radio
                        color="light_green_A700"
                        value="color3"
                        name="colorthree"
                        label="Color 3"
                        className="w-[11px] pl-2.5 gap-2.5 text-gray-600_02 text-base"
                      />
                      <div className="h-0.5 w-full bg-gray-200" />
                    </div>
                    <div className="flex flex-col items-start justify-start w-full pt-[3px] gap-6">
                      <Radio
                        color="gray_400_01"
                        value="color4"
                        name="colorfour"
                        label="Color 4"
                        className="w-[11px] pl-2.5 gap-2.5 text-gray-600_02 text-base"
                      />
                      <div className="h-0.5 w-full bg-gray-200" />
                    </div>
                    <div className="flex flex-col items-start justify-start w-full pt-[3px] gap-6">
                      <Radio
                        color="teal_A700"
                        value="color5"
                        name="colorfive"
                        label="Color 5"
                        className="w-[11px] pl-2.5 gap-2.5 text-gray-600_02 text-base"
                      />
                      <div className="h-0.5 w-full bg-gray-200" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full mt-[53px] gap-8">
                  <div className="flex flex-row justify-between items-start w-full">
                    <Heading size="md" as="h4">
                      Shop by Brand
                    </Heading>
                    <Img src="images/img_icon_gray_900.svg" alt="icon_five" className="h-1.5 mt-[9px]" />
                  </div>
                  <div className="flex flex-col items-center justify-start w-full gap-5">
                    <div className="flex flex-col items-start justify-start w-full pt-[3px] gap-6">
                      <Text as="p">Brand 1</Text>
                      <div className="h-0.5 w-full bg-gray-200" />
                    </div>
                    <Input name="brandCounter" placeholder="Brand 2" className="w-full" />
                    <Input name="brandCounter" placeholder="Brand 3" className="w-full" />
                    <Input name="brandCounter" placeholder="Brand 4" className="w-full" />
                    <Input name="brandCounter" placeholder="Brand 5" className="w-full" />
                  </div>
                </div>
                <div className="flex flex-col items-start justify-center w-full mt-[53px]">
                  <Heading size="md" as="h5" className="mt-px">
                    Shop by Price
                  </Heading>
                  <div className="flex flex-col items-start justify-start mt-8 pt-[3px] gap-6">
                    <Text as="p">$0.00 - $9.99</Text>
                    <div className="h-0.5 w-full bg-gray-200" />
                  </div>
                  <Input name="price" placeholder="$10.00 - $19.99" className="w-full mt-5 ml-px" />
                  <Input name="price" placeholder="$20.00 - $29.99" className="w-full mt-5 ml-px" />
                  <Input name="price" placeholder="$30.00 - $39.99" className="w-full mt-5 ml-px" />
                  <Input name="price" placeholder="$40.00 - $69.99" className="w-full mt-5 ml-px" />
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-3/4 mt-[227px] gap-[60px]">
                <div className="flex flex-row justify-between items-center w-[99%]">
                  <Img src="images/img_icon_white_a700.svg" alt="icon_seven" className="h-[13px]" />
                  <div className="flex flex-row justify-between w-[47%]">
                    <div className="flex flex-row justify-start items-center w-[57%] gap-3.5">
                      <Text as="p">Sort by:</Text>
                      <SelectBox
                        indicator={<Img src="images/img_icon_gray_600.svg" alt="Icon" />}
                        name="featured"
                        placeholder="Featured"
                        options={dropDownOptions}
                        className="w-[78%] gap-px"
                      />
                    </div>
                    <div className="flex flex-row justify-start items-start w-[37%] gap-[17px]">
                      <Text as="p" className="mt-1.5">
                        Show:
                      </Text>
                      <SelectBox
                        indicator={<Img src="images/img_icon_gray_600.svg" alt="Icon" />}
                        name="thirtysix"
                        placeholder="36"
                        options={dropDownOptions}
                        className="w-[70%] gap-px"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full gap-[50px]">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="justify-center w-full gap-10 grid-cols-3 grid min-h-[auto]">
                        <div className="flex flex-col items-center justify-start w-full pb-[5px]">
                          <div className="flex flex-col items-start justify-start w-full gap-5">
                            <div className="flex flex-col items-center justify-start h-[370px] w-[370px] bg-blue_gray-100">
                              <div className="h-[370px] w-[370px] relative">
                                <Img
                                  src="images/img_24_4b5d28d5_aac_370x370.png"
                                  alt="basic_crew_neck"
                                  className="justify-center h-[370px] w-[370px] left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                                />
                                <div className="flex flex-col items-start justify-start w-full gap-[159px] bottom-0 right-0 left-0 m-auto absolute">
                                  <div className="flex flex-row justify-start ml-5">
                                    <Button className="w-full font-bold">New</Button>
                                  </div>
                                  <div className="flex flex-row justify-start w-full">
                                    <div className="flex flex-col items-end justify-center w-full gap-[21px] p-6 bg-white-A700">
                                      <div className="flex flex-row justify-start items-center w-[47%] mr-[5px] gap-[15px]">
                                        <Text as="p" className="text-right">
                                          Add to Wish List
                                        </Text>
                                        <Img src="images/img_icon_heart.svg" alt="add_to_wish" className="h-3" />
                                      </div>
                                      <div className="flex flex-row justify-start items-center w-[31%] mr-[5px] gap-4">
                                        <Text as="p" className="text-right">
                                          Compare
                                        </Text>
                                        <Img
                                          src="images/img_shape_gray_900_12x12.svg"
                                          alt="compare_two"
                                          className="h-3 w-3"
                                        />
                                      </div>
                                      <div className="flex flex-row justify-start items-center w-[38%] mr-[5px] gap-[15px]">
                                        <Heading as="h6" className="text-right">
                                          Add to Cart
                                        </Heading>
                                        <Img src="images/img_path.svg" alt="add_to_cart_one" className="h-3 w-[13px]" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-row justify-between items-center w-full">
                              <Heading size="md" as="h5">
                                Basic Crew Neck Tee
                              </Heading>
                              <Text as="p">$44.00</Text>
                            </div>
                            <Text as="p">Black</Text>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start w-full pb-[5px]">
                          <div className="flex flex-col items-start justify-start w-full gap-5">
                            <div className="h-[370px] w-[370px] bg-blue_gray-100 relative">
                              <Img
                                src="images/img_25_d6b69c8c_3c6.png"
                                alt="25d6b69c8c3csix"
                                className="justify-center h-[370px] w-[370px] left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                              />
                              <div className="flex flex-row justify-start w-1/4 left-[5%] top-[5%] m-auto absolute">
                                <Button className="w-full font-bold">-10%</Button>
                              </div>
                            </div>
                            <div className="flex flex-row justify-between items-center w-full">
                              <Heading size="md" as="h5">
                                Basic Crew Neck Tee
                              </Heading>
                              <Text as="p">$44.00</Text>
                            </div>
                            <Text as="p">Black</Text>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start w-full pb-[5px] gap-5">
                          <div className="flex flex-col items-center justify-start h-[370px] w-[370px] bg-blue_gray-100">
                            <Img
                              src="images/img_18_df650a81_a68.png"
                              alt="18df650a81asixt"
                              className="w-[370px] object-cover"
                            />
                          </div>
                          <div className="flex flex-row justify-between items-center w-full">
                            <div className="flex flex-row justify-center">
                              <Heading size="md" as="h5">
                                Basic Crew Neck Tee
                              </Heading>
                            </div>
                            <Text as="p">$44.00</Text>
                          </div>
                          <Text as="p">Black</Text>
                        </div>
                        <div className="flex flex-col items-center justify-start w-full pb-[5px]">
                          <div className="flex flex-col items-start justify-start w-full gap-5">
                            <div className="flex flex-col items-center justify-start h-[370px] w-[370px] bg-blue_gray-100">
                              <Img
                                src="images/img_1_642ce5cc_e1af.png"
                                alt="1642ce5cce1af"
                                className="w-[370px] object-cover"
                              />
                            </div>
                            <div className="flex flex-row justify-between items-center w-full">
                              <Heading size="md" as="h5">
                                Basic Crew Neck Tee
                              </Heading>
                              <Text as="p">$44.00</Text>
                            </div>
                            <Text as="p">Black</Text>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start w-full pb-[5px]">
                          <div className="flex flex-col items-start justify-start w-full gap-5">
                            <div className="h-[370px] w-[370px] bg-blue_gray-100 relative">
                              <Img
                                src="images/img_26_e5283375_8a7_370x370.png"
                                alt="26e52833758asev"
                                className="justify-center h-[370px] w-[370px] left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                              />
                              <div className="flex flex-row justify-start w-1/4 left-[5%] top-[5%] m-auto absolute">
                                <Button className="w-full font-bold">New</Button>
                              </div>
                            </div>
                            <div className="flex flex-row justify-between items-center w-full">
                              <Heading size="md" as="h5">
                                Basic Crew Neck Tee
                              </Heading>
                              <Text as="p">$44.00</Text>
                            </div>
                            <Text as="p">Black</Text>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start w-full pb-[5px]">
                          <div className="flex flex-col items-start justify-start w-full gap-5">
                            <div className="flex flex-col items-center justify-start h-[370px] w-[370px] bg-blue_gray-100">
                              <Img
                                src="images/img_14_e1172fce_ea0.png"
                                alt="14e1172fceeazer"
                                className="w-[370px] object-cover"
                              />
                            </div>
                            <div className="flex flex-row justify-between items-center w-full">
                              <Heading size="md" as="h5">
                                Basic Crew Neck Tee
                              </Heading>
                              <Text as="p">$44.00</Text>
                            </div>
                            <Text as="p">Black</Text>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start w-full pb-[3px]">
                          <div className="flex flex-col items-start justify-start w-full gap-[21px]">
                            <div className="h-[370px] w-[370px] bg-blue_gray-100 relative">
                              <Img
                                src="images/img_2_grande_2.png"
                                alt="2grandetwo_one"
                                className="justify-center h-[370px] w-[370px] left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                              />
                              <div className="flex flex-row justify-start w-1/4 left-[5%] top-[5%] m-auto absolute">
                                <Button className="w-full font-bold">-10%</Button>
                              </div>
                            </div>
                            <div className="flex flex-row justify-between items-center w-full">
                              <Heading size="md" as="h5">
                                Basic Crew Neck Tee
                              </Heading>
                              <Text as="p">$44.00</Text>
                            </div>
                            <Text as="p">Phone/Iphone</Text>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start w-full pb-[5px] gap-5">
                          <div className="h-[370px] w-[370px] bg-blue_gray-100 relative">
                            <Img
                              src="images/img_18_df650a81_a68.png"
                              alt="18df650a81asixt"
                              className="justify-center h-[370px] w-[370px] left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                            />
                            <div className="flex flex-row justify-start w-1/4 left-[5%] top-[5%] m-auto absolute">
                              <Button className="w-full font-bold">-15%</Button>
                            </div>
                          </div>
                          <div className="flex flex-row justify-between items-center w-full">
                            <div className="flex flex-row justify-center">
                              <Heading size="md" as="h5">
                                Basic Crew Neck Tee
                              </Heading>
                            </div>
                            <Text as="p">$44.00</Text>
                          </div>
                          <Text as="p">Black</Text>
                        </div>
                        <div className="flex flex-col items-start justify-start w-full pb-[5px] gap-5">
                          <div className="h-[370px] w-[370px] bg-blue_gray-100 relative">
                            <Img
                              src="images/img_1_642ce5cc_e1af.png"
                              alt="1642ce5cce1af"
                              className="justify-center h-[370px] w-[370px] left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                            />
                            <div className="flex flex-row justify-start w-1/4 left-[5%] top-[5%] m-auto absolute">
                              <Button className="w-full font-bold">-10%</Button>
                            </div>
                          </div>
                          <div className="flex flex-row justify-between items-center w-full">
                            <div className="flex flex-row justify-center">
                              <Heading size="md" as="h5">
                                Basic Crew Neck Tee
                              </Heading>
                            </div>
                            <Text as="p">$44.00</Text>
                          </div>
                          <Text as="p">Black</Text>
                        </div>
                        <div className="flex flex-col items-center justify-start w-full pb-[5px]">
                          <div className="flex flex-col items-start justify-start w-full gap-5">
                            <div className="flex flex-col items-center justify-start h-[370px] w-[370px] bg-blue_gray-100">
                              <Img
                                src="images/img_22_9ad7cedf_f38.png"
                                alt="229ad7cedffthir"
                                className="w-[370px] object-cover"
                              />
                            </div>
                            <div className="flex flex-row justify-between items-center w-full">
                              <Heading size="md" as="h5">
                                Basic Crew Neck Tee
                              </Heading>
                              <Text as="p">$44.00</Text>
                            </div>
                            <Text as="p">Black</Text>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start w-full pb-[5px] gap-5">
                          <div className="flex flex-col items-center justify-start h-[370px] w-[370px] bg-blue_gray-100">
                            <Img
                              src="images/img_23_8e8d59a6_ada_370x370.png"
                              alt="238e8d59a6ada"
                              className="w-[370px] object-cover"
                            />
                          </div>
                          <div className="flex flex-row justify-between items-center w-full">
                            <div className="flex flex-row justify-center">
                              <Heading size="md" as="h5">
                                Basic Crew Neck Tee
                              </Heading>
                            </div>
                            <Text as="p">$44.00</Text>
                          </div>
                          <Text as="p">Black</Text>
                        </div>
                        <div className="flex flex-col items-start justify-start w-full pb-[5px] gap-5">
                          <div className="flex flex-col items-center justify-start h-[370px] w-[370px] bg-blue_gray-100">
                            <Img
                              src="images/img_2_grande_2.png"
                              alt="2grandethree"
                              className="w-[370px] object-cover"
                            />
                          </div>
                          <div className="flex flex-row justify-between items-center w-full">
                            <div className="flex flex-row justify-center">
                              <Heading size="md" as="h5">
                                Basic Crew Neck Tee
                              </Heading>
                            </div>
                            <Text as="p">$44.00</Text>
                          </div>
                          <Text as="p">Black</Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between items-center w-full">
                    <div className="flex flex-row justify-center items-center">
                      <Button className="min-w-[36px]">1</Button>
                      <Button color="gray_200" variant="outline" className="ml-[15px] min-w-[36px]">
                        2
                      </Button>
                      <Button color="gray_200" variant="outline" className="ml-[15px] min-w-[36px]">
                        3
                      </Button>
                      <Button color="gray_200" variant="outline" className="ml-[15px] min-w-[36px]">
                        4
                      </Button>
                      <Text size="md" as="p" className="ml-[25px]">
                        …
                      </Text>
                      <Button color="gray_200" variant="outline" className="ml-[27px] min-w-[36px]">
                        10
                      </Button>
                    </div>
                    <Text size="md" as="p" className="text-right">
                      Products from 1 to 12 of 80
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
