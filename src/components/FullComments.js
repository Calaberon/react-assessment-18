import IdComment from "./IdComment"

export const FullComments = ({comments, setComments}) => {
    return comments.map((current) => 
        <IdComment
        comment={current}
        key={current.id}
        />
    )
}

export default FullComments