import React, { createContext, useState } from "react";

export const DemoDataContext = createContext();

export const DemoDataProvider = props => {
  const { children } = props;
  const [data, setData] = useState({
    firstName: "andrea",
    lastName: "test",
    emailId: "andreas@test.com",
    password: "1234",
    mobile: "04154739311",
    dob: "02/02/2019",
    gender: "MALE",
    position: "Software Developer",
    companyName: "Apple",
    startDate: "12/10/2010",
    endDate: "10/12/2019",
    searchSetting: {
      location: "Melbourne",
      rangeOffer: "",
      position: ""
    }
  });

  return (
    <DemoDataContext.Provider value={[data, setData]}>
      {children}
    </DemoDataContext.Provider>
  );
};
