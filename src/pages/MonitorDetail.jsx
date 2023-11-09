import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const MonitorDetail = () => {
  const { id } = useParams();
  const [monitorData, setMonitorData] = useState({});

  useEffect(() => {
    fetch(`http://localhost:8000/monitors/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setMonitorData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div className="row">
      <div className="offset-lg-3 col-lg-6">
        <div className="container">
          <div className="card row">
            <div className="card-title">
              <h2>Monitor Detail</h2>
            </div>
            {monitorData && (
              <div className="card-body">
                <img
                  src={` ${monitorData.image}&${monitorData.id}`}
                  alt="monitor"
                />
                <div className="card-text">
                  <h3>
                    {" "}
                    {monitorData.brand} - ({monitorData.id})
                  </h3>
                  <h4>Contact Details:</h4>
                  <h5>Model: {monitorData.model}</h5>
                  <h5>Price: {monitorData.price}</h5>
                  <h5>Dimension: {monitorData.dimension}</h5>
                </div>
                <Link className="btn btn-danger" to="/">
                  Back to listing
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonitorDetail;

