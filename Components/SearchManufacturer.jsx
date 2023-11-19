"use client";
import React, { Fragment, useEffect, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import Image from "next/image";
import { manufacturers } from "@/Constants/details";
import { Select } from "antd";
import styles from "@/Styles/manufacturer.module.css";
import "@/Styles/antOverrides.css";

const SearchManufacturer = ({ manufacturer, setManufacturer }) => {
  const [query, setQuery] = useState("");
  const filteredManufacturers =
    query === ""
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log("search:", value);
  };

  // Filter `option.label` match the user type `input`

  return (
    <div className={styles.manufacturer}>
      <Combobox value={manufacturer} onChange={setManufacturer}>
        <div className={styles.container}>
          <Combobox.Button className={styles.combo_btn}>
            <Image src="/car-logo.svg" width={20} height={20} alt="helo" />
          </Combobox.Button>

          <Combobox.Input
            className={styles.combobox_input}
            placeholder="Volkswagen"
            displayValue={(item) => item}
            onChange={(e) => setQuery(e.target.value)}
          />

          <Combobox.Options className={styles.combobox_options}>
            {filteredManufacturers.length === 0 && query != "" ? (
              <div>Nothing Found.</div>
            ) : (
              filteredManufacturers.map((item) => (
                <Combobox.Option
                  key={item}
                  className={({ active }) =>
                    `${styles.combobox_optionDefault} ${
                      active
                        ? styles.combobox_optionActive
                        : styles.combobox_optionInActive
                    }`
                  }
                  value={item}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={({ active }) =>
                          `${
                            active
                              ? styles.combobox_optionValueActive
                              : styles.combobox_optionInactive
                          }`
                        }
                      >
                        {item}
                      </span>
                      {selected && (
                        <span className={styles.optionTick}>
                          <Image
                            src="/icons/greenTick.svg"
                            width={25}
                            height={25}
                            alt="tick"
                          />
                        </span>
                      )}
                    </>
                  )}
                </Combobox.Option>
              ))
            )}
          </Combobox.Options>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
