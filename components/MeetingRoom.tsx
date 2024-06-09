import { CallControls, CallParticipantsList, PaginatedGridLayout, SpeakerLayout } from '@stream-io/video-react-sdk'
import React, { useState } from 'react'
import { cn } from '@/lib/utils'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

type callLayoutType = 'speaker-left' | 'speaker-right' | 'grid' | 'gallery'

const MeetingRoom = () => {
  const [layout, setLayout] = useState<callLayoutType>('grid')
  const [showParticipants, setShowParticipants] = useState<boolean>(false)

  const CallLayout = () => {
    switch (layout) {
      case 'speaker-left':
        return <SpeakerLayout participantsBarPosition="right" />;
      case 'speaker-right':
        return <SpeakerLayout participantsBarPosition="left" />;
      default:
        return <PaginatedGridLayout />;
    }
  };

  return (
    <section className='relative h-screen w-full overflow-hidden pt-4 text-white'>
      MeetingRoom
      <div className='relative flex size-full items-center justify-center'>
        <div className='flex size-full max-w-[1000px] items-center'>
          <CallLayout />
        </div>
        <div className={cn('h-[calc(100vh-86px)] hidden ml-2', { 'show-block': showParticipants })}>
          <CallParticipantsList onClose={() => setShowParticipants(false)} />
        </div>
      </div>
      <div className='fixed bottom-0 flex w-full items-center justify-center gap-5'>
        <CallControls />
      </div>
    </section>
  )
}

export default MeetingRoom
