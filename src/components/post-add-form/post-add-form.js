import React, {Component} from 'react';
import './post-add-form.css';
import FirebaseApi from '../../Services/firebaseApi';

 export default class PostAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    updateText = (e) => {
        this.setState({text: e.target.value});
    }
    onSubmites = (e) => {
        
        e.preventDefault();
        this.props.addTodo(this.state.text);
        this.setState({text: ''});
    }
    
    render() {
        return (
            <form onSubmit={this.onSubmites}
            className="bottom-panel d-flex"
          
            >
                <input
                    type="text"
                    placeholder="О чем вы думаете сейчас"
                    className="form-control new post-label"
                    onChange={this.updateText}
                    value={this.state.text}
               />
                <button 
                type="submit"
                className="btn btn-outline-secondary"
                >Добавить</button>
            </form>
        )
    }
}

