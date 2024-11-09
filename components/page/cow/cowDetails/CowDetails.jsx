import RecentCow from "../../home/RecentCow/RecentCow";
import DeetailHero from "./DeetailHero";
import DetailsDescriptionTab from "./DetailsDescriptionTab";


export default function CowDetails({ productId }) {

    return (
        <div className="container 2xl:px-20 px-5 mx-auto mt-7">
            <DeetailHero productId={productId} />
            {/* <DetailsDescriptionTab /> */}
            <RecentCow isBorder={false} />
        </div>
    )
}
