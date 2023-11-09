"use client";
import styles from "@/Styles/searchFilter.module.css";
import SearchManufacturer from "./SearchManufacturer";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SearchFilter = () => {
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");
  const router = useRouter();
  const handleSearch = (e) => {
    // e.preventDefault();
    if (manufacturer === "" && model === "") {
      return alert("Please fill the search bar");
    }
    updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());
  };

  const updateSearchParams = (model, manufacturer) => {
    const searchParams = new URLSearchParams(window.location.search);

    // if (model) {
    //   searchParams.set("model", model);
    // } else {
    //   searchParams.delete("model");
    // }

    if (manufacturer) {
      searchParams.set("manufacturer", manufacturer);
    } else {
      searchParams.delete("manufacturer");
    }

    if (true) {
      searchParams.set('helo', "hello")
    }

    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;
    console.log(newPathname);
    router.push(newPathname);
  };

  const SearchButton = () => (
    <button type="submit" className={styles.searchButton}>
      <Image src="/icons/search.svg" width={20} height={20} alt="searchIcon" />
    </button>
  );
  useEffect(() => {
    console.log(manufacturer);
  },[manufacturer]);
  return (
    <form className={styles.search_filter} onSubmit={handleSearch}>
      <div className={styles.searchbar_item}>
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
      </div>
      <div className={styles.searchByModel}>
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Tiguan"
        />
        <Image src="/model-icon.png" width={20} height={20} alt="modelIcon" />
      </div>
      <SearchButton />
    </form>
  );
};

export default SearchFilter;
