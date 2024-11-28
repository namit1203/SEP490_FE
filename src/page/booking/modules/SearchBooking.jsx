import React, { useCallback, useEffect, useRef, useState } from "react";
import DropdownSearch from "./Dropdown";

export default function SearchBooking() {
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    { id: 1, value: "Hà Nội" },
    { id: 2, value: "Hải Phòng" },
    { id: 3, value: "Đà Nẵng" },
    { id: 4, value: "TP.HCM" },
    { id: 5, value: "Bắc Giang" },
  ];
  const [inputValue, setInputValue] = useState(options[0].value);

  const dropdownRef = useRef(null);

  const filteredOptions = options.filter((option) =>
    option.value.toLowerCase().includes(inputValue.toLowerCase())
  );

  const handleOptionClick = (option) => {
    setInputValue(option.value);
    setIsOpen(false);
  };

  const handleClickOutside = useCallback(
    (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    },
    [setIsOpen]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [handleClickOutside]);

  return (
    <div class="flex items-center p-4">
      <div className="flex gap-4">
        <div className="border rounded-lg border-solid border-[rgb(224,224,224)]">
          <div className="flex items-center space-x-4">
            <div className="flex flex-row gap-2 px-4 py-0 h-[54px]">
              <div className="flex flex-col justify-center items-center">
                <img
                  src="https://229a2c9fe669f7b.cmccloud.com.vn/svgIcon/pickup_vex_blue_24dp.svg"
                  width="24"
                  height="24"
                  alt=""
                />
              </div>
              <div className="flex flex-1 flex-col-reverse justify-around w-full">
                <div ref={dropdownRef} className="relative w-full">
                  {/* Input */}
                  <input
                    type="text"
                    className="outline-none !border-none !ring-0 !text-base !p-0 font-semibold"
                    value={inputValue}
                    onChange={(e) => {
                      setInputValue(e.target.value);
                      setIsOpen(true);
                    }}
                    onClick={() => setIsOpen(true)}
                  />

                  <DropdownSearch
                    filteredOptions={filteredOptions}
                    isOpen={isOpen}
                    handleOptionClick={handleOptionClick}
                  />
                </div>
                <label
                  className="base__Caption-sc-1tvbuqk-26 hTYbup color--light-disable"
                  htmlFor="from_input"
                >
                  Nơi xuất phát
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
