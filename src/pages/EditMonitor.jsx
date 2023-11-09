import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

export const EditMonitor = () => {
  const { id } = useParams();
  const [monitor, setMonitor] = useState({
    brand: "",
    model: "",
    pricee: "",
    dimension: "",
    image: "https://source.unsplash.com/random/200x200/?monitor",
    
  });
  const navigate = useNavigate();
  useEffect(() => {
    fetch(" http://localhost:8000/monitors/" + id) 
      .then((res) => res.json())
      .then((data) => {
        setMonitor(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const handleChange = (e) => {
    setMonitor({ ...monitor, [e.target.brand]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const monitorData = {
        brand: monitor.brand,
        model: monitor.model,
        price: monitor.price,
        dimension: monitor.dimension,
        image: monitor.image,
    };
    fetch(" http://localhost:8000/monitors/" + id, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(monitorData),
    })
      .then((res) => {
        alert("Save Successfully");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="row">
      <div className="offset-lg-3 col-lg-6">
        <form className="container" onSubmit={handleSubmit}>
          <div className="card">
            <div className="card-title">
              <h2>Edit monitor</h2>
            </div>
            <div className="card-body">
              <div className="row">
                
                <div className="col-lg-12">
                  <div className="form-group">
                    <label htmlFor="brand">Brand</label>
                    <input
                      type="text"
                      required
                      name="brand"
                      id="brand"
                      value={monitor.brand}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label htmlFor="model">model</label>
                    <input
                      type="text"
                      required
                      name="model"
                      id="model"
                      value={monitor.model}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label htmlFor="price">price</label>
                    <input
                      type="text"
                      required
                      name="price"
                      id="price"
                      value={monitor.price}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label htmlFor="dimension">dimension</label>
                    <input
                      type="text"
                      required
                      name="dimension"
                      id="dimension"
                      value={monitor.dimension}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label htmlFor="image">image</label>
                    <input
                      type="text"
                      required
                      name="image"
                      id="image"
                      value={monitor.image}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="form-group">
                    <button className="btn btn-success" type="submit">
                      Save
                    </button>
                    <Link to="/" className="btn btn-danger">
                      Back
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditMonitor