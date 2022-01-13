import React, { Component } from 'react';
import { NavLink, Route, Switch, Redirect } from "react-router-dom";
import Posts from './Posts/Posts';
import asyncComponent from '../../hoc/asyncComponent';
//import NewPost from './NewPost/NewPost';
const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost');
});

import './Blog.css';


class Blog extends Component {

    state = {
        auth: true
    }

    render() {

        return (

            <div className='Blog'>
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to='/posts/' exact activeClassName='my-active' activeStyle={{ color: 'red', textDecoration: 'underline' }}>Posts</NavLink></li>
                            <li><NavLink to={
                                {
                                    pathname: '/new-post',
                                    hash: '#submit', //jump into elements that has id submit
                                    search: '?quick-submit=true'//query parameter haru 

                                }
                            }>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>

                <Switch>
                    {/* based on version it is different so read Docs */}

                    {this.state.auth ? <Route path="/new-post" component={AsyncNewPost} /> : null}
                    <Route path="/posts" component={Posts} />
                    <Route render={() => <h1>Not Found</h1>} />
                    {/* we are getting id from post link that we have set  */}
                    {/* <Redirect from='/' to="/posts" /> */}
                </Switch>



            </div>
        );
    }
}

export default Blog;