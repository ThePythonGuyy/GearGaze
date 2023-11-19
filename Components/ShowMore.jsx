"use client";
import { useSearchParams } from "next/navigation";
import ButtonBlue from "./ButtonBlue";
import { useRouter } from "next/navigation";
import Loader from "./Loader";
import { useState } from "react";
export default function ShowMore() {
  const sParams = useSearchParams();
  const router = useRouter();
  const [loader, setLoader] = useState(false)
  const showMore = (e) => {
    setLoader(prev => !prev);
    setTimeout(() => {
      const searchParams = new URLSearchParams(window.location.search);
    let lm = sParams.get("limit");
    console.log(lm);
    let limit;
    if (lm) {
      limit = parseInt(lm) + 3;
    } else {
      limit = 12;
    }
    if (limit) {
      searchParams.set("limit", limit);
      const newPathname = `${
        window.location.pathname
      }?${searchParams.toString()}`;
      router.push(newPathname, { scroll: false });
    }
    setLoader(prev => !prev);

    },2000)

    
  };

  const stylesOverride = {
    borderRadius: "40px",
  };
  return (
    <div
      style={{
        width: "100%",
        marginTop: "5vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      { 
        loader ? (
          <Loader />
        ) : (
          <ButtonBlue
          title="Show More"
          handleClick={showMore}
          style_btn="button_blue"
          stylesOverride={stylesOverride}
        />
        )
      }
  
    </div>
  );
}
