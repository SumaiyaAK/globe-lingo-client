

const Courses = ({ course }) => {
    const { Image_URL, Language, Number_of_Students,  Instructor_Name, Course_Price, Course_Duration} = course;
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="card  card-side bg-base-100 shadow-xl">
            <figure><img  className="h-60 w-100"src={Image_URL} alt="Movie" /></figure>
            <div className="card-body w-250 h-100">
                <h2 className="card-title">{Language}</h2>
                <p>Number of Students:   {Number_of_Students}</p>
                <p>Instructors Name:   {Instructor_Name}</p>
                <p>Course Price: {Course_Price}</p>
                <p>Duration of Course: {Course_Duration}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Courses;