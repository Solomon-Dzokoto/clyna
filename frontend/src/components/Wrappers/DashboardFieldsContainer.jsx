import React from "react";
import { TextField, SelectionField, DateField } from "../ui/DashboardFields";

export const DashboardFieldsContainer = ({ children }) => {
  return <section className="flex flex-wrap py-3">{children}</section>;
};
