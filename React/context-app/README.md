# Context API

App -> AccedemicDetails -> AllStudents -> StudentData -> PersonalDetails

export const contextVaribale = createContext()

<contextVaribale.Provider value={data}>
<AccedemicDetails>
</contextVaribale.Provider>

AccedemicDetails.jsx

import contextVaribale from "./contextVaribale";

data = useContext(contextVaribale);
