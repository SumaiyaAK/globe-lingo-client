import { useEffect, useState } from "react";

import Instructors from "../../../Shared/Instructors/Instructors";

const TopInstructors = () => {
    const [popularClasses, setPopularClasses] = useState([])
    useEffect(() => {
        fetch('https://globe-lingo-server.vercel.app/AllClasses')
            .then(res => res.json())
            .then(data => {
                const TopInstructors = data.filter(instructor => instructor.Rank === 'Top')
                setPopularClasses(TopInstructors )
            })
    })
    return (
        <section className="mb-50">
            <h2 className="text-5xl text-center p-10">Popular Instructors</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {
                    popularClasses.map(course => <Instructors
                        key={course._id}
                        course={course}
                    >

                    </Instructors>)
                }
            </div>
        </section>
    );
};

export default TopInstructors;