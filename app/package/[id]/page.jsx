import OtherAllPackage from '@/components/page/package/OtherAllPackage';
import SinglePackage from '@/components/page/package/SinglePackage';

export default function PackageDetails({ params }) {
    const { id } = params;
    return (
        <div>
            <SinglePackage packageId={id} />
            <OtherAllPackage />
        </div>
    )
}
