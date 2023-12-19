// import { createContext } from "react";

// // const userContext = createContext({
// //   loggedInUser: "default user",
// // });

// const userContext=createContext('Nikita');

// export default userContext;

import { createContext } from "react";

const userContext=createContext({
    loggedInUser:"default user",
})

export default userContext;