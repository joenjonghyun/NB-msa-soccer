import {Layout} from "common";
import {wrapper} from '../redux/store'

function App({ Component, pageProps}) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default wrapper.withRedux(App)