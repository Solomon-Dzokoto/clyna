import React from 'react';

const ScriptTemplates = () => {
  return (
    <div className="w-[534px] h-[440px] bg-white p-6 space-y-6 rounded-md shadow-sm">
      {/* Page Title */}
      <h1 className="text-[24px] font-bold leading-[32px] text-[#1A1A1A]">
        Script templates
      </h1>

      {/* Card Container */}
      <div className="w-full h-[304px] space-y-4">
        {/* Script Template Card */}
        <div className="w-[259px] h-[144px] p-4 rounded-lg bg-white shadow-md space-y-2">
          <h2 className="text-base font-semibold text-[#1A1A1A]">Appointment Reminder</h2>
          <p className="text-sm text-[#333333]">
            Notify patients of their upcoming appointments.
          </p>

          {/* Edit Button */}
          <button
            onClick={() => {
              // TODO: Trigger overlay "Add New Script Template"
              // Animate with dissolve
              console.log('Edit clicked');
            }}
            className="w-10 h-10 p-2 rounded-lg shadow-md flex items-center justify-center"
          >
            <span className="material-symbols-outlined text-[#1A1A1A]">edit</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScriptTemplates;

