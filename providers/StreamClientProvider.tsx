"use client";
import { tokenProvider } from '@/actions/stream.actions';
import Loader from '@/components/Loader';
import { useUser } from '@clerk/nextjs';
import {
  StreamVideo,
  StreamVideoClient,
} from '@stream-io/video-react-sdk';
import { ReactNode, useEffect } from 'react';
import { useState } from 'react';


export const StreamVideoProvider = ({ children }: { children: ReactNode }) => {
  const [videoClient, setVideoClient] = useState<StreamVideoClient>();

  const { user, isLoaded } = useUser();

  const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
  const secret = process.env.NEXT_PUBLIC_STREAM_API_SECRET;

  useEffect(() => {
    console.log("Api Key", apiKey, "Secret", secret, "User", user, "isLoaded", isLoaded)
    if (!user || !isLoaded) return;
    if (!apiKey || !secret) throw new Error('Stream API Key or Secret not found');

    const client = new StreamVideoClient({
      apiKey,
      user: {
        id: user.id,
        name: user.username || user.id,
        image: user.imageUrl,
      },
      tokenProvider
    });
    setVideoClient(client);
    console.log("Client in Provider", client)
  }, [user, isLoaded]);

  if (!videoClient) return <Loader />;

  return (
    <StreamVideo client={videoClient}>
      {children}
    </StreamVideo>
  );
};

export default StreamVideoProvider;