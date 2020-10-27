import React, { Component } from 'react';
import './post-list-item.css';


export default class PostListItem extends Component {
       constructor(props) {
           super(props);

           this.state = {
            importantS: this.props.important,
            likeS: this.props.like
            }
       }

        toggleImportant = async () => {
          await  this.setState({importantS: !this.state.importantS});
          await  this.props.update(this.props.label, this.props.id, this.state.importantS, this.state.likeS);
        }

        toggleLike = async () => {
            await  this.setState({likeS: !this.state.likeS});
            await  this.props.update(this.props.label, this.props.id, this.state.importantS, this.state.likeS);
          }
        
       





    render() {
        const {label, id, removeTodo} = this.props;
        let classNames = 'app-list-item d-flex justify-content-between';

        if(this.state.importantS){
            classNames+=' important';
        }

        if(this.state.likeS){
            classNames+=' like';
        }
        return (
            <div id={id} className={classNames}>
                <span 
                className="app-list-item-label"
                onClick={this.toggleLike}
                >
                {label}
                </span>
                <div className="d-flex justify-content-center align-items-center">
                    <button 
                    className="btn-star btn-sm"
                    onClick={this.toggleImportant}
                   
                    >
                        <i className="fa fa-star"></i>
                    </button>
                    <button 
                    onClick={removeTodo}
                    className="btn-trash btn-sm"
                    >
                        <i className="fa fa-trash-o"></i>
                    </button>
                    <i className="fa fa-heart"></i>
                </div>
            </div>
        )
    }
}

