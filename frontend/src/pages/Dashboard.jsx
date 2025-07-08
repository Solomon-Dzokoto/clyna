import React from "react";
import { DashboardFieldsContainer } from "../components/Wrappers/DashboardFieldsContainer";
import {
  TextField,
  SelectionField,
  DateField,
} from "../components/ui/DashboardFields";
import { DashboardHeading } from "../components/ui/DashboardHeading";
import DashboardCard from "../components/ui/DashboardCard";
import DashboardCardContainer from "../components/Wrappers/DashboardCardContainer";
import {
  FaAngleDown,
  FaCalendar,
  FaCircleExclamation,
  FaMagnifyingGlass,
  FaUsers,
} from "react-icons/fa6";
import { FaCheckCircle, FaComment, FaPlus } from "react-icons/fa";
import Button from "../components/ui/Button";


const Dashboard = () => {
  return (
    <section>
      <DashboardHeading
        title="Clyna Overview"
        description="Monitor your facility’s AI automation activity, patient engagement, and real-time insights."
      />
      <DashboardCardContainer>
        <DashboardCard label="Total Patients" value="1,234">
          <FaUsers></FaUsers>
        </DashboardCard>
        <DashboardCard label="Reminders Sent" value="98">
          <FaComment></FaComment>
        </DashboardCard>
        <DashboardCard label="Confirmed Response" value="413">
          <FaCheckCircle></FaCheckCircle>
        </DashboardCard>
        <DashboardCard label="No Response" value="78">
          <FaCircleExclamation></FaCircleExclamation>
        </DashboardCard>
      </DashboardCardContainer>
      <div className="flex flex-wrap">
        <div className="w-full md:w-3/4">
          <DashboardFieldsContainer>
            <DateField id="date" name="date" placeholder="Select Date">
              <FaCalendar className="text-dashboard-icon" />
            </DateField>
            <SelectionField
              id="status"
              placeholder="By Status"
              options={[
                {
                  id: 1,
                  value: "Pending",
                  label: "pending",
                },
                {
                  id: 2,
                  value: "Success",
                  label: "success",
                },
                {
                  id: 3,
                  value: "Inactive",
                  label: "active",
                },
              ]}
            >
              <FaAngleDown className="text-dashboard-icon" />
            </SelectionField>
            <TextField name="search" placeholder="Search by name or ID">
              <FaMagnifyingGlass className="text-dashboard-icon" />
            </TextField>
          </DashboardFieldsContainer>
        </div>
        <div className="w-full px-3 md:w-1/4 py-3 md:pl-[5rem]">
          <Button className="w-full block py-3 bg-primary hover:bg-primary-dark mt-0">
            <span className="text-white text-base font-500">Add Patient  
              <FaPlus className="text-white text-sm ml-3 inline-block"></FaPlus></span>
            
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
