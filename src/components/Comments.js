import {useState, useEffect} from 'react';
import {FullComments} from "./FullComments"

export const Comments = () => {
    // Insturction:
    // Use endpoint: https://jsonplaceholder.typicode.com/comments to get a list of comments. 
    // display the comment body on the screen
    // add event listeners to each comment body that when clicked will simply console.log the comment id.

    // you will need to use the useEffect hook. Do this in async / await syntax.

    const [comments, setComments] = useState([])
    const [setComment, setSingleComment] = useState(null)

    useEffect(() => {
        const getData = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/comments`)
            const data = await response.json()
            setComments(data)
        }

        getData()
    }, [])

    const getCommentId = async (id) => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
        const data = await response.json()
        setSingleComment(data)
    }
    
    return(
        // Replace this with your code.
        <h1>Comments component
            <FullComments
                setComments={setComments}
            />
            {setComments}
        </h1>
    )
}

export default Comments