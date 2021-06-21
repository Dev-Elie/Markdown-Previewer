import React ,{Component} from "react"
import "./App.css"



let marked = require("marked")

class App extends Component{
    // Set state to a dummy markdown text
    state = {
        markdown:`# Type Markdown here`
    }


    //Trigger this event when changes occur in the textarea,
    handleChange = (markdown,e)=>{
        this.setState({markdown})
    }

    render(){

        let {markdown} = this.state;
        return(

            <div className="App">
            <div className="row container-fluid">


            <div className="col-md-6 p-4 container">
                <h5>Input</h5>
              <textarea value ={markdown} onChange ={(event)=>this.handleChange(event.target.value)} ></textarea>
            </div>

            <div className="col-md-6 output p-4 container">
            <h5>Markdown Preview</h5>
            <div dangerouslySetInnerHTML ={{__html:marked(markdown)}}>
        
            </div>
            </div>

            </div>

            </div>

            )
    }
}

export default App;