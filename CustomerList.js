import React from "react";

function CustomerList() {
    // Array of customer data
    const customers = [
        { id: 1, name: "Alice Johnson", email: "alice@example.com", age: 30 },
        { id: 2, name: "Bob Smith", email: "bob@example.com", age: 25 },
        { id: 3, name: "Charlie Brown", email: "charlie@example.com", age: 35 },
        { id: 4, name: "Diana Prince", email: "diana@example.com", age: 28 },
    ];

    // Map over the customer array to render the details dynamically
    const customerItems = customers.map((customer) => (
        <tr key={customer.id}>
            <td>{customer.id}</td>
            <td>{customer.name}</td>
            <td>{customer.email}</td>
            <td>{customer.age}</td>
        </tr>
    ));

    // Return the table structure
    return (
        <div>
            <h2>Customer List</h2>
            <table border="1" style={{ borderCollapse: "collapse", width: "100%" }}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>{customerItems}</tbody>
            </table>
        </div>
    );
}

export default CustomerList;
