import React, { Component } from 'react';
import AppHeader from '../app-header/';
import SearchPanel from '../search-panel/';
import PostStatusFilter from '../post-status-filter/';
import PostList from '../post-list/';
import PostAddForm from '../post-add-form';
import './app.css';
import styled from 'styled-components';
import FirebaseApi from '../../Services/firebaseApi';



const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
`;

export default class App extends Component {
    firebase = new FirebaseApi();
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            term: '',
            filter: 'all',
        }
        this.maxId = 4;
    }

    componentDidMount() {
       this.firebase.getTodo().on('value', (snapshot) => {
           const data = [];
            snapshot.forEach(item => {
                data.push(item.val());
            });
            this.setState({ data });

        });
    }

    searchPost = (items, term) => {
        if( term.length === 0) {
            return items;
        }

        return items.filter((elem) => {
            return elem.label.indexOf(term) > -1
        });
    }

    filterPost = (items, filter) => {
        if(filter === 'like') {
            return items.filter( item => item.like);
        } else {
            return items;
        }
    }
    onFilterSelect = (filter) => {
        this.setState({filter})
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    addTodo = (term) => {
        this.firebase.writeData(term);
    }

    remove = (id) => {
        this.firebase.removeTodo(id);
    }

    update = (label,id,important, like) => {
       this.firebase.updateData(label,id,important, like);
    }
    

   
    

    render() {
      const {data,term, filter} = this.state;
      const liked = data.filter(item => item.like).length;
      const posts = this.filterPost(this.searchPost(data,term), filter);
        return ( 
            <AppBlock>
                 <AppHeader
                 amount={data.length}
                 like={liked}
                 />
                 <div className="searc-panel d-flex">
                   <SearchPanel
                   onUpdateSearch={this.onUpdateSearch}
                   />
                   <PostStatusFilter
                   filter={filter}
                   onFilterSelect={this.onFilterSelect}
                   />
                </div>
                <PostList 
                    data={posts}
                    remove={this.remove}
                    update={this.update}
                   
                />
                <PostAddForm
                addTodo={this.addTodo}
                />
            </AppBlock>
             )
    }
}

