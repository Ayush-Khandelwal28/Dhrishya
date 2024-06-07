"use client";
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useEffect, useState } from "react";

export const useGetCallById = (id: string | string[]) => {
    const [call, setCall] = useState<Call>();
    const [isCallLoading, setIsCallLoading] = useState(false);

    const client = useStreamVideoClient();

    useEffect(() => {
        console.log("Inside useGetCallById", id);
        console.log("Client", client);
        if (!client) return;
        console.log("Client Exists");
        const loadCall = async () => {
            const { calls } = await client.queryCalls({
                filter_conditions: {
                    id
                }
            });
            calls.length > 0 ? setCall(calls[0]) : setCall(undefined);
            setIsCallLoading(false);
        }
        loadCall();

    }, [client, id]);

    return { call, isCallLoading }
}