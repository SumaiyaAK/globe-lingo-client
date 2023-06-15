import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";


const AllUsers = () => {

    const {data: users = [], refetch} = useQuery(['users'], async() => {
        const res = await fetch('https://globe-lingo-server.vercel.app/users')
        return res.json();
    })

    const handleMakeAdmin = user => {
        fetch(`https://globe-lingo-server.vercel.app/users/admin/${user._id}`,{
            method:'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    title: 'Custom animation with Animate.css',
                    showClass: {
                      popup: `${user.name} is an Admin Now!`
                    },
                    hideClass: {
                      popup: 'animate__animated animate__fadeOutUp'
                    }
                  })
            }
        })
    }

    const handleDelete = user => {

    }
    return (
        <div>
            <h3 className="text-3xl font-semibold">Total Users: {users.length}</h3>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        users.map((user, index) => <tr key={user}>
            <th>{index + 1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.role === 'admin' ? 'admin' : 
               <button className="btn" onClick={() => handleMakeAdmin(user._id)}>
               User
               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
             </button>
            }</td>
            <td>
            <button onClick={() => handleDelete(user)}className="btn btn-square btn-outline">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </button>
            </td>
          </tr>)
      }
      
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUsers;