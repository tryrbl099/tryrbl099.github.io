import React, { useEffect, useState } from "react";
import axios from "../axios";

function Users() {
    const [users, setUsers] = useState("");

    useEffect(() => {
        axios
            .get("/auth/users")
            .then((res) => {
                setUsers(res.data);
            })
            .catch((error) => console.log(error));
    }, []);

    return <div>{}</div>;
}

export default Users;
