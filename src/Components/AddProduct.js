import React, { useState } from 'react'

export const AddProduct = ({ AddData }) => {
    const [data, setData] = useState({ name: "", Desc: "",Prize: "",Stock:"",Category:"" ,img1: "" , img2: "" , img3:"",sell:"",comment:[]})
    const Category = ["Mobile", "Laptop", "TV", "Headphone", "Smart Watch ", "PenDrive", "Router", "Camera", "Printer", "Monitor"]
    function UpDateData() {
        if (data.name == "" || data.Desc == "" || data.Prize == "" || data.Stock == "" || data.Category == "" || data.img1 == "" || data.img2 == "" || data.img3 == "") {
            alert("Please Fill the Form")
        } else{
            AddData(data)
        }
    }
    return (
        <>
            <h1 className='text-center'>Add product</h1>

            <div className='container'>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">
                    product name
                    </label>
                    <input
                        value={data.name}
                        onChange={e => setData({ ...data, name: e.target.value })}
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Enter product Name"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput2" className="form-label">
                        Product Prize
                    </label>
                    <input
                        value={data.Prize}
                        onChange={e => setData({ ...data, Prize: e.target.value })}
                        type="number"
                        className="form-control"
                        id="exampleFormControlInput2"
                        placeholder="Product Prize"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">
                        Product Stock
                    </label>
                    <input
                        value={data.Stock}
                        onChange={e => setData({ ...data, Stock: e.target.value })}
                        type="number"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder=" Product Stock"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">
                        Product Category
                    </label>
                    <select className="form-select" aria-label="Default select example"     value={data.Category}   onChange={e => setData({ ...data, Category: e.target.value })}>
                        <option >select this select menu</option>
                        {Category.map((a) => <>  <option value={a}>{a}</option></>)}
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">
                    Product textarea
                    </label>
                    <textarea
                        value={data.Desc}
                        onChange={e => setData({ ...data, Desc: e.target.value })}
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows={3}
                        defaultValue={""}
                    />
                </div>
               
               
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">
                    product img1
                    </label>
                    <input
                        value={data.img1}
                        onChange={e => setData({ ...data, img1: e.target.value })}
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="  product img1"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">
                    product img2
                    </label>
                    <input
                        value={data.img2}
                        onChange={e => setData({ ...data, img2: e.target.value })}
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="  product img2"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">
                    product img3
                    </label>
                    <input
                        value={data.img3}
                        onChange={e => setData({ ...data, img3: e.target.value })}
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder=" product img3"
                    />
                </div>


                <button className='btn btn-dark' onClick={UpDateData}>Submit</button>
            </div>
        </>
    )
}
