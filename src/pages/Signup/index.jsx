import React from "react";
import { Helmet } from "react-helmet";
import { Button, Text, CheckBox, Heading, Input, Img } from "../../components";
import C09SignupHeader from "../../components/C09SignupHeader";
import Footer2 from "../../components/Footer2";

export default function SignupPage() {
  return (
    <>
      <Helmet>
        <title>Orebi Ecommerce </title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-[134px] bg-white-A700">
        <header className="flex justify-center items-center w-full">
          <C09SignupHeader className="flex flex-col items-center justify-center w-full" />
        </header>
        <div className="flex flex-col items-center justify-start w-full max-w-[1603px]">
          <div className="flex flex-col items-start justify-start w-full">
            <div className="flex flex-col items-start justify-start w-[11%] gap-[5px]">
              <a href="#">
                <Heading size="3xl" as="h1">
                  Sign up
                </Heading>
              </a>
              <div className="flex flex-row justify-start">
                <Text size="s" as="p" className="!text-gray-700">
                  {`Home  >  Sign up`}
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
            <div className="flex flex-col items-start justify-start w-full mt-14 gap-[55px]">
              <div className="flex flex-row justify-center">
                <Heading size="xl" as="h2">
                  Your Personal Details
                </Heading>
              </div>
              <div className="flex flex-row justify-start w-[66%]">
                <div className="flex flex-col items-center justify-start w-full gap-6">
                  <div className="flex flex-row justify-start w-full gap-[39px]">
                    <div className="flex flex-col items-start justify-start w-[49%] gap-2.5">
                      <Heading as="h3">First Name</Heading>
                      <div className="flex flex-col items-start justify-start gap-[15px]">
                        <Text size="md" as="p">
                          First Name
                        </Text>
                        <div className="h-px w-full bg-gray-200" />
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[49%] gap-2.5">
                      <Heading as="h4">Last Name</Heading>
                      <Input size="sm" type="text" name="lastName" placeholder="Last Name" className="w-full" />
                    </div>
                  </div>
                  <div className="flex flex-row justify-start w-full gap-[39px]">
                    <div className="flex flex-col items-start justify-start w-[49%] gap-3">
                      <Heading as="h5">Email address</Heading>
                      <Input size="sm" type="email" name="email" placeholder="company@domain.com" className="w-full" />
                    </div>
                    <div className="flex flex-col items-start justify-start w-[49%] pt-0.5 gap-2.5">
                      <Heading as="h6">Telephone</Heading>
                      <Input size="sm" type="number" name="phone" placeholder="Your phone number" className="w-full" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-px w-full ml-px bg-gray-200" />
            </div>
            <div className="flex flex-col items-start justify-start w-full mt-[57px] gap-14">
              <div className="flex flex-row justify-center">
                <Heading size="xl" as="h1">
                  New Customer
                </Heading>
              </div>
              <div className="flex flex-row justify-start w-[66%]">
                <div className="flex flex-col items-center justify-start w-full gap-6">
                  <div className="flex flex-row justify-start w-full gap-[39px]">
                    <div className="flex flex-col items-start justify-start w-[49%] gap-2.5">
                      <Heading as="h6">Address 1</Heading>
                      <div className="flex flex-col items-start justify-start gap-[15px]">
                        <Text size="md" as="p">
                          4279 Zboncak Port Suite 6212
                        </Text>
                        <div className="h-px w-full bg-gray-200" />
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[49%] gap-[11px]">
                      <Heading as="h6">Address 2</Heading>
                      <Input size="sm" name="address" placeholder="—" className="w-full" />
                    </div>
                  </div>
                  <div className="flex flex-row justify-start w-full gap-[39px]">
                    <div className="flex flex-col items-start justify-start w-[49%] pt-0.5 gap-2.5">
                      <Heading as="h6">City</Heading>
                      <Input size="sm" name="city" placeholder="Your city" className="w-full" />
                    </div>
                    <div className="flex flex-col items-start justify-start w-[49%] gap-2.5">
                      <Heading as="h6">Post Code</Heading>
                      <Input size="sm" name="zipcode" placeholder="05228" className="w-full" />
                    </div>
                  </div>
                  <div className="flex flex-row w-full gap-[38px]">
                    <div className="flex flex-col items-start justify-start w-[49%] gap-2.5">
                      <Heading as="h6">Division</Heading>
                      <div className="flex flex-row justify-start w-full">
                        <div className="flex flex-col items-center justify-start w-full gap-[15px]">
                          <div className="flex flex-row justify-between items-center w-full">
                            <Text size="md" as="p">
                              Please select
                            </Text>
                            <Img src="images/img_caret_down_solid.svg" alt="please_select" className="h-1.5" />
                          </div>
                          <div className="h-px w-full bg-gray-200" />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[49%] gap-2.5">
                      <Heading as="h6">District</Heading>
                      <div className="flex flex-row justify-start w-full">
                        <div className="flex flex-col items-center justify-start w-full gap-[15px]">
                          <div className="flex flex-row justify-between items-center w-full">
                            <Text size="md" as="p">
                              Please select
                            </Text>
                            <Img src="images/img_caret_down_solid.svg" alt="caretdown_one" className="h-1.5" />
                          </div>
                          <div className="h-px w-full bg-gray-200" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-px w-full ml-[3px] bg-gray-200" />
            </div>
            <div className="flex flex-col items-start justify-start w-[66%] mt-14 gap-[42px]">
              <div className="flex flex-row justify-start">
                <Heading size="xl" as="h1">
                  Your Password
                </Heading>
              </div>
              <div className="flex flex-row justify-start w-full gap-[39px]">
                <div className="flex flex-col items-start justify-start w-[49%] gap-2.5">
                  <Heading as="h6">Password</Heading>
                  <Input size="sm" type="password" name="password" placeholder="Password" className="w-full" />
                </div>
                <div className="flex flex-col items-start justify-start w-[49%] pt-0.5 gap-3">
                  <Heading as="h6">Repeat Password</Heading>
                  <Text size="md" as="p">
                    Repeat password
                  </Text>
                  <div className="h-px w-full bg-gray-200" />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-full mt-[70px]">
              <div className="h-px w-full bg-gray-200" />
              <CheckBox
                name="ihavereadandagr"
                label="I have read and agree to the Privacy Policy"
                className="mt-[65px] gap-[15px] text-left"
              />
              <div className="flex flex-row justify-between w-1/5 mt-[21px]">
                <Text size="md" as="p">
                  Subscribe Newsletter
                </Text>
                <CheckBox name="yes" label="Yes" className="gap-[15px] text-left" />
                <div className="flex flex-row justify-start items-center w-[15%] gap-[15px]">
                  <div className="flex flex-col items-center justify-start h-[11px] w-[11px] border-gray-600_02 border border-solid">
                    <div className="h-[7px] w-[7px] bg-gray-600_02" />
                  </div>
                  <Text size="md" as="p" className="h-[19px]">
                    No
                  </Text>
                </div>
              </div>
              <Button size="sm" className="mt-[26px] font-bold min-w-[200px]">
                Log in
              </Button>
            </div>
          </div>
        </div>
        <Footer2 className="flex justify-center items-center w-full" />
      </div>
    </>
  );
}
