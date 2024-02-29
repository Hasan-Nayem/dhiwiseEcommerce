import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Button, TextArea, Heading, Input, Text, RatingBar, Img, SelectBox, Radio, RadioGroup } from "../../components";
import Footer from "../../components/Footer";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function ProductinsidePage() {
  const [searchBarValue16, setSearchBarValue16] = React.useState("");

  return (
    <>
      <Helmet>
        <title>Orebi Ecommerce </title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full bg-white-A700">
        <header className="flex flex-col items-center justify-center w-full">
          <div className="flex flex-row justify-center w-full">
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
          </div>
          <div className="h-[100px] w-full relative">
            <a href="#" className="bottom-[11%] left-[8%] m-auto absolute">
              <Heading size="3xl" as="h1">
                Products
              </Heading>
            </a>
            <div className="flex flex-row justify-center items-center w-full h-full left-0 bottom-0 right-0 top-0 p-[25px] m-auto bg-gray-100_01 absolute">
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
                value={searchBarValue16}
                onChange={(e) => setSearchBarValue16(e)}
                suffix={
                  <div className="flex justify-center items-center w-[15px] h-[15px]">
                    {searchBarValue16?.length > 0 ? (
                      <CloseSVG onClick={() => setSearchBarValue16("")} height={15} width={15} />
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
        <div className="flex flex-col items-start justify-start w-full max-w-[1602px]">
          <div className="flex flex-row justify-start">
            <Text size="s" as="p" className="!text-gray-700">
              {`Home  >  Products`}
            </Text>
          </div>
          <div className="h-[1600px] w-[1600px] mt-[136px] gap-10 grid-cols-2 grid min-h-[auto]">
            <div className="flex flex-col items-center justify-start h-[780px] w-full bg-blue_gray-100">
              <Img
                src="images/img_22_9ad7cedf_f38_780x780.png"
                alt="229ad7cedffthir"
                className="w-[780px] object-cover"
              />
            </div>
            <div className="flex flex-col items-center justify-start h-[780px] w-full bg-blue_gray-100">
              <Img src="images/img_2_grande_4.png" alt="2grandefour_one" className="w-[780px] object-cover" />
            </div>
            <div className="flex flex-col items-center justify-start h-[780px] w-full bg-blue_gray-100">
              <Img
                src="images/img_25_d6b69c8c_3c6_780x780.png"
                alt="25d6b69c8c3csix"
                className="w-[780px] object-cover"
              />
            </div>
            <div className="flex flex-col items-center justify-start h-[780px] w-full bg-blue_gray-100">
              <Img
                src="images/img_18_df650a81_a68_780x779.png"
                alt="18df650a81asixt"
                className="w-[779px] object-cover"
              />
            </div>
          </div>
          <div className="flex flex-row justify-start items-center h-[781px] w-[782px] mt-12">
            <div className="flex flex-col items-start justify-start h-[781px] w-[782px]">
              <div className="flex flex-row justify-start">
                <Heading size="xl" as="h1">
                  Product
                </Heading>
              </div>
              <div className="flex flex-row justify-start items-center mt-3.5 gap-[25px]">
                <RatingBar
                  value={5}
                  isEditable={true}
                  color="#ffd881"
                  activeColor="#ffd881"
                  size={12}
                  className="flex justify-between w-[70px]"
                />
                <Text size="md" as="p">
                  1 Review
                </Text>
              </div>
              <div className="flex flex-row justify-start items-center w-[19%] mt-[19px] gap-[23px]">
                <div className="h-[21px] w-[37%] relative">
                  <Text as="p" className="justify-center w-max left-0 bottom-0 right-0 top-0 m-auto absolute">
                    $88.00
                  </Text>
                  <div className="justify-center h-px w-[97%] left-0 bottom-0 right-0 top-0 m-auto bg-gray-600_02 absolute" />
                </div>
                <Heading size="md" as="h2">
                  $44.00
                </Heading>
              </div>
              <div className="h-px w-full mt-[23px] ml-0.5 bg-gray-200" />
              <div className="h-7 w-[36%] mt-[29px] relative">
                <div className="flex flex-row justify-start items-start w-[63%] h-full gap-[15px] left-0 bottom-0 top-0 m-auto absolute">
                  <Radio color="black_900_6c" value="oval1" name="oval" label="Radio" className="mt-0.5 gap-[35px]" />
                  <div className="h-7 w-7 bg-red-A100 rounded-[50%]" />
                </div>
                <div className="flex flex-col items-start justify-start w-full top-[10%] right-0 left-0 m-auto absolute">
                  <Radio
                    color="teal_A700_6c"
                    value="color6"
                    name="color"
                    label="COLOR:"
                    className="pr-[35px] gap-[35px] py-px text-gray-900 text-base font-bold z-[1]"
                  />
                  <RadioGroup name="group1015" className="flex mt-[-21px]">
                    <Radio color="light_green_A700_6c" value="group10151" label="Radio" className="gap-[35px]" />
                    <Radio color="gray_400_6c" value="group10152" label="Radio" className="ml-[-210px] gap-[35px]" />
                  </RadioGroup>
                </div>
              </div>
              <div className="flex flex-row justify-between items-start w-[33%] mt-[30px]">
                <Heading as="h3" className="mt-1.5">
                  SIZE:
                </Heading>
                <SelectBox size="sm" name="dropdown" options={dropDownOptions} className="w-[56%]" />
              </div>
              <div className="flex flex-row justify-start items-center w-[33%] mt-[30px] gap-[29px]">
                <Heading as="h4">QUANTITY:</Heading>
                <div className="flex flex-row justify-between w-[56%] p-[5px] border-gray-200 border border-solid">
                  <Text as="p" className="ml-3.5">
                    -
                  </Text>
                  <Text as="p">1</Text>
                  <Text as="p" className="mr-3.5">
                    +
                  </Text>
                </div>
              </div>
              <div className="h-px w-full mt-[30px] ml-0.5 bg-gray-200" />
              <div className="flex flex-row justify-start mt-[21px] gap-[27px] py-[3px]">
                <Heading as="h5" className="mb-px">
                  STATUS:
                </Heading>
                <Text as="p">In stock</Text>
              </div>
              <div className="h-px w-full mt-5 ml-0.5 bg-gray-200" />
              <div className="flex flex-row justify-start mt-[29px] gap-5">
                <Button
                  color="white_A700"
                  size="sm"
                  className="font-bold border-gray-900 border border-solid min-w-[200px]"
                >
                  Add to Wish List
                </Button>
                <Button size="sm" className="font-bold min-w-[200px]">
                  Add to Cart
                </Button>
              </div>
              <div className="flex flex-col items-center justify-start w-full mt-[30px] gap-6">
                <div className="h-px w-full bg-gray-200" />
                <div className="flex flex-row justify-center w-full">
                  <div className="flex flex-col items-start justify-start w-full gap-6">
                    <div className="flex flex-row justify-between items-start w-[65%]">
                      <Heading as="h6">
                        <span className="text-gray-900">FEATURES </span>
                        <span className="text-gray-900"></span>
                        <span className="text-gray-900">& DETAILS</span>
                      </Heading>
                      <Img src="images/img_icon_gray_900_10x10.svg" alt="icon_three" className="h-2.5 w-2.5 mt-1" />
                    </div>
                    <div className="h-px w-full bg-gray-200" />
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-start w-full mt-6">
                <div className="flex flex-col items-start justify-start w-full gap-6">
                  <div className="flex flex-row justify-between items-start w-[65%]">
                    <Heading as="h6">SHIPPING & RETURNS</Heading>
                    <Img src="images/img_icon_gray_900_10x10.svg" alt="icon_five" className="h-2.5 w-2.5 mt-1" />
                  </div>
                  <div className="h-px w-full bg-gray-200" />
                </div>
              </div>
              <Text as="p" className="mt-[19px] ml-0.5 !leading-[30px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </Text>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start w-full mt-[123px]">
            <div className="flex flex-row justify-between items-center w-[18%]">
              <div className="flex flex-row justify-center">
                <Text size="xl" as="p" className="mt-px text-center">
                  Description
                </Text>
              </div>
              <div className="flex flex-row justify-center">
                <Heading size="md" as="h2">
                  Reviews (1)
                </Heading>
              </div>
            </div>
            <Text size="md" as="p" className="mt-[47px] ml-px">
              1 review for Product
            </Text>
            <div className="flex flex-row justify-start w-full mt-[21px]">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="h-0.5 w-full bg-gray-200" />
                <div className="flex flex-row justify-between w-full mt-[26px]">
                  <div className="flex flex-row justify-between items-center w-auto mb-1.5 gap-[37px]">
                    <Text as="p" className="!text-gray-900">
                      John Ford
                    </Text>
                    <RatingBar
                      value={5}
                      isEditable={true}
                      color="#ffd881"
                      activeColor="#ffd881"
                      size={12}
                      className="flex justify-between w-[70px]"
                    />
                  </div>
                  <Text as="p" className="mt-1.5">
                    6 months ago
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start w-full mt-3 gap-[15px]">
                  <div className="flex flex-row justify-center w-full">
                    <Text as="p" className="!leading-[30px]">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                      the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley
                      of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                      but also the leap into electronic typesetting, remaining essentially unchanged.
                    </Text>
                  </div>
                  <div className="h-0.5 w-full bg-gray-200" />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-[49%] mt-[52px] gap-[47px]">
              <div className="flex flex-row justify-center">
                <Heading size="md" as="h3" className="mr-px">
                  Add a Review
                </Heading>
              </div>
              <div className="flex flex-col items-start justify-start w-full gap-[25px]">
                <div className="flex flex-col items-start justify-start w-full gap-2.5">
                  <Heading as="h4">Name</Heading>
                  <div className="flex flex-col items-start justify-start gap-[15px]">
                    <Text size="md" as="p">
                      Your name here
                    </Text>
                    <div className="h-px w-full bg-gray-200" />
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-full gap-2.5">
                  <Heading as="h5">Email</Heading>
                  <Input size="sm" type="email" name="email" placeholder="Your email here" className="w-full" />
                </div>
                <div className="flex flex-col items-start justify-start w-full gap-2.5">
                  <Heading as="h6">Review</Heading>
                  <TextArea
                    name="your_review"
                    placeholder="Your review here"
                    className="w-full pr-[35px] text-gray-600_02"
                  />
                </div>
                <Button size="sm" className="font-bold min-w-[200px]">
                  Post
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Footer className="flex justify-center items-center w-full mt-[339px]" />
      </div>
    </>
  );
}
