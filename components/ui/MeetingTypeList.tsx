import React, { useState } from 'react'
import HomeMeetingCard from '@/components/HomeMeetingCard'
import { useUser } from '@clerk/nextjs'
import { Call, useStreamVideoClient } from '@stream-io/video-react-sdk';
import { useRouter } from 'next/navigation';


const MeetingTypeList = () => {
    const user = useUser();
    const client = useStreamVideoClient();
    console.log("Client", client);
    const [details, setDetails] = useState({
        dateTime: new Date(),
        description: '',
        link: '',
    });
    const [callDetails, setCallDetails] = useState<Call>();
    const router = useRouter();

    const createMeeting = async () => {
        // console.log("Client", client);
        console.log('Creating Meeting');
        if (!user || !client) return;
        console.log('User and Client exists');
        try {
            const id = crypto.randomUUID();
            const call = client.call('default', id);
            if (!call) throw new Error('Failed to create call');

            const startingTime = details.dateTime.toISOString() || new Date().toISOString();
            const description = details.description || 'New Meeting';

            await call.getOrCreate(
                {
                    data: {
                        starts_at: startingTime,
                        custom: {
                            description
                        }
                    }
                }
            )
            setCallDetails(call);
            console.log('Call Created', call);
            // if (!details.description) {
            router.push(`/meeting/${call.id}`);
            // }
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <section onClick={createMeeting} className='flex flex-row gap-6 max-xl:flex-col'>
            <HomeMeetingCard />
        </section>
    )
}

export default MeetingTypeList