import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



// TextField, SelectionField, and DateField components for the dashboard.
// These components are used to create input fields for text, selection, and date respectively.
// You can use these components to build forms or filters in your dashboard.
// You can use these components as children component to the DashboardFieldsContainer component and you can also use them independently.

export const TextField = ({ id, name, placeholder, children }) => {
  return (
    <div className="w-full md:w-2/4 px-2 md:pl-10">
            
         
    <div className="flex border-1 py-3 px-4 border-[#999999] rounded-lg">
      <input
        id={id}
        name={name}
        type="text"
        placeholder={placeholder}
        className="border-0 w-full outline-0 appearance-none"
      />
      <div className="pt-1">{children}</div>
    </div>
     </div>
  );
};

export const SelectionField = ({ name, id, children, placeholder, options }) => {
  return (
    <div className="w-1/2 md:w-1/4 px-2  mb-4 md:mb-0">
    <div className="flex border-1 py-3 px-4 border-[#999999] rounded-lg">
      <select
        name={name}
        id={id}
        className="w-full border-0 outline-0 appearance-none"
      >
        <option value="" disabled selected>{placeholder}</option>
        {options.map((eachOption) => {
          return (
            <option
              className="w-full px-4 block"
              key={eachOption.id}
              value={eachOption.value}
            >
              {eachOption.label}
            </option>
          );
        })}
      </select>
      <div className="pt-1">{children}</div>
    </div>
    </div>
  );
};

export const DateField = ({ id, name, placeholder, children }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Picked date:", selectedDate);
  };
  return (
    <div className="w-1/2 md:w-1/4 px-2  mb-4 md:mb-0">
    <div className="flex border-1 py-3 px-4 border-[#999999] rounded-lg">
      <DatePicker
        id="date"
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="dd-MM-yyyy"
        placeholderText="By Date"
        className="w-full border-0 outline-0 text-content-secondary"
      />
      <div className="pt-1">{children}</div>
    </div>
    </div>
  );
};
