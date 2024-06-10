import React from 'react'
import HomeMeetingCard from '@/components/HomeMeetingCard'
import InstantMeeting from '@/components/InstantMeeting';


const MeetingTypeList = () => {

    return (
        <section className='flex flex-row gap-6 max-xl:flex-col'>
            <InstantMeeting />
            <HomeMeetingCard />
        </section>
    )
}

export default MeetingTypeList