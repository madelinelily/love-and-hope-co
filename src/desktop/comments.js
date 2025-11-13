/* eslint-disable jsx-a11y/img-redundant-alt */
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Comment from './comment.js';
import '@splidejs/splide/css/sea-green';
import * as Papa from 'papaparse';
import { useState } from 'react';
import './comments.css';

//TODO: NEED NEW IMAGES

const csvFilePath = './comments.csv';

const Comments = () => {
    const [imported_comments, setImportedComments] = useState([]);
    fetch( csvFilePath )
            .then( response => response.text() )
            .then( responseText => { var data = Papa.parse(responseText);
                var parsedComments = [];
                data.data.map((ic) => {
                    parsedComments.push({
                        name: ic[0],
                        comment: ic[1]
                    })
                    return null;
                })
                setImportedComments(parsedComments);})
    return(
        <div className="comment-container">
            <h1 className="comment-header">What People Say</h1>
            <Splide aria-label="Comments">
                {imported_comments.map((ic, index) => 
                    <SplideSlide key={index}>
                        {Comment(ic.name, ic.comment)}
                    </SplideSlide>
                )}
            </Splide>
        </div>
    )
}

export default Comments;