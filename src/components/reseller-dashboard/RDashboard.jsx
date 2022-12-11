import SignUpHeader from "../seller-signup/SignUpHeader";
import RProfile from "./RProfile";
import ManageAcct from "./ManageAcct";
import Performance from "./Performance";
import RFooter from "./RFooter";


export default function RDashboard(){
    return(
        <>
            <SignUpHeader/>
            <RProfile/>
            <ManageAcct />
            <Performance />
            <RFooter />
        </>
    )
}