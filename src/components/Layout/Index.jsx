
import { Filter } from "../Filter"
import { Products } from "../Productos"
import NavBar from "../NavBar/NavBar"

const Layout = () => {
    return (
        <>
            <NavBar/>
            <Filter />
            <Products />

        </>
    )
}
export default Layout