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
import { initStore } from '../store/reducers/cartReducer.js';
import { DefaultSeo } from 'next-seo';
import GoTop from '../components/Shared/GoTop';
import ReactGA from 'react-ga';
import { apiUrl } from '../utils/API';



export default withRedux(initStore)(
    class MyApp extends App {
        static async getInitialProps ({ Component, ctx }) {
            return {
                pageProps: Component.getInitialProps
                    ? await Component.getInitialProps(ctx)
                    : {}
            }
        }

        componentDidMount () {
            const token = localStorage.getItem('token')

            if(token) {
                const query = `
                    query {
                      authenticatedUser {
                        id,
                        name
                      }
                    }
                `;

                const opts = {
                  method: "POST",
                  headers: {
                      'Authorization': 'Bearer ' + token.toString(),
                      "Content-Type": "application/json"
                  },
                  body: JSON.stringify({ query })
                };

                fetch(apiUrl, opts)
                  .then(res => res.json())
                    .then(result => {
                        if (!result.data.authenticatedUser) {
                            localStorage.removeItem('token')
                            localStorage.removeItem('user')
                        }
                    })
                  .catch(console.error);
            }

            ReactGA.initialize('UA-153601216-1');
            // Send initial test view
            ReactGA.pageview(window.location.pathname + window.location.search);
        }

        render () {
            const { Component, pageProps, store } = this.props

            return (
                <Provider store={store}>
                    <DefaultSeo
                        title="YankeeSim"
                        description="YankeeSim eCommerce webiste"
                        openGraph={{
                            type: 'website',
                            locale: 'en_IE',
                            site_name: 'YankeeSim - eCommerce',
                        }}
                    />

                    <Component {...pageProps} />
                    <GoTop scrollStepInPx="50" delayInMs="16.66" />
                </Provider>
            );
        }
    }
)