import { useEffect, useState } from "react";
import Courses from "../../Shared/Courses/Courses";


const PopularClasses = () => {
    const [popularClasses, setPopularClasses] = useState([])
    useEffect(() => {
        fetch('PopularClasses.json')
            .then(res => res.json())
            .then(data => {
                const popularCourses = data.filter(course => course.Category === 'Popular')
                setPopularClasses(popularCourses)
            })
    })
    return (
        <section>
            <h2>Popular Classes</h2>
            <div>
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