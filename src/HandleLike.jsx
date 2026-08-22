import { useState } from "react"

const HandleLike = () => {
  const [like, setLike] = useState(false)
  const [count, setCount] = useState(0)

  const handleLike = () => {
    if (!like) {
      setLike(true)
      setCount(count + 1)
    }
  }

  const handleDislike = () => {
    if (like) {
      setLike(false)
      setCount(count - 1)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-80 rounded-2xl bg-white p-6 text-center shadow-lg">

        <h2 className="mb-4 text-2xl font-bold text-gray-800">
          Like This Post
        </h2>

        <div className="mb-3 text-6xl">
          {like ? "❤️" : "🤍"}
        </div>

        <p className="mb-5 text-lg font-semibold text-gray-600">
          {count} {count === 1 ? "Like" : "Likes"}
        </p>

        <div className="flex justify-center gap-3">
          <button
            onClick={handleLike}
            className="rounded-lg bg-blue-500 px-5 py-2 font-semibold text-white transition hover:bg-blue-600 active:scale-95"
          >
            👍 Like
          </button>

          <button
            onClick={handleDislike}
            className="rounded-lg bg-gray-200 px-5 py-2 font-semibold text-gray-700 transition hover:bg-gray-300 active:scale-95"
          >
            👎 Dislike
          </button>
        </div>

      </div>
    </div>
  )
}

export default HandleLike