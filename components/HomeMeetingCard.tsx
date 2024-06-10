import React from 'react'
import Image from 'next/image'
import { HomeCardDetails } from '@/constansts';
import { useRouter } from 'next/navigation';

const HomeMeetingCard = () => {
    const router = useRouter();
    return (
        HomeCardDetails.map((card) => (
            <div className={`bg-[#0E78F9] px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-[14px] cursor-pointer`}
                onClick={() => router.push(`/${card.onclick}`)}
            >
                <div className='flex-center glassmorphism size-12 rounded-[10px] cursor-pointer'>
                    <Image
                        src={card.imgSrc}
                        alt={card.imgAlt}
                        width={24}
                        height={24}
                    />
                </div>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-2xl font-bold'>{card.title}</h1>
                    <p className='text-lg font-normal'>{card.description}</p>
                </div>
            </div>
        ))
    )
}

export default HomeMeetingCard