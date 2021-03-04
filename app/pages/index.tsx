import { Suspense } from "react"
import { Link, BlitzPage, useMutation } from "blitz"
import Layout from "app/core/layouts/Layout"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"
import logout from "app/auth/mutations/logout"
import { TestComponent } from "app/core/components/TestComponent"

const Home: BlitzPage = () => {
  return (
    <div>
      <main>
        <TestComponent />
      </main>
    </div>
  )
}

export default Home
