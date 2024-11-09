import BreadCrump from '@/components/breadCrump/BreadCrump'
import HaatBody from '@/components/page/haat/HaatBody'
import PageTaitleBox from '@/components/pageTaitleBox/PageTaitleBox'
import React from 'react'

export default function HaatPage() {
    return (

        <div>
            <BreadCrump />
            <PageTaitleBox title='রিসেন্ট এডেড' />
            <HaatBody />
        </div>

    )
}
