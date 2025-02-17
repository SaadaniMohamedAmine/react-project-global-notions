import { useEffect, useState } from "react";
import {Helmet} from "react-helmet"
import { useSearchParams } from "react-router";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";

const ModalContainer = () => {
  // eslint-disable-next-line no-unused-vars
  const [activeTab, setActiveTab] = useState("");
  const [service, setService] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  //close the modal
  const handleOpen = () => {
    searchParams.delete("service");
    searchParams.delete("tab");
    setSearchParams(searchParams);
  };
  
  //set the activeService and activeTab based on search params
  useEffect(() => {
    setService(searchParams.get("service"));
    setActiveTab(searchParams.get("tab"));
    
  }, [searchParams]);

  return (
    <>
     <Helmet>
        <meta charSet="utf-8" />
        <title>StreamAIServ</title>
        <link rel="icon" type="image/svg+xml" href="/icon-removebg-preview.png" />
      </Helmet>
      <LoginModal service={service} handleOpen={handleOpen} />
      <RegisterModal service={service} handleOpen={handleOpen} />

    </>
  );
};

export default ModalContainer;
