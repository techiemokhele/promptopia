import '@styles/globals.css';

import NavComponent from '@components/NavComponent';
import Provider from '@components/Provider';

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
                <Provider>
                    <div className='main'>
                        <div className='gradient' />
                    </div>

                    <main className='app'>
                        <NavComponent />
                        {children}
                    </main>
                </Provider>
            </body>
        </html>
    )
}

export default RootLayout;