import React,{Component} from 'react';
import {Button} from 'reactstrap';




class AddOption extends Component{

    state ={
        error: undefined
    };


    handleAddOption=(e)=> {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option)

        this.setState(()=>({error:error}));

        this.setState(()=>{
            return{
                error:error
            };
        });


        if(!error){
            e.target.elements.option.value='';
        }

    };

    render() {
        return(
            <div>
                {this.state.error && <p className={"add-option-error"}>{this.state.error}</p>}
                <form className={"add-option"} onSubmit={this.handleAddOption}>
                <input className={"add-option__input"} type={"text"} name={"option"}/>
                <Button className={"button"}>Add Option</Button>
                </form>
            </div>
        );
    }
}

export default AddOption;
