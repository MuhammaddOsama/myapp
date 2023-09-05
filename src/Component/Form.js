import React, { Component } from 'react'

export default class Form extends Component {
    constructor() {
        super()
        this.abc=this.abc.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)   

        this.state={

                item:"",
                list:["item1","item2","item3"]
            }
    }
        abc(e){
        this.setState({
         item: e.target.value
        })
    }
    handleSubmit(e){
        e.preventDefault();
        if(this.state.item === ''){
            alert("Empty De Mara Da Sa Ki");
        }
        else
        if(this.state.list.indexOf(this.state.item)<0) {
            this.setState({
                list: this.state.list.concat(this.state.item)
               })

        }
       else{
        alert("Item Already Exist");
       }
    }
    
    render() {

        return (

            <div>
                <form onSubmit={this.handleSubmit}>
                   <input type='text ' id="item" name="txt" value={this.state.item} onChange={this.abc} />  
                    <button> Add </button>
                     
                </form>
<ul>
    {
        this.state.list.map((l,k)=>{
            return <li key={k}>{l} </li>
        })
    }
</ul>
         

            </div>
        )
    }
}

