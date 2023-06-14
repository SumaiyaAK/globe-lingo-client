import useClass from "../../../hooks/useClass";


const InstructorsDisplay = ({allInstructor}) => {
    const { Image_URL, Language, Number_of_Students, Instructor_Name, Course_Price, Course_Duration } = allInstructor;
    
    
// http://localhost:5000/class?email=ahmet.hasan@gmail.com
    return (
        <div className="">
            <div className="card  card-side bg-base-100 shadow-xl">
                <figure><img className="h-60 w-100 rounded-full w-54" src={Image_URL} alt="Movie" /></figure>
                <div className="card-body w-250 h-100">
                    <h2 className="card-title">{Instructor_Name}</h2>
                    <p>Number of Students:   {Number_of_Students}</p>

                    <p>Course Price: {Course_Price}</p>
                    <p>Duration of Course: {Course_Duration}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-wide">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstructorsDisplay;