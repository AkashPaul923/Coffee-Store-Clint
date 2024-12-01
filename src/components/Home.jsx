import { useLoaderData } from "react-router-dom";
import Product from "./Product";
import { useState } from "react";


const Home = () => {
    // const [coffees, setCoffees] = useState([])
    // const data = useLoaderData()
    // setCoffees(data)
    const coffees = useLoaderData()

    // console.log(coffees);
    return (
        <div className="max-w-7xl mx-auto">
            Home
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                {
                    coffees.map(coffee => <Product key={coffee._id} coffee={coffee}></Product>)
                }
            </div>
        </div>
    );
};

export default Home;