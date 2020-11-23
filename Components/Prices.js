class Prices extends React.Component
{
 state={
     currency: 'USD'
 }   
 render()
 {
     let list='';

     if(this.state.currency === 'USD')
     {
 list= <li className="list-group-item">
                Bitcoin Rate For {this.props.bpi.USD.description} : 
                <span class="badge badge-success">
                    {this.props.bpi.USD.code}
                </span>
                <strong>
                    {this.props.bpi.USD.rate}
                </strong>
            </li>
     }
     else if(this.state.currency === 'GBP')
     {
 list=<li className="list-group-item">
                Bitcoin Rate For {this.props.bpi.GBP.description} : 
                <span class="badge badge-success">
                    {this.props.bpi.GBP.code}
                </span>
                <strong>
                    {this.props.bpi.GBP.rate}
                </strong>
            </li>
     }
     else if(this.state.currency === 'EUR')
     {
         list= <li className="list-group-item">
            Bitcoin Rate For {this.props.bpi.EUR.description} :
            <span class="badge badge-success">{this.props.bpi.EUR.code}</span>
            <strong>{this.props.bpi.EUR.rate}</strong>
          </li>;
     }
     return (
       <>
         <ul className="list-group">{list}</ul>
         <hr />
         <select
           onChange={(e) => this.setState({ currency: e.target.value })}
           className="form-control"
         >
           <option value="USD">USD</option>
           <option value="GBP">GBP</option>
           <option value="EUR">EUR</option>
         </select>
       </>
     );
 }
}
export default Prices;