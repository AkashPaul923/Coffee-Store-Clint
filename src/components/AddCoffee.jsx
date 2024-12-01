import Swal from 'sweetalert2'

const AddCoffee = () => {
  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    const name = form.name.value
    const chef = form.chef.value
    const supplier = form.supplier.value
    const taste = form.taste.value
    const category = form.category.value
    const details = form.details.value
    const photo = form.photo.value
    const newCoffee = {name, chef, supplier, taste, category, details, photo}
    console.log(newCoffee);

    fetch("http://localhost:5000/coffees", {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newCoffee)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.insertedId){
        Swal.fire({
          title: 'Success!',
          text: 'Add coffee successfully',
          icon: 'success',
          confirmButtonText: 'cancel'
        })
      }
    })
  }
  return (
    <div>
      <div className="card bg-base-100 w-full max-w-4xl mx-auto shrink-0 shadow-2xl">
        <form onSubmit={handleSubmit} className="card-body grid grid-cols-1 md:grid-cols-2">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="name"
              name="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Chef</span>
            </label>
            <input
              type="text"
              placeholder="chef"
              name="chef"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Supplier</span>
            </label>
            <input
              type="text"
              placeholder="supplier"
              name="supplier"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <input
              type="text"
              placeholder="taste"
              name="taste"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <input
              type="text"
              placeholder="category"
              name="category"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <input
              type="text"
              placeholder="details"
              name="details"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control col-span-2">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="text"
              placeholder="photo"
              name="photo"
              className="input input-bordered"
              required
            />
          </div>
           
          <div className="form-control mt-6 col-span-2">
            <button className="btn btn-primary">Add coffee</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
