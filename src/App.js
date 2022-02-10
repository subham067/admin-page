
import './App.css';
import { AddProduct } from './Components/AddProduct';
import { collection, doc, getDocs, addDoc, updateDoc, deleteDoc } from 'firebase/firestore'
import { analytics, auth } from './Config'
import AllProduct from './Components/AllProduct';
import { useState, useEffect } from 'react';
import { } from 'react/cjs/react.production.min';


function App() {
  const [AllData, setAllData] = useState([])
  const [pData, setpData] = useState([])
  const [Option, setOption] = useState([])

  const Category = ["Mobile", "Laptop", "TV", "Headphone", "Smart Watch ", "PenDrive", "Router", "Camera", "Printer", "Monitor"]

  const userCollectionRef = collection(analytics, "test");
  async function AddData(notee) {
    await addDoc(userCollectionRef, notee)
      .then(() => {
        alert("Add")
        getAllData()
      }).catch(e => alert(e))
    // console.log(notee);
  }
  const deleteUser = async (id) => {

    const userDoc = doc(analytics, "test", id);
    await deleteDoc(userDoc)
      .then(() => {
        alert("delate")
        getAllData()
      }).catch(e => alert(e))

  }
  function ChangeItem() {
    console.log(pData);
  let paData = []
    pData.map((a)=>{
      if (Option == a.Category ) {
        paData.push(a)
      }
    })
    setAllData(paData)
  }
  async function getAllData() {
    const data = await getDocs(userCollectionRef)

      setAllData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setpData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))

   

  }
  useEffect(() => {
    getAllData()
  }, [])
  return (
    <>
      <AddProduct AddData={AddData} />
      <h1 className='text-center' >All product  </h1>
     
      <h4 className='text-center d-flex justify-content-center'>
        <select className="form-select" aria-label="Default select example" className="w-25 " value={Option} onChange={e => setOption(e.target.value)}>
          <option >select this select menu</option>
          {Category.map((a) => <>  <option value={a}>{a}</option></>)}
        </select>
        <button onClick={ ChangeItem} class="btn btn-success btn-sm my-auto ">Search</button>
      </h4>


      <div className="container">
        <div className="  row ">
          {AllData.map((d) => {
            return (
              <AllProduct data={d} DeleteData={deleteUser} />
            )
          })}
        </div>
      </div>

    </>
  );
}

export default App;
