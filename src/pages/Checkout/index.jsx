import React from "react";
import { Helmet } from "react-helmet";
import { Button, Text, Radio, Img, Heading, Input } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { ReactTable } from "../../components/ReactTable";
import { createColumnHelper } from "@tanstack/react-table";

const tableData = [
  { product: "Product name x 1", total: "389.99 $" },
  { product: "Subtotal", total: "389.99 $" },
  { product: "Total", total: "389.99 $" },
];

export default function CheckoutPage() {
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper();
    return [
      tableColumnHelper.accessor("product", {
        cell: (info) => (
          <Heading as="h6" className="z-[1] border-gray-200 border border-solid">
            {info?.getValue()}
          </Heading>
        ),
        header: (info) => (
          <Heading as="h6" className="pl-5 pr-[35px] py-4 z-[1] border-gray-200 border border-solid">
            Product
          </Heading>
        ),
        meta: { width: "320px" },
      }),
      tableColumnHelper.accessor("total", {
        cell: (info) => (
          <Text as="p" className="ml-[-1px] border-gray-200 border border-solid">
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text as="p" className="ml-[-1px] pl-[21px] pr-[35px] py-4 border-gray-200 border border-solid">
            Total
          </Text>
        ),
        meta: { width: "325px" },
      }),
    ];
  }, []);

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
        <div className="flex flex-col items-center justify-start w-[56%] mt-[123px] ml-[157px]">
          <div className="flex flex-col items-start justify-start w-full gap-[125px]">
            <div className="flex flex-col items-start justify-start w-[23%] gap-[11px]">
              <div className="flex flex-row justify-center">
                <Heading size="3xl" as="h1">
                  Checkout
                </Heading>
              </div>
              <div className="flex flex-row justify-center">
                <Text size="s" as="p" className="!text-gray-700">
                  {`Home  >  Checkout`}
                </Text>
              </div>
            </div>
            <div className="flex flex-row justify-center">
              <Text as="p" className="mt-[3px] mb-px">
                <span className="text-gray-600_02">Have a coupon? </span>
                <span className="text-gray-900">Click here to enter your code</span>
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start w-full gap-[42px]">
              <div className="flex flex-row justify-start pt-[3px]">
                <Heading size="xl" as="h2">
                  Billing Details
                </Heading>
              </div>
              <div className="flex flex-row justify-start w-full">
                <div className="flex flex-col items-center justify-start w-full gap-6">
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex flex-row justify-start w-full gap-[39px]">
                      <div className="flex flex-col items-start justify-start w-[49%] gap-[13px]">
                        <Heading as="h3">First Name *</Heading>
                        <Text size="md" as="p">
                          First Name
                        </Text>
                        <div className="h-px w-full bg-gray-200" />
                      </div>
                      <div className="flex flex-col items-start justify-start w-[49%] gap-[13px]">
                        <Heading as="h4">Last Name *</Heading>
                        <Text size="md" as="p">
                          Last Name
                        </Text>
                        <div className="h-px w-full bg-gray-200" />
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-full mt-6 gap-3">
                      <Heading as="h5">Companye Name (optional)</Heading>
                      <Text size="md" as="p">
                        Company Name
                      </Text>
                      <div className="h-px w-full bg-gray-200" />
                    </div>
                    <div className="flex flex-row justify-start w-full mt-6 pt-0.5">
                      <div className="flex flex-col items-start justify-start w-full gap-3">
                        <Heading as="h6">Country *</Heading>
                        <div className="flex flex-row justify-between items-center w-full">
                          <Text size="md" as="p">
                            Please select
                          </Text>
                          <Img src="images/img_caret_down_solid.svg" alt="caretdown_one" className="h-1.5" />
                        </div>
                        <div className="h-px w-full bg-gray-200" />
                      </div>
                    </div>
                    <Heading as="h6" className="mt-6">
                      Street Address *
                    </Heading>
                    <div className="flex flex-col items-start justify-start w-full mt-[11px] gap-[15px]">
                      <Text size="md" as="p">
                        House number and street name
                      </Text>
                      <div className="h-px w-full bg-gray-200" />
                    </div>
                    <Input
                      size="sm"
                      name="two_one"
                      placeholder="Apartment, suite, unit etc. (optional)"
                      className="w-full mt-4"
                    />
                    <div className="flex flex-col items-start justify-start w-full mt-6 pt-0.5 gap-3">
                      <Heading as="h6">Town/City *</Heading>
                      <Text size="md" as="p">
                        Town/City
                      </Text>
                      <div className="h-px w-full bg-gray-200" />
                    </div>
                    <div className="flex flex-col items-start justify-start w-full mt-6 gap-3">
                      <Heading as="h6">County (optional)</Heading>
                      <Text size="md" as="p">
                        County
                      </Text>
                      <div className="h-px w-full bg-gray-200" />
                    </div>
                    <div className="flex flex-col items-start justify-start w-full mt-6 gap-[13px]">
                      <Heading as="h6">Post Code *</Heading>
                      <Text size="md" as="p">
                        Post Code
                      </Text>
                      <div className="h-px w-full bg-gray-200" />
                    </div>
                    <div className="flex flex-col items-start justify-start w-full mt-6 gap-[13px]">
                      <Heading as="h6">Phone *</Heading>
                      <Text size="md" as="p">
                        Phone
                      </Text>
                      <div className="h-px w-full bg-gray-200" />
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-full gap-[13px]">
                    <Heading as="h6">Email Address *</Heading>
                    <Text size="md" as="p">
                      Email
                    </Text>
                    <div className="h-px w-full bg-gray-200" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-full gap-[42px]">
              <div className="flex flex-row justify-center">
                <Heading size="xl" as="h1">
                  Additional Information
                </Heading>
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <Heading as="h6">Other Notes (optional)</Heading>
                <Text size="md" as="p" className="mt-[11px]">
                  Notes about your order, e.g. special notes for delivery.
                </Text>
                <div className="h-px w-full mt-[83px] bg-gray-200" />
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-full ml-[3px] gap-[54px]">
              <div className="flex flex-row justify-center">
                <Heading size="xl" as="h1">
                  Your Order
                </Heading>
              </div>
              <ReactTable
                size="xs"
                bodyProps={{ className: "" }}
                headerProps={{ className: "" }}
                rowDataProps={{ className: "" }}
                className="w-[644px]"
                columns={tableColumns}
                data={tableData}
              />
              <div className="flex flex-row justify-center w-full p-[7px] border-gray-200 border border-solid bg-white-A700">
                <div className="flex flex-col items-start justify-start w-[95%] mb-[21px] gap-5 mx-[25px]">
                  <div className="h-[116px] w-full relative">
                    <div className="flex flex-col items-center justify-center w-full h-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                      <Text size="3xl" as="p" className="!text-black-900 z-[1]">
                        ata bad rakhben
                      </Text>
                      <div className="flex flex-row justify-center w-full mt-[-10px]">
                        <div className="h-16 w-full relative">
                          <Img
                            src="images/img_combined_shape.svg"
                            alt="combinedshape"
                            className="justify-center h-16 left-0 bottom-0 right-0 top-0 m-auto absolute"
                          />
                          <Text size="md" as="p" className="bottom-[23%] left-[3%] m-auto absolute">
                            Pay via Bank; you can pay with your credit card if you don’t have a Bank account.
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Radio
                      value="bank1"
                      name="bank"
                      label="Bank"
                      className="pl-[9px] left-0 top-[13%] py-px m-auto text-gray-900 font-bold border-gray-900 absolute"
                    />
                  </div>
                  <Radio
                    value="bank2"
                    name="banktwo"
                    label="Bank 2"
                    className="pl-[9px] gap-[9px] py-px text-gray-600_02 font-bold"
                  />
                  <Text as="p" className="!leading-[30px]">
                    <span className="text-gray-600_02">
                      Your personal data will be used to process your order, support your experience throughout this
                      website, and for other purposes described in our{" "}
                    </span>
                    <span className="text-gray-900">privacy policy.</span>
                  </Text>
                  <Button size="sm" className="font-bold min-w-[200px]">
                    Proceed to Bank
                  </Button>
                </div>
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
