import Profile from '../manage-products/Profile'
import Actions from './Actions'

export default function MainPage(){
    return (
        <>
        <section className="container mx-auto flex flex-1 sm:flex-row flex-col flex-nowrap justify-center items-center overflow-hidden max-w-full order-1 gap-3">
         <Profile />
         <Actions />
        </section>
        </>
    )
}