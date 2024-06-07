import React, { Children, ReactNode } from 'react'
import { StreamVideoProvider } from '../../../providers/StreamClientProvider'

const rootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <main>
            <StreamVideoProvider>
                {children}
            </StreamVideoProvider >
        </main>
    )
}

export default rootLayout