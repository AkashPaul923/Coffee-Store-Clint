import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const Product = ({coffee}) => {
    const {_id,name, chef, photo} = coffee
    const handleDelete = (_id) =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            
            fetch(`http://localhost:5000/coffees/${_id}`, {
                method: 'DELETE'
            })
            .then(res=> res.json())
            .then(data =>{
                console.log(data);
                if (data.deletedCount > 0) {
                    Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
            })
          });
    }

    return (
        <div className="flex justify-between items-center gap-4 bg-amber-100 p-6">
            <div>
                <img src={photo} alt="" />
            </div>
            <div>
                <p>Name: {name}</p>
                <p>Chef: {chef}</p>
            </div>
            <div className="join join-vertical space-y-5">
                <button className="btn join-item">View</button>
                <Link to={`/updatecoffee/${_id}`}><button className="btn join-item">Edit</button></Link>
                <button onClick={()=>handleDelete(_id)} className="btn join-item">Delete</button>
            </div>
        </div>
    );
};

export default Product;

// {
//     "_id": "674c12f33772639ec36a841e",
//     "name": "Americano Coffee",
//     "chef": "Mr. Matin Paul",
//     "supplier": "Cappu Authorizer",
//     "taste": "Sweet and Hot",
//     "category": "Americano",
//     "details": "Espresso with hot water",
//     "photo": "https://i.ibb.co.com/pLPgV6n/1.png"
// }