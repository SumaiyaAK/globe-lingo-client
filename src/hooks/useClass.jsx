import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';

const useClass = () => {
    const {user} = useContext(AuthContext);

    const { refetch, data: classes =[]} = useQuery({
        queryKey: ['class', user?.email],
        queryFn: async () =>{
            const res = await fetch(`https://globe-lingo-server.vercel.app/class?email=${user?.email}`)
            return res.json();
        },
      })

      return[classes,  refetch]
};

export default useClass;