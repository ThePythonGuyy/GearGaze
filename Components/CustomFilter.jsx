"use client";
import { Listbox, Transition } from "@headlessui/react";
import Image from "next/image";
import React, { Fragment, useEffect, useState } from "react";
import styles from "@/Styles/customFilter.module.css";
import { useRouter, useSearchParams } from "next/navigation";

const CustomFilter = ({ title, options }) => {
  const [selected, setSelected] = useState(options[0]);
  const router = useRouter();
  const sParams = useSearchParams();
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);

    if ((selected.title !== title) && selected ) {
      searchParams.set(`${title}`, selected.value);
    }

    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
    router.push(newPathname, {scroll: false});
  },[selected]);

  useEffect(() => {
    const value = sParams.get(`${title}`);
    if (value) {
      options.map((option) => {
        if(option.value === value) {
          setSelected(option);
        }
      })
    }
  },[]);

  return (
    <div className={styles.listbox_container}>
      <Listbox
        value={selected}
        onChange={(e) => setSelected(e)}
        className={styles.listbox}
      >
        <div className={styles.listboxWrap}>
          <Listbox.Button className={styles.listbox_button}>
            <span>{selected.title}</span>
            <Image
              src="chevron-up-down.svg"
              width={20}
              height={20}
              alt="up-down icon"
            />
          </Listbox.Button>
          <Transition
            as={Fragment}
            enter={styles.transEnter}
            enterFrom={styles.transEnterFrom}
            enterTo={styles.transEnterTo}
            leave={styles.transLeave}
            leaveFrom={styles.transLeaveFrom}
            leaveTo={styles.transLeaveTo}
          >
            <Listbox.Options className={styles.listboxOptions}>
              {options.map((option) => (
                <Listbox.Option
                  className={({ active }) =>
                    `${styles.listbox_optionDefault} ${
                      active
                        ? styles.listbox_optionActive
                        : styles.listbox_optionInactive
                    }`
                  }
                  key={option.title}
                  value={option}
                >
                  {({ selected, active }) => (
                    <>
                    <span
                      className= {({active}) =>  `${active ? styles.listbox_optionValueActive : styles.listbox_optionInactive}` }
                    >
                      {option.title}
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
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default CustomFilter;
