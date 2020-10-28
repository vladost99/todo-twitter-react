import React, { Component } from 'react';
import './post-list-item.css';
import FirebaseApi from '../../Services/firebaseApi';


export default class PostListItem extends Component {
       constructor(props) {
           super(props);
          /* this.state = {
                importantS: this.props.important,
                likeS: this.props.like
            }
            */
       }

      
    





        toggleImportant = () => {
           this.props.update(this.props.id, !this.props.important, this.props.like);
        }

        toggleLike =  () => {
            this.props.update(this.props.id, this.props.important, !this.props.like);
        }
        
       





    render() {
        const {label, id, removeTodo, important, like} = this.props;
        let classNames = 'app-list-item d-flex justify-content-between';

        if(important){
            classNames+=' important';
        }

        if(like){
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

