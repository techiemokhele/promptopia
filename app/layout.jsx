import '@styles/globals.css';

import NavComponent from '@components/NavComponent';
import ProviderComponent from '@components/ProviderComponent';

export const metadata = {
    title: 'Neo Mokhele | Promptopia',
    description: 'Discover & Share AI Prompts',
    icons: {
        icon: "/assets/images/logo.svg"
    }
}

const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body>
                <div className='main'>
                    <div className='gradient' />
                </div>

                <main className='app'>
                    <NavComponent />
                    {children}
                </main>
            </body>
        </html>
    )
}

export default RootLayout;