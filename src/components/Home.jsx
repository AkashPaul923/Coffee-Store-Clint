import { useLoaderData } from "react-router-dom";


const Home = () => {
    const coffees = useLoaderData()
    console.log(coffees);
    return (
        <div>
            Home
        </div>
    );
};

export default Home;