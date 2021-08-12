import Nav from "./Nav"
import Footer from './Footer'
import Head from 'next/head'

const Layout = ({ children }) => {
    return (

        <main>
            <Head>
                <title>My New Next JS Homepage</title>
                <meta name="keywords" content="HTML, CSS, JavaScript" />
            </Head>

            <Nav />
            {children}
            <Footer />
        </main>
    );
}

export default Layout;