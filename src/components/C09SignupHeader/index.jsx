import React from "react";
import { CloseSVG } from "../../assets/images";
import { Img, Input, Text, Heading } from "./..";

export default function C09SignupHeader({
  home = "Home",
  shop = "Shop",
  about = "About",
  contacts = "Contacts",
  journal = "Journal",
  shopby = "Shop by Category",
  ...props
}) {
  const [searchBarValue, setSearchBarValue] = React.useState("");

  return (
    <div {...props}>
      <div className="flex flex-row justify-center w-full">
        <div className="flex flex-row justify-start items-start w-full gap-[544px] p-[29px] bg-white-A700">
          <Img src="images/img_orebi.svg" alt="orebi_one" className="h-[15px] mt-[3px] ml-[131px]" />
          <ul className="flex flex-row justify-between w-[21%]">
            <li>
              <a href="#">
                <Heading size="xs" as="h1">
                  {home}
                </Heading>
              </a>
            </li>
            <li>
              <a href="#">
                <Text size="md" as="p">
                  {shop}
                </Text>
              </a>
            </li>
            <li>
              <a href="#">
                <Text size="md" as="p">
                  {about}
                </Text>
              </a>
            </li>
            <li>
              <a href="#">
                <Text size="md" as="p">
                  {contacts}
                </Text>
              </a>
            </li>
            <li>
              <a href="#">
                <Text size="md" as="p">
                  {journal}
                </Text>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-row justify-center w-full">
        <div className="flex flex-row justify-center items-center w-full p-[25px] bg-gray-100_01">
          <div className="flex flex-row justify-start items-center w-[8%] ml-[135px] gap-2.5">
            <Img src="images/img_icon.svg" alt="icon_one" className="h-[9px]" />
            <Text size="md" as="p" className="!text-gray-900">
              {shopby}
            </Text>
          </div>
          <Input
            color="white_A700"
            variant="fill"
            name="search"
            placeholder="Search Products"
            value={searchBarValue}
            onChange={(e) => setSearchBarValue(e)}
            suffix={
              <div className="flex justify-center items-center w-[15px] h-[15px]">
                {searchBarValue?.length > 0 ? (
                  <CloseSVG onClick={() => setSearchBarValue("")} height={15} width={15} />
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
    </div>
  );
}
