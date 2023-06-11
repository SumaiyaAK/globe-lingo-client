import { useEffect, useState } from "react";
import Courses from "../../Shared/Courses/Courses";


const PopularClasses = () => {
    const [popularClasses, setPopularClasses] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/AllClasses')
            .then(res => res.json())
            .then(data => {
                const popularCourses = data.filter(course => course.Category === 'Popular')
                setPopularClasses(popularCourses)
            })
    })
    return (
        <section >
            <h2 className="text-5xl text-center p-10">Popular Classes</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {
                    popularClasses.map(course => <Courses
                        key={course._id}
                        course={course}
                    >

                    </Courses>)
                }
            </div>
        </section>
    );
};

export default PopularClasses;