import '../assets/styles/bootstrap.min.css';
import '../assets/styles/fontawesome.min.css';
import '../assets/styles/style.css';
import '../assets/styles/responsive.css';
import '../assets/styles/animate.min.css';
import '../assets/styles/slick.css';
import '../assets/styles/slick-theme.css';

import { Provider } from 'react-redux';
import App from 'next/app';
import withRedux from 'next-redux-wrapper';
import { initStore } from '../store/reducers/cartReducer';
import { DefaultSeo } from 'next-seo';
import GoTop from '../components/Shared/GoTop';
import ReactGA from 'react-ga';
import { ApolloProvider } from '@apollo/react-hooks';

import withApollo from '../utils/apollo-client';


export default withApollo(
    class MyApp extends App {
        
        static async getInitialProps ({ Component, ctx }) {
            return {
                pageProps: Component.getInitialProps
                    ? await Component.getInitialProps(ctx)
                    : {}
            }
        }

        componentDidMount () {
            ReactGA.initialize('UA-153601216-1');
            // Send initial test view
            ReactGA.pageview(window.location.pathname + window.location.search);
        }

        render () {
            const { Component, pageProps, apollo } = this.props

            return (
                <ApolloProvider client={apollo}>
                    <DefaultSeo
                        title="YankeeSim - React Next eCommerce Templates"
                        description="YankeeSim - React Next eCommerce Templates. This has been built with React, Next.js, Express.js, and ES6+"
                        openGraph={{
                            type: 'website',
                            locale: 'en_IE',
                            url: 'https://nextland-react.envytheme.com/',
                            site_name: 'YankeeSim - React Next eCommerce Templates',
                        }}
                    />

                    <Component {...pageProps} />
                    <GoTop scrollStepInPx="50" delayInMs="16.66" />
                </ApolloProvider>
            );
        }
    }
)