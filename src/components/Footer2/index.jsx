import React from "react";
import { Text, Img, Heading } from "./..";

export default function Footer2({ ...props }) {
  return (
    <footer {...props}>
      <div className="flex flex-row justify-center w-full">
        <div className="flex flex-row justify-center w-full p-[52px] bg-gray-100_01">
          <div className="flex flex-col items-center justify-center w-full gap-[65px] mx-[106px] max-w-[1602px]">
            <div className="flex flex-row justify-between items-start w-[83%]">
              <div className="flex flex-row justify-between items-center w-[72%]">
                <div className="flex flex-col items-start justify-center gap-[19px]">
                  <Heading as="h6">MENU</Heading>
                  <ul className="flex flex-col items-start justify-start w-full gap-[9px]">
                    <li>
                      <a href="#">
                        <Text size="md" as="p" className="!text-gray-600_01">
                          Home
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text size="md" as="p" className="!text-gray-600_01">
                          Shop
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text size="md" as="p" className="!text-gray-600_01">
                          About
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text size="md" as="p" className="!text-gray-600_01">
                          Contact
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text size="md" as="p" className="!text-gray-600_01">
                          Journal
                        </Text>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col items-start justify-start gap-[21px]">
                  <Heading as="h6">SHOP</Heading>
                  <ul className="flex flex-col items-start justify-start gap-2.5">
                    <li>
                      <a href="#">
                        <Text size="md" as="p" className="!text-gray-600_01">
                          Category 1
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text size="md" as="p" className="!text-gray-600_01">
                          Category 2
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text size="md" as="p" className="!text-gray-600_01">
                          Category 3
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text size="md" as="p" className="!text-gray-600_01">
                          Category 4
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text size="md" as="p" className="!text-gray-600_01">
                          Category 5
                        </Text>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col items-start justify-start w-[14%] gap-[21px]">
                  <Heading as="h6">HELP</Heading>
                  <div className="flex flex-col items-center justify-start w-full">
                    <ul className="flex flex-col items-start justify-start w-full gap-2.5">
                      <li>
                        <a href="#">
                          <Text size="md" as="p" className="!text-gray-600_01">
                            Privacy Policy
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text size="md" as="p" className="!text-gray-600_01">
                            Terms & Conditions
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text size="md" as="p" className="!text-gray-600_01">
                            Special E-shop
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text size="md" as="p" className="!text-gray-600_01">
                            Shipping
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text size="md" as="p" className="!text-gray-600_01">
                            Secure Payments
                          </Text>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-[28%] gap-[17px]">
                  <Heading as="h6" className="w-[71%] !leading-[27px]">
                    (052) 611-5711
                    <br />
                    company@domain.com
                  </Heading>
                  <Text size="md" as="p" className="!text-gray-600_01">
                    575 Crescent Ave. Quakertown, PA 18951
                  </Text>
                </div>
              </div>
              <Img src="images/img_orebi_gray_900.svg" alt="orebi_three" className="h-7 mt-1.5" />
            </div>
            <div className="flex flex-row justify-between items-start w-full">
              <Img src="images/img_social_icons.svg" alt="socialicons_one" className="h-4" />
              <Text size="md" as="p" className="mt-[3px] !text-gray-600_01 text-right">
                2020 Orebi Minimal eCommerce Figma Template by Adveits
              </Text>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
