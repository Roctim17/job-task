import React, { useEffect, useState } from 'react';

const Listing = () => {
    const [lists, setLists] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setLists(data))
    }, [])
    return (
        <div>
            <h1>{lists.length}</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">City</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        lists.map(list => <tr
                            key={list.id}
                        // list={list}
                        >

                            <th scope="row">{list.id}</th>
                            <td>{list.name}</td>
                            <td>{list.email}</td>
                            <td>{list.address.city}</td>

                        </tr>)
                    }
                </tbody>
            </table>


        </div>
    );
};

export default Listing;