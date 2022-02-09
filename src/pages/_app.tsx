import '../styles/globals.css';
import type { AppProps } from 'next/app';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
    const Layout = (Component as any).layout || (({ children }: any) => <>{children}</>);
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
};

export default App;
