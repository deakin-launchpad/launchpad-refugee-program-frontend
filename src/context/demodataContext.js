import React, {createContext, useState} from 'react'

export const DemoDataContext = createContext();

export const DemoDataProvider= (props) =>{
    const { children } = props;
    const [data, setData] = useState (
    {
        firstName: 'andrea',
        lastName: 'test',
        emailId: 'andreas@test.com',
        password: '1234',
        mobile: '04154739311',
        dob: '02/02/2019',
        gender: 'MALE'
    }
);

return (
<DemoDataContext.Provider value={[data, setData]}>
    {children}
</DemoDataContext.Provider>
)
}