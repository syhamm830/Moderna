// import React, { createContext, useState, useEffect } from 'react';
// import { decode as jwtDecode } from 'jwt-decode';

// const UserContext = createContext();

// export const UserProvider = ({ children }) => {
//     const [user, setUser] = useState(null);

//     useEffect(() => {
//         const token = localStorage.getItem('token');
//         if (token) {
//             const decoded = jwtDecode(token);
//             setUser(decoded);
//         }
//     }, []);

//     const login = (token) => {
//         localStorage.setItem('token', token);
//         const decoded = jwtDecode(token);
//         setUser(decoded);
//     };

//     const logout = () => {
//         localStorage.removeItem('token');
//         setUser(null);
//     };

//     return (
//         <UserContext.Provider value={{ user, login, logout }}>
//             {children}
//         </UserContext.Provider>
//     );
// };

// export default UserContext;
