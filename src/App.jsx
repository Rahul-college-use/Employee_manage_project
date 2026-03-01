import React, { useContext, useEffect, useState } from 'react';
import Login from './components/Login';
import EmployessDashboard from './pages/EmpolyeesDashboard';
import AdminDashboard from './pages/AdminDashboard';
import { setLocalStorage } from './util/Localstorage';
import { Authcontext } from './context/AuthProvider';

const App = () => {
    
    setLocalStorage();

    const [user, setUser] = useState(null);
    const [loggedInUserData, setLoggedInUserData] = useState(null);
    const Authdata = useContext(Authcontext);
    // console.log(Authdata.Employees)

    // ✅ Restore login after refresh
    useEffect(() => {
        const storedUser = localStorage.getItem("loggedInUser");

        if (storedUser && Authdata) {
            const parsedUser = JSON.parse(storedUser);

            setUser(parsedUser.role);

            if (parsedUser.role === "employee") {
                const employee = Authdata.Employees?.find(
                    (e) => e.email === parsedUser.email
                );
                setLoggedInUserData(employee || null);
            }

            if (parsedUser.role === "admin") {
                const admin = Authdata.Admin?.find(
                    (e) => e.email === parsedUser.email
                );
                setLoggedInUserData(admin || null);
            }
        }
    }, [Authdata]);

    // ✅ Login Handler
    const handlerLogin = (email, password) => {

        if (!Authdata) return;

        // 🔹 Check Admin
        const admin = Authdata.Admin?.find(
            (e) => email === e.email && password === e.password
        );

        if (admin) {
            setUser('admin');
            setLoggedInUserData(admin);

            localStorage.setItem(
                "loggedInUser",
                JSON.stringify({
                    role: 'admin',
                    email: admin.email
                })
            );

            return;
        }

        // 🔹 Check Employee
        const employee = Authdata.Employees?.find(
            (e) => email === e.email && password === e.password
        );

        if (employee) {
            setUser('employee');
            setLoggedInUserData(employee);

            localStorage.setItem(
                "loggedInUser",
                JSON.stringify({
                    role: 'employee',
                    email: employee.email
                })
            );

            return;
        }

        alert("Invalid Credentials");
    };

    return (
        <>
            {!user && <Login handlerLogin={handlerLogin} />}

            {user === 'employee' && loggedInUserData && (
                <EmployessDashboard data={loggedInUserData} />
            )}

            {user === 'admin' && loggedInUserData && (
                <AdminDashboard data={loggedInUserData} employeeEmail={Authdata.Employees}/>
            )}
        </>
    );
};

export default App;