import React, { useEffect, useState } from 'react';
import faker from "faker";
import Suggestion from './Suggestion';

const Suggestions = () => {
    const [suggestions,setSuggestions] = useState([]);
    useEffect(() => {
        const suggestions = [...Array(5)].map((_,i) => [
            {
                ...faker.helpers.contextualCard(),
                id: i,
            }
        ]);
        setSuggestions(suggestions)
    },[]);

    return (
        <div className='mt-4 ml-10'>
            <div className='flex justify-between text-sm mb-5'>
                <h3 className='text-sm font-bold text-gray-400'>Suggestions for you</h3>
                <button className='text-gray-600 font-semibold'>See All</button>
            </div>
            {
                suggestions.map(profile => (
                    <Suggestion 
                        key={profile[0].id}
                        id={profile[0].id}
                        userImage="https://lh3.googleusercontent.com/a-/AOh14GiPJ9kEbF6fr0ReXzGV5TX9upCYmDbtN9XJpR6oYA=s96-c"
                        username={profile[0].username}
                        workPlace={profile[0].company.name}
                    />
                ))
            }
        </div>
       
    );
};

export default Suggestions;
