import React from "react";
import { Helmet } from "react-helmet";
import { Text, Input, Heading } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function MyaccoountPage() {
  return (
    <>
      <Helmet>
        <title>Orebi Ecommerce </title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-start justify-start w-full bg-white-A700">
        <div className="flex flex-col items-center justify-start w-full">
          <Header className="flex flex-col items-center justify-center w-full" />
        </div>
        <div className="flex flex-row justify-start w-full mt-[129px] mx-auto max-w-[1193px]">
          <div className="flex flex-row justify-start w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <Heading size="3xl" as="h1">
                My Account
              </Heading>
              <div className="flex flex-row justify-start mt-[5px]">
                <Text size="s" as="p" className="!text-gray-700">
                  {`Home  >  My account`}
                </Text>
              </div>
              <div className="flex flex-row justify-start items-start w-full mt-[127px] gap-[39px]">
                <div className="flex flex-col items-center justify-start w-1/5 gap-5">
                  <div className="flex flex-col items-start justify-start w-full pt-[3px] gap-6">
                    <Heading as="h2">Dashboard</Heading>
                    <div className="h-0.5 w-full bg-gray-200" />
                  </div>
                  <Input name="others_one" placeholder="Others" className="w-full" />
                  <Input name="downloads_one" placeholder="Donwloads" className="w-full" />
                  <Input name="address" placeholder="Addresses" className="w-full" />
                  <Input name="accountdetails" placeholder="Account details" className="w-full" />
                  <Input name="logout_one" placeholder="Logout" className="w-full" />
                </div>
                <Text as="p" className="w-[78%] !leading-[30px]">
                  <span className="text-gray-600_02">Hello </span>
                  <span className="text-gray-900">admin</span>
                  <span className="text-gray-600_02">(not </span>
                  <span className="text-gray-900">admin</span>
                  <span className="text-gray-600_02">? </span>
                  <span className="text-gray-900">Log out</span>
                  <span className="text-gray-600_02">
                    )<br />
                    From your account dashboard you can view your{" "}
                  </span>
                  <span className="text-gray-900">recent orders</span>
                  <span className="text-gray-600_02">, manage your </span>
                  <span className="text-gray-900">shipping and billing addresses</span>
                  <span className="text-gray-600_02">, and </span>
                  <span className="text-gray-900">edit your password and account details.</span>
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start w-full">
          <Footer className="flex justify-center items-center w-full mt-[140px]" />
        </div>
      </div>
    </>
  );
}
