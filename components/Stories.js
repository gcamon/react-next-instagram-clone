import React, { useEffect, useState } from 'react';
import faker from "faker";
import Story from "../components/Story";
import { useSession } from 'next-auth/react';

const Stories = () => {
    const [suggestions,setSuggestions] = useState([]);
    const {data: session } = useSession();

    useEffect(() => {
        const suggestions = [...Array(20)].map((_,i) => [{
            ...faker.helpers.contextualCard(),
            id: i
        }]);
        setSuggestions(suggestions)
    },[])

    return (
        <div className='flex space-x-2 
        p-6 bg-white mt-0 
        border-gray-200 
        border rounded-sm
        overflow-x-scroll scrollbar-thin scrollbar-thumb-black'>
            { session && 
                <Story 
                img={session.user.image}
                username={session.user.username}
                />
            }
            {suggestions.map((profile) => (
                <Story 
                    key={profile[0].id} 
                    img="https://lh3.googleusercontent.com/a-/AOh14GiPJ9kEbF6fr0ReXzGV5TX9upCYmDbtN9XJpR6oYA=s96-c"
                    username={profile[0].username}
                />
            ))}
        </div>
    );
};

export default Stories;
