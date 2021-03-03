import { useRouter } from "blitz"
import { useEffect } from "react"

export const TestComponent = () => {
  const router = useRouter()

  useEffect(() => {
    console.log("create test component")
    return () => {
      console.log("destroy test component")
    }
  }, [])

  const handleClick = () => {
    router.push("/?foo=1", undefined, { shallow: true })
  }

  return (
    <div>
      <button onClick={handleClick}>Test</button>
    </div>
  )
}
