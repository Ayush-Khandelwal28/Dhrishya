import React, { useState } from 'react'
import Image from 'next/image'
import { useUser } from '@clerk/nextjs'
import { Call, useStreamVideoClient } from '@stream-io/video-react-sdk';
import { useRouter } from 'next/navigation';

const InstantMeeting = () => {
    const user = useUser();
    const client = useStreamVideoClient();
    const router = useRouter();
    const [details, setDetails] = useState({
        dateTime: new Date(),
        description: '',
        link: '',
    });

    const createMeeting = async () => {
        console.log('Creating Meeting');
        if (!user || !client) return;
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
            setDetails(call);
            console.log('Call Created', call);
            router.push(`/meeting/${call.id}`);
        } catch (error) {
            console.log(error);
        }

    }



    return (
        <div onClick={createMeeting} className={`bg-[#0E78F9] px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-[14px] cursor-pointer`}
        >
            <div className='flex-center glassmorphism size-12 rounded-[10px] cursor-pointer'>
                <Image
                    src={'/icons/add-meeting.svg'}
                    alt={'Add Meetings'}
                    width={24}
                    height={24}
                />
            </div>
            <div className='flex flex-col gap-2'>
                <h1 className='text-2xl font-bold'>{'New Meeting'}</h1>
                <p className='text-lg font-normal'>{'Start an Instant Meeting'}</p>
            </div>
        </div>
    )
}

export default InstantMeeting