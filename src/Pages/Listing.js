import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Listing = () => {
    const [lists, setLists] = useState([]);
    const [value, setValue] = useState([]);
    useEffect(() => {
        loadUsers();
    }, [])
    const loadUsers = async () => {
        return await axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then((response) => setLists(response.data))
            .catch((err) => console.log(err));
    }

    const handleReset = () => {
        loadUsers();
    }
    const handleSearch = async (event) => {
        event.preventDefault();
        return await axios
            .get(`https://jsonplaceholder.typicode.com/users?q=${value}`)
            .then((response) => {
                setLists(response.data);
                setValue('');
            })
    }
    return (
        <div>
            <h1>Employ {lists.length}</h1>

            <div className="w-75 m-auto">
                <form action="" onSubmit={handleSearch}>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Search" aria-label="Search Name" aria-describedby="basic-addon2" value={value} onChange={(event) => setValue(event.target.value)} />
                        <button className="input-group-text btn btn-success" id="basic-addon2" type='submit' >Search</button>
                        <span className="input-group-text btn btn-info" id="basic-addon2" onClick={() => handleReset()}>Reset</span>
                    </div>
                </form>
            </div>


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
                        lists.length === 0 ? (
                            <tr>
                                <th></th>
                                <td> No Data Found</td>
                                <td></td>
                            </tr>
                        ) : lists.map(list => <tr
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