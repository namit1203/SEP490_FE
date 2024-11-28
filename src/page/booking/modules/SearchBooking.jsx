import React, { useCallback, useEffect, useRef, useState } from "react";
import DropdownSearch from "./Dropdown";
import { options } from "../../../mock/location";

export default function SearchBooking() {
  const [fromInputValue, setFromInputValue] = useState(options[0].value);
  const [toInputValue, setToInputValue] = useState(options[1].value);

  const [openDropdown, setOpenDropdown] = useState(null);

  const fromDropdownRef = useRef(null);
  const toDropdownRef = useRef(null);

  const filteredFromOptions = options.filter((option) =>
    option.value.toLowerCase().includes(fromInputValue.toLowerCase())
  );

  const filteredToOptions = options.filter((option) =>
    option.value.toLowerCase().includes(toInputValue.toLowerCase())
  );

  const handleFromOptionClick = (option) => {
    setFromInputValue(option.value);
    setOpenDropdown(null);
  };

  const handleToOptionClick = (option) => {
    setToInputValue(option.value);
    setOpenDropdown(null);
  };

  const handleClickOutside = useCallback(
    (event) => {
      if (
        (fromDropdownRef.current && !fromDropdownRef.current.contains(event.target)) &&
        (toDropdownRef.current && !toDropdownRef.current.contains(event.target))
      ) {
        setOpenDropdown(null);
      }
    },
    []
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [handleClickOutside]);

  const handleFromInputClick = () => {
    setOpenDropdown(openDropdown === "from" ? null : "from");dropdown
  };

  const handleToInputClick = () => {
    setOpenDropdown(openDropdown === "to" ? null : "to");
  };

  return (
    <div className="flex items-center p-4">
      <div className="flex gap-4">
        <div className="border rounded-lg border-solid border-[rgb(224,224,224)]">
          <div className="flex items-center space-x-4">
            {/* Start - Nơi xuất phát */}
            <div className="flex flex-row gap-2 px-4 py-0 h-[54px] border-r-[rgb(224,224,224)] border-r border-solid">
              <div className="flex flex-col justify-center items-center">
                <img
                  src="https://229a2c9fe669f7b.cmccloud.com.vn/svgIcon/pickup_vex_blue_24dp.svg"
                  width="24"
                  height="24"
                  alt=""
                />
              </div>
              <div className="flex flex-1 flex-col-reverse justify-around w-full">
                <div ref={fromDropdownRef} className="relative w-full">
                  {/* Input */}
                  <input
                    type="text"
                    className="outline-none !border-none !ring-0 !text-base !p-0 font-semibold"
                    value={fromInputValue}
                    onChange={(e) => {
                      setFromInputValue(e.target.value);
                      setOpenDropdown("from");
                    }}
                    onClick={handleFromInputClick}
                  />

                  {/* Dropdown for "Nơi xuất phát" */}
                  {openDropdown === "from" && (
                    <DropdownSearch
                      filteredOptions={filteredFromOptions}
                      isOpen={true}
                      handleOptionClick={handleFromOptionClick}
                    />
                  )}
                </div>
                <label className="base__Caption-sc-1tvbuqk-26 hTYbup color--light-disable" htmlFor="from_input">
                  Nơi xuất phát
                </label>
              </div>
            </div>

            {/* End - Nơi đến */}
            <div className="flex flex-row gap-2 px-4 py-0 h-[54px]">
              <div className="flex flex-col justify-center items-center">
                <img
                  src="https://229a2c9fe669f7b.cmccloud.com.vn/svgIcon/dropoff_new_24dp.svg"
                  width="24"
                  height="24"
                  alt=""
                />
              </div>
              <div className="flex flex-1 flex-col-reverse justify-around w-full">
                <div ref={toDropdownRef} className="relative w-full">
                  {/* Input */}
                  <input
                    type="text"
                    className="outline-none !border-none !ring-0 !text-base !p-0 font-semibold"
                    value={toInputValue}
                    onChange={(e) => {
                      setToInputValue(e.target.value);
                      setOpenDropdown("to");
                    }}
                    onClick={handleToInputClick}
                  />

                  {/* Dropdown for "Nơi đến" */}
                  {openDropdown === "to" && (
                    <DropdownSearch
                      filteredOptions={filteredToOptions}
                      isOpen={true}
                      handleOptionClick={handleToOptionClick}
                    />
                  )}
                </div>
                <label className="base__Caption-sc-1tvbuqk-26 hTYbup color--light-disable" htmlFor="to_input">
                  Nơi đến
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
