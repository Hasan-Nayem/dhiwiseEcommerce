import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Button, Input, Text, Heading } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function PagePage() {
  const [searchBarValue32, setSearchBarValue32] = React.useState("");

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
        <div className="flex flex-row justify-start w-[34%] mt-[78px] ml-[157px]">
          <div className="flex flex-col items-start justify-start w-full">
            <Heading size="4xl" as="h1">
              404
            </Heading>
            <div className="flex flex-col items-center justify-start w-full gap-[50px] mx-auto max-w-[644px]">
              <Text as="p" className="!leading-[30px]">
                The page you were looking for couldn&#39;t be found. The page could be removed or you misspelled the
                word while searching for it. Maybe try a search?
              </Text>
              <div className="flex flex-col items-start justify-start w-full gap-[60px]">
                <Input
                  color="white_A700"
                  size="lg"
                  variant="fill"
                  name="search"
                  placeholder="Type to search"
                  value={searchBarValue32}
                  onChange={(e) => setSearchBarValue32(e)}
                  suffix={
                    searchBarValue32?.length > 0 ? (
                      <CloseSVG onClick={() => setSearchBarValue32("")} height={16} width={16} fillColor="#262626ff" />
                    ) : (
                      <Img src="images/img_shape.svg" alt="Icon_search" className="cursor-pointer" />
                    )
                  }
                  className="w-full gap-[35px] text-gray-600_02 border-gray-200 border border-solid"
                />
                <Button size="sm" className="font-bold min-w-[200px]">
                  Back to Home
                </Button>
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
