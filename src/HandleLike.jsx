import { useState } from "react"

const HandleLike = () => {
    const [like, setLike] = useState(false)
    const [count, setCount] = useState(0)
    const handleState = (e) => {
        setLike(true)
        setCount(count+1)
    }
    const handleDislike = (e) => {
        setLike(false)
    }
  return (
    <div  >HandleLike
        <div>{like == true ? "❤" : "🤍"}</div>
        <div>{count}</div>
        <button onClick={handleState}>Like Me!</button>
        <button onClick={handleDislike}>Dislike</button>
    </div>
  )
}

export default HandleLike