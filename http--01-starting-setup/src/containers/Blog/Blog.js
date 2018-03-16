import React, { Component } from 'react';

import './Blog.css';
import Posts from '../Blog/Posts/Posts';
import NewPost from '../Blog/NewPost/NewPost';

import {Route, NavLink, Switch, Redirect} from 'react-router-dom';

class Blog extends Component {

    state = {
        posts: []
    }

    render () {
        
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            {/* <li><NavLink 
                                exact 
                                to='/' 
                                activeClassName='my-active'
                                activeStyle={{}}>Home</NavLink></li> */}

                            <li><NavLink exact to='/posts'>Posts</NavLink></li>
                            <li><NavLink to='/new-post'>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route path='/new-post' component={NewPost} />
                    <Route path='/posts' component={Posts} />
                    <Redirect from='/' to='/posts' />
                    {/* <Route path='/' component={Posts} /> */}
                </Switch>
            </div>
        );
    }
}

export default Blog;