import { useContext } from "react";
import {AuthContext} from '../../../providers/AuthProviders'
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useClass from "../../../hooks/useClass";


const ClassesDisplay = ({allClasses}) => {
    const { Image_URL, Language, Number_of_Students, Instructor_Name, Course_Price, Course_Duration, _id } = allClasses;
    const {user} = useContext(AuthContext);
    const [, refetch] = useClass()
    const navigate = useNavigate();
    const handleAddToClass = allClasses => {
          console.log(allClasses);
          if(user && user.email){
            const addedClass = {classId: _id, Image_URL, Language, Course_Price, Instructor_Name, email: user.email }
            fetch('http://localhost:5000/class', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(addedClass)
            })
            .then(res => res.json())
            .then(data=>{
                if(data.insertedId){
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Added to the class',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
          }
          else{
            Swal.fire({
                title: 'Please login to join the class',
                
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login')
                }
              })
          }
    }
    return (
        <div className="">
        <div className="card  card-side bg-base-100 shadow-xl">
            <figure><img  className="h-60 w-100"src={Image_URL} alt="Movie" /></figure>
            <div className="card-body w-250 h-100">
                <h2 className="card-title">{Language}</h2>
                <p>Number of Students:   {Number_of_Students}</p>
                <p>Instructors Name:   {Instructor_Name}</p>
                <p>Course Price: {Course_Price}</p>
                <p>Duration of Course: {Course_Duration}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleAddToClass(allClasses)} className="btn btn-success">Add to Class</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default ClassesDisplay;