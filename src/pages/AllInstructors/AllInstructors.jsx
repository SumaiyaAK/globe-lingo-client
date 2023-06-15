import { useEffect } from "react";
import { useState } from "react";
import InstructorsDisplay from "./InstructorsDisplay/InstructorsDisplay";


const AllInstructors = () => {
    const [AllInstructors, setAllInstructors] = useState([])
    useEffect(() => {
        fetch('https://globe-lingo-server.vercel.app/AllClasses')
            .then(res => res.json())
            .then(data => setAllInstructors(data)
            )
    })
    return (
        <section className="mb-50">
            <h2 className="text-5xl text-center p-10">All Instructors</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {
                    AllInstructors.map(allInstructor => <InstructorsDisplay
                        key={allInstructor._id}
                        allInstructor={allInstructor}
                    >

                    </InstructorsDisplay>)
                }
            </div>
        </section>
    );
};

export default AllInstructors;