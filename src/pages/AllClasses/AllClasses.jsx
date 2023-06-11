import { useEffect } from "react";
import { useState } from "react";
import ClassesDisplay from "./ClassesDisdplay/ClassesDisplay";


const AllClasses = () => {
    const [AllClasses, setAllClasses] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/AllClasses')
            .then(res => res.json())
            .then(data => setAllClasses(data)
            )
    })
    return (
        <section className="mb-50">
            <h2 className="text-5xl text-center p-10">Popular Instructors</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {
                    AllClasses.map(allClasses => <ClassesDisplay
                        key={allClasses._id}
                        allClasses={allClasses}
                    >

                    </ClassesDisplay>)
                }
            </div>
        </section>
    );
};

export default AllClasses;