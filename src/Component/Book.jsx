import React from'react'
import {useParams} from 'react-router-dom';
function Book() {
    const {id} = useParams();
    return ( 
        <h1>
            This is book no:{id}
        </h1>
     );
}

export default Book;