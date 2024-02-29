import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Text, Heading, Button, Img, Slider, Input } from "../../components";
import Footer from "../../components/Footer";

export default function Home1Page() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);
  const [searchBarValue2, setSearchBarValue2] = React.useState("");

  return (
    <>
      <Helmet>
        <title>Orebi Ecommerce </title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-[106px] bg-white-A700">
        <div className="flex flex-col items-center justify-start w-full gap-[174px]">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="h-[777px] w-full relative">
              <Img
                src="images/img_image.png"
                alt="image_one"
                className="justify-center h-[777px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
              />
              <div className="flex flex-col items-center justify-center w-full h-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                <header className="flex flex-col items-center justify-center w-full">
                  <div className="flex flex-row justify-start items-start w-full gap-[544px] p-[29px] bg-white-A700">
                    <Img src="images/img_orebi.svg" alt="orebi_one" className="h-[15px] mt-[3px] ml-[131px]" />
                    <ul className="flex flex-row justify-between w-[21%]">
                      <li>
                        <a href="#">
                          <Heading size="xs" as="p">
                            Home
                          </Heading>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="cursor-pointer hover:text-gray-900 hover:font-bold">
                          <Text size="md" as="p">
                            Shop
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="cursor-pointer hover:text-gray-900 hover:font-bold">
                          <Text size="md" as="p">
                            About
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="cursor-pointer hover:text-gray-900 hover:font-bold">
                          <Text size="md" as="p">
                            Contacts
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="cursor-pointer hover:text-gray-900 hover:font-bold">
                          <Text size="md" as="p">
                            Journal
                          </Text>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-row justify-center w-full">
                    <div className="flex flex-row justify-center items-center w-full p-[25px] bg-gray-100_01">
                      <div className="flex flex-row justify-start items-center w-[8%] ml-[135px] gap-2.5">
                        <Img src="images/img_icon.svg" alt="icon_one" className="h-[9px]" />
                        <Text size="md" as="p" className="!text-gray-900">
                          Shop by Category
                        </Text>
                      </div>
                      <Input
                        color="white_A700"
                        variant="fill"
                        name="search"
                        placeholder="Search Products"
                        value={searchBarValue2}
                        onChange={(e) => setSearchBarValue2(e)}
                        suffix={
                          <div className="flex justify-center items-center w-[15px] h-[15px]">
                            {searchBarValue2?.length > 0 ? (
                              <CloseSVG onClick={() => setSearchBarValue2("")} height={15} width={15} />
                            ) : (
                              <Img src="images/img_shape.svg" alt="Shape" className="cursor-pointer" />
                            )}
                          </div>
                        }
                        className="w-[33%] ml-[353px] gap-[35px] text-gray-400"
                      />
                      <div className="flex flex-row justify-between w-[5%] ml-[407px] mr-[135px]">
                        <Img src="images/img_icon_user.svg" alt="iconuser_one" className="h-[15px]" />
                        <Img src="images/img_path.svg" alt="path_one" className="h-[15px]" />
                      </div>
                    </div>
                  </div>
                </header>
                <div className="flex flex-row justify-center w-full">
                  <div className="h-[597px] w-full relative">
                    <Img
                      src="images/img_slider_1_1.png"
                      alt="slider1one_one"
                      className="justify-center h-[597px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                    />
                    <div className="flex flex-row justify-between items-center w-1/4 bottom-1/4 left-[10%] m-auto absolute">
                      <div className="flex flex-row justify-start items-start w-[5%] gap-2.5">
                        <Text size="xs" as="p" className="mt-2 !text-gray-900 text-center">
                          01
                        </Text>
                        <div className="flex flex-row justify-start items-start w-[10%]">
                          <div className="h-[120px] w-0.5 bg-white-A700" />
                          <div className="h-[30px] w-0.5 ml-[-2px] bg-gray-900" />
                        </div>
                      </div>
                      <div className="flex flex-row justify-center w-[72%]">
                        <div className="flex flex-col items-start justify-start w-full">
                          <Heading size="3xl" as="h1" className="z-[1]">
                            Final Offer
                          </Heading>
                          <div className="flex flex-col items-start justify-start w-full mt-[-63px] gap-12 shadow-xs">
                            <div className="flex flex-row justify-start items-center mt-[94px] gap-2">
                              <Text as="p" className="!text-gray-600_01">
                                Up to
                              </Text>
                              <Heading size="2xl" as="h2">
                                50%
                              </Heading>
                              <Text as="p" className="!text-gray-600_01">
                                sale for all furniture items!
                              </Text>
                            </div>
                            <Button size="sm" className="font-bold min-w-[185px]">
                              Shop Now
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-center w-full">
              <div className="flex flex-row justify-end w-full p-5 border-gray-200 border border-solid bg-white-A700">
                <div className="flex flex-row justify-between items-center w-full mx-auto max-w-[1602px]">
                  <div className="flex flex-row justify-start items-center gap-[17px]">
                    <Img src="images/img_2.svg" alt="two_one" className="h-[19px]" />
                    <Text as="p" className="mt-2 mb-[5px] !text-gray-600_01 text-center">
                      Two years warranty
                    </Text>
                  </div>
                  <div className="flex flex-row justify-start items-center gap-[15px]">
                    <Img src="images/img_shape_gray_900.svg" alt="shape_one" className="h-5" />
                    <Text as="p" className="!text-gray-600_01">
                      Free shipping
                    </Text>
                  </div>
                  <div className="flex flex-row justify-start items-center gap-[15px]">
                    <Img src="images/img_path_gray_900.svg" alt="path_three" className="h-5 w-5" />
                    <Text as="p" className="!text-gray-600_01">
                      Return policy in 30 days
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full max-w-[1606px]">
            <div className="flex flex-row justify-center w-full">
              <div className="flex flex-row justify-start items-center w-full gap-10">
                <div className="h-[780px] w-[780px] relative">
                  <Img
                    src="images/img_1_1024x1024_e0b.png"
                    alt="11024x1024e0b"
                    className="justify-center h-[780px] w-[780px] left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                  />
                  <div className="flex flex-col items-start justify-start w-[37%] gap-[42px] bottom-[9%] left-[8%] m-auto absolute">
                    <Heading size="xl" as="h2">
                      Phones Sale
                    </Heading>
                    <div className="flex flex-row justify-start items-end gap-2">
                      <Text as="p" className="mb-[13px] !text-gray-900_b3">
                        Up to
                      </Text>
                      <Heading size="2xl" as="h3">
                        30%
                      </Heading>
                      <Text as="p" className="mb-[13px] !text-gray-900_b3">
                        sale for all phones!
                      </Text>
                    </div>
                    <Button size="sm" className="ml-[3px] font-bold min-w-[185px]">
                      Shop Now
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-[49%] gap-10">
                  <div className="h-[368px] w-full relative">
                    <Img
                      src="images/img_banner_slider_01.png"
                      alt="bannerslider"
                      className="justify-center h-[368px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                    />
                    <div className="justify-center h-[368px] w-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                      <Img
                        src="images/img_banner_watch_10.png"
                        alt="bannerwatchten"
                        className="justify-center h-[368px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                      />
                      <div className="flex flex-col items-start justify-start w-2/5 h-max gap-[42px] left-[6%] bottom-0 top-0 m-auto absolute">
                        <Heading size="xl" as="h4">
                          Electronics Sale
                        </Heading>
                        <div className="flex flex-row justify-start items-center">
                          <Text as="p" className="!text-gray-900_b3">
                            Up to
                          </Text>
                          <Heading size="2xl" as="h5" className="ml-2">
                            70%
                          </Heading>
                          <Text as="p" className="ml-3 !text-gray-900_b3">
                            sale for all electronics!
                          </Text>
                        </div>
                        <Button size="sm" className="ml-[3px] font-bold min-w-[185px]">
                          Shop Now
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="h-[370px] w-[99%] relative">
                    <Img
                      src="images/img_2_1024x1024_f9f.png"
                      alt="21024x1024f9f"
                      className="justify-center h-[370px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                    />
                    <div className="flex flex-col items-start justify-start w-[44%] h-max gap-[42px] left-[6%] bottom-0 top-0 m-auto absolute">
                      <Heading size="xl" as="h6">
                        Furniture Offer
                      </Heading>
                      <div className="flex flex-row justify-start items-center gap-2">
                        <Text as="p" className="!text-gray-900">
                          Up to
                        </Text>
                        <Heading size="2xl" as="h1">
                          50%
                        </Heading>
                        <Text as="p" className="!text-gray-900_b2">
                          sale for all furniture items!
                        </Text>
                      </div>
                      <Button
                        size="sm"
                        className="ml-[3px] font-bold border-gray-900 border-[0.5px] border-solid min-w-[185px]"
                      >
                        Shop Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-full mt-[127px] gap-12">
              <div className="flex flex-row justify-center">
                <Heading size="xl" as="h1">
                  New Arrivals
                </Heading>
              </div>
              <div className="flex flex-row w-full gap-10">
                <div className="flex flex-col items-center justify-start w-[24%] pb-11 gap-[23px]">
                  <div className="flex flex-col items-center justify-start h-[370px] w-[370px]">
                    <div className="flex flex-col items-center justify-start h-[370px] w-[370px] bg-blue_gray-100">
                      <div className="h-[370px] w-[370px] relative">
                        <Img
                          src="images/img_23_8e8d59a6_ada.png"
                          alt="basic_crew_neck"
                          className="justify-center h-[370px] w-[370px] left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                        />
                        <div className="flex flex-col items-start justify-start w-[31%] gap-[98px] left-0 top-[5%] m-auto absolute">
                          <div className="flex flex-row justify-end ml-5">
                            <Button className="w-full font-bold">10%</Button>
                          </div>
                          <Button color="black_900_33" size="md" shape="circle" className="w-16">
                            <Img src="images/img_group_71.svg" />
                          </Button>
                        </div>
                      </div>
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
                </div>
                <div className="flex flex-col items-center justify-start w-[24%] pb-[5px]">
                  <div className="flex flex-col items-start justify-start w-full gap-5">
                    <div className="flex flex-col items-center justify-start h-[370px] w-[370px] bg-blue_gray-100">
                      <div className="h-[370px] w-[370px] relative">
                        <Img
                          src="images/img_19_23fa6f2c_04d.png"
                          alt="1923fa6f2c04d"
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
                                <Img src="images/img_icon_heart.svg" alt="iconheart_one" className="h-3" />
                              </div>
                              <div className="flex flex-row justify-start items-center w-[31%] mr-[5px] gap-4">
                                <Text as="p" className="text-right">
                                  Compare
                                </Text>
                                <Img src="images/img_shape_gray_900_12x12.svg" alt="shape_one" className="h-3 w-3" />
                              </div>
                              <div className="flex flex-row justify-start items-center w-[38%] mr-[5px] gap-[15px]">
                                <Heading as="h6" className="text-right">
                                  Add to Cart
                                </Heading>
                                <Img src="images/img_path.svg" alt="iconcart_one" className="h-3 w-[13px]" />
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
                <div className="flex flex-col items-center justify-start w-[24%] pb-[5px]">
                  <div className="flex flex-col items-start justify-start w-full gap-5">
                    <div className="flex flex-col items-center justify-start h-[370px] w-[370px] bg-blue_gray-100">
                      <div className="h-[370px] w-[370px] relative">
                        <Img
                          src="images/img_16_af000deb_7f2.png"
                          alt="16af000deb7ftwo"
                          className="justify-center h-[370px] w-[370px] left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                        />
                        <div className="flex flex-row justify-start w-1/4 left-[5%] top-[5%] m-auto absolute">
                          <Button className="w-full font-bold">New</Button>
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
                <div className="flex flex-col items-center justify-start w-[24%] pb-[5px]">
                  <div className="flex flex-col items-start justify-start w-full gap-5">
                    <div className="flex flex-col items-center justify-start h-[370px] w-[370px] bg-blue_gray-100">
                      <div className="h-[370px] w-[370px] relative">
                        <Img
                          src="images/img_31_grande_1.png"
                          alt="31grandeone_one"
                          className="justify-center h-[370px] w-[370px] left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                        />
                        <div className="flex flex-row justify-start w-1/4 left-[5%] top-[5%] m-auto absolute">
                          <Button className="w-full font-bold">New</Button>
                        </div>
                        <Button
                          color="black_900_33"
                          size="md"
                          shape="circle"
                          className="w-16 right-0 bottom-0 top-0 m-auto absolute"
                        >
                          <Img src="images/img_group_71.svg" />
                        </Button>
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
              </div>
            </div>
            <div className="flex flex-row w-full mt-[217px] gap-10">
              <div className="flex flex-col items-center justify-start w-[24%] pb-[5px]">
                <div className="flex flex-col items-start justify-start w-full gap-5">
                  <div className="h-[370px] w-[370px] bg-blue_gray-100 relative">
                    <Img
                      src="images/img_27_ac347275_415.png"
                      alt="basic_crew_neck"
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
              <div className="flex flex-col items-start justify-start w-[24%] pb-[5px] gap-5">
                <div className="h-[370px] w-[370px] bg-blue_gray-100 relative">
                  <Img
                    src="images/img_12_33c6ffea_373.png"
                    alt="1233c6ffea373"
                    className="justify-center h-[370px] w-[370px] left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                  />
                  <div className="flex flex-row justify-start w-1/4 left-[5%] top-[5%] m-auto absolute">
                    <Button className="w-full font-bold">New</Button>
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
              <div className="flex flex-col items-center justify-start w-[24%] pb-[5px]">
                <div className="flex flex-col items-start justify-start w-full gap-5">
                  <div className="h-[370px] w-[370px] bg-blue_gray-100 relative">
                    <Img
                      src="images/img_24_4b5d28d5_aac.png"
                      alt="244b5d28d5aac"
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
              <div className="flex flex-col items-start justify-start w-[24%] pb-[5px] gap-5">
                <div className="flex flex-col items-center justify-start h-[370px] w-[370px]">
                  <div className="flex flex-col items-center justify-start h-[370px] w-[370px] bg-blue_gray-100">
                    <div className="h-[370px] w-[370px] relative">
                      <Img
                        src="images/img_14_e1172fce_ea0.png"
                        alt="14e1172fceeazer"
                        className="justify-center h-[370px] w-[370px] left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                      />
                      <div className="flex flex-row justify-start w-1/4 left-[5%] top-[5%] m-auto absolute">
                        <Button className="w-full font-bold">New</Button>
                      </div>
                    </div>
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
            </div>
            <div className="flex flex-row justify-start items-center w-full mt-[130px] gap-[49px] border-red-900 border-[0.5px] border-solid bg-gray-100">
              <Img src="images/img_26_e5283375_8a7.png" alt="26e52833758asev" className="w-2/5 object-cover" />
              <div className="flex flex-col items-start justify-start w-[33%] pt-[3px] gap-[42px]">
                <Heading size="xl" as="h1">
                  Phone of the year
                </Heading>
                <Text as="p" className="!text-gray-900 !leading-[30px]">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum..
                </Text>
                <Button size="sm" className="ml-[3px] font-bold min-w-[185px]">
                  Shop Now
                </Button>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-full mt-32 gap-12">
              <div className="flex flex-row justify-start pt-[3px]">
                <Heading size="xl" as="h1">
                  Special Offers
                </Heading>
              </div>
              <Slider
                autoPlay
                autoPlayInterval={2000}
                responsive={{ 0: { items: 1 }, 550: { items: 1 }, 1050: { items: 1 } }}
                disableDotsControls
                activeIndex={sliderState}
                onSlideChanged={(e) => {
                  setSliderState(e?.item);
                }}
                ref={sliderRef}
                className="w-full"
                items={[...Array(3)].map(() => (
                  <React.Fragment key={Math.random()}>
                    <div className="flex flex-row gap-10 mx-auto">
                      <div className="flex flex-col items-center justify-start w-[24%] pb-[5px]">
                        <div className="flex flex-col items-start justify-start w-full gap-5">
                          <div className="flex flex-col items-center justify-start h-[370px] w-[370px] bg-blue_gray-100">
                            <div className="h-[370px] w-[370px] relative">
                              <Img
                                src="images/img_1_642ce5cc_e1af.png"
                                alt="1642ce5cce1af"
                                className="justify-center h-[370px] w-[370px] left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                              />
                              <div className="flex flex-row justify-start w-1/4 left-[5%] top-[5%] m-auto absolute">
                                <Button className="w-full font-bold">New</Button>
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
                      <div className="flex flex-col items-start justify-start w-[24%] pb-[5px] gap-5">
                        <div className="h-[370px] w-[370px] bg-blue_gray-100 relative">
                          <Img
                            src="images/img_18_df650a81_a68.png"
                            alt="18df650a81asixt"
                            className="justify-center h-[370px] w-[370px] left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                          />
                          <div className="flex flex-row justify-start w-1/4 left-[5%] top-[5%] m-auto absolute">
                            <Button className="w-full font-bold">New</Button>
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
                      <div className="flex flex-col items-start justify-start w-[24%] pb-[5px] gap-5">
                        <div className="h-[370px] w-[370px] bg-blue_gray-100 relative">
                          <Img
                            src="images/img_25_d6b69c8c_3c6.png"
                            alt="25d6b69c8c3csix"
                            className="justify-center h-[370px] w-[370px] left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                          />
                          <div className="flex flex-row justify-start w-1/4 left-[5%] top-[5%] m-auto absolute">
                            <Button className="w-full font-bold">New</Button>
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
                      <div className="flex flex-col items-start justify-start w-[24%] pb-[5px] gap-5">
                        <div className="h-[370px] w-[370px] bg-blue_gray-100 relative">
                          <Img
                            src="images/img_2_grande_1.png"
                            alt="2grandeone_one"
                            className="justify-center h-[370px] w-[370px] left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                          />
                          <div className="flex flex-row justify-start w-1/4 left-[5%] top-[5%] m-auto absolute">
                            <Button className="w-full font-bold">New</Button>
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
                    </div>
                  </React.Fragment>
                ))}
              />
            </div>
          </div>
        </div>
        <Footer className="flex justify-center items-center w-full" />
      </div>
    </>
  );
}
