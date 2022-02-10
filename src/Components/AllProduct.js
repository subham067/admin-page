import React from 'react'

function AllProduct({data,DeleteData}) {
  return (

    // const [data, setData] = useState({ name: "", Desc: "",Prize: "",Stock:"",Category:"" ,img1: "" , img2: "" , img:"",sell:"",comment:[]})

        <div className="card mb-3 col-4 ml-2" >
          <div className="row g-2 p-2">
            <div className="col-md-4">
              <img src={data.img1} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Name : {data.name}</h5>
                <h5 className="card-title">price : {data.Prize}</h5>
                <h5 className="card-title">Category : {data.Category}</h5>
                <p className="card-text">
                {data.Desc}
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
                <button onClick={()=> DeleteData(data.id)} class="btn btn-danger">Delete</button>
              </div>
            </div>
          </div>
        </div>

    
  )
}

export default AllProduct