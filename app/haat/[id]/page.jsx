import BreadCrump from '@/components/breadCrump/BreadCrump'
import CowDetails from '@/components/page/cow/cowDetails/CowDetails'


export default function page({ params }) {

    const { id } = params;

    return (
        <div>
            <BreadCrump />
            <CowDetails productId={id} />
        </div>
    )
}
