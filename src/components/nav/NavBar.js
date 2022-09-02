
import { CustomerNav } from "./CustomerNav"
import { EmployeeNav } from "./EmployeeNav"
import "./NavBar.css"

export const NavBar = () => {
   

    	
    const localHoneyUser = localStorage.getItem("honey_user")
    const honeyUserObject = JSON.parse(localHoneyUser)

        if (honeyUserObject.staff) {
        // returns employees views
            return <EmployeeNav />
        }
        else {
        // returns customer views
            return <CustomerNav />
        }
}
