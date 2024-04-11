import React, { Children, ReactNode } from 'react'

const rootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <main>
            <div>MeetingUparWala</div>
            {children}
            <div>MeetingNeecheWala</div>
        </main>
    )
}

export default rootLayout