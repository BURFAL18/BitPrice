import fetch from 'isomorphic-unfetch';
import Layout from '../Components/Layout';
import Prices from '../Components/Prices';

const Index = (props) => (
  <Layout>
    <div>
      <h1>Welcome to BitPrice </h1>

      <p>Check the Current Bitcoin Rate </p>
      <Prices bpi={props.bpi}/>
    </div>
  </Layout>

);
Index.getInitialProps =async function()
{
  const res = await fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`);
  const data = await res.json();

   return{
     bpi:data.bpi
   }
}
export default Index;