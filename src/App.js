import React from 'react'

export default class App extends React.Component {
    state ={
        result :{},
        loading: true
    }
    
   async componentDidMount(){
       const url="http://www.omdbapi.com/?t=the&apikey=d3a8db41"
       const response= await fetch(url)
       const data= await response.json()
       this.setState({result:data , loading: false})
   }

    render(){
        return (
            <div>
                {JSON.stringify(this.state.result)}
            </div>
        )
    }
}
