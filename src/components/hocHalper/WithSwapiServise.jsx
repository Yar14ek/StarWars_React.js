import React from 'react';
import {SwapiServiceConsumer} from '../swapi-services-context'
const WithSwapiServise = (Wrapped)=>{

    return(props)=>{
       return (<SwapiServiceConsumer>
           {
               (swapiService)=>{
                  return  <Wrapped {...props} swapiService={swapiService}/>
               }
           }
        </SwapiServiceConsumer>)

    }

};

export default WithSwapiServise;