// ** Router imports
import { useRoutes } from "react-router-dom"

// ** GetRoutes
import { getRoutes } from "./routes"

// ** Hooks Imports
import { useLayout } from "@hooks/useLayout"

const Router = () => {
  // ** Hooks
  const { layout } = useLayout()

  const allRoutes = getRoutes(layout)
  console.log('allRoutes:', allRoutes)

  const routes = useRoutes([...allRoutes])

  return routes
}

export default Router
