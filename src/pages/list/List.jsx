import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"

const List = ({ title }) => {
  return (
    <div className='list'>
      <Sidebar />
      <div className="listContainer">
        <Navbar/>
        <Datatable title={title} />
      </div>
    </div>
  )
}

export default List