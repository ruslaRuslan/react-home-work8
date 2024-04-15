import {useContext} from "react"
import { DataContext } from "../../contexts/DataContext"

const ContextPage = ({}) => {
  const value =  useContext(DataContext)
  return (
        <div>ContextPage {value}</div>

  )
}

export default ContextPage