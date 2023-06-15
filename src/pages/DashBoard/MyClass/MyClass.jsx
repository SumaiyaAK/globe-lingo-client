import Swal from "sweetalert2";
import useClass from "../../../hooks/useClass";

const MyClass = () => {
    const [classes, refetch] = useClass();
    console.log(classes);
    const total = classes.reduce((sum, classes) => classes.Course_Price + sum, 0)

    const handleDelete = course => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(`https://globe-lingo-server.vercel.app/class/${course._id}`, {
                method: 'DELETE'
              })
              .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch()
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                }
            })
            }
          })
    }
    return (
        <div>
            <h2 className="text-xl text-center font-semibold mb-10">My Class</h2>
            <div className="uppercase font-semibold flex justify-evenly h-[60px]">
                <h3 className="text-xl">Total Classes: {classes.length}</h3>

                <button className="btn btn-sm">PAY</button>


            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                Class
                            </th>
                            <th>Class</th>
                            <th>Instructor</th>
                            <th>Price</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            classes.map((course, index) => <tr
                                key={course._id}
                            >
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={course.Image_URL} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{course.Language}</div>
                                            <div className="text-sm opacity-50">class ID:{course.classId
                                            }</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {course.Instructor_Name}
                                </td>
                                <td>${course.Course_Price}</td>
                                <th>
                                    <button onClick={() => handleDelete(course)}className="btn btn-square btn-outline">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </button>
                                </th>
                            </tr>)
                        }

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyClass;