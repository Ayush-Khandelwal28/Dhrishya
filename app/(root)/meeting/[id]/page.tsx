"use client";
import React, { useState, useEffect } from 'react'
import { useUser } from '@clerk/nextjs'
import { StreamCall, StreamTheme } from '@stream-io/video-react-sdk';
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
import MeetingRoom from '@/components/MeetingRoom';
import MeetingSetup from '@/components/MeetingSetup';
import Loader from '@/components/Loader';
import { useGetCallById } from '@/app/hooks/useGetCallById';

const Meeting = ({ params: { id } }: { params: { id: string } }) => {
  const { user, isLoaded } = useUser();
  const { call, isCallLoading } = useGetCallById(id);
  console.log("User", user);
  console.log("Call", call);
  const [isSetupComplete, setIsSetupComplete] = useState(false);

  if (!isLoaded || isCallLoading) return <Loader />;

  return (
    <main className='h-screen w-full'>
      {call ? (
        <StreamCall call={call}>
          <StreamTheme>
            {isSetupComplete ? <MeetingRoom /> : <MeetingSetup />}
          </StreamTheme>
        </StreamCall>
      ) : (
        <div>Call not found</div>
      )}
    </main>
  );
};

export default Meeting;
