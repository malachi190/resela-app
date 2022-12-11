import SignUpHeader from "../seller-signup/SignUpHeader";
import SProfile from "./SProfile";
import ManageSeller from "./ManageSeller";
import Performance from "../reseller-dashboard/Performance";
import RFooter from "../reseller-dashboard/RFooter";


export default function SDashboard(){
 return <>
    <SignUpHeader/>
    <SProfile />
    <ManageSeller />
    <Performance />
    <RFooter />
 </>
}