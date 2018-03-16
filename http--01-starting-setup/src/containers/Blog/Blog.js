import React, { Component } from 'react';

import './Blog.css';
import Posts from '../Blog/Posts/Posts';

import {Route, NavLink, Switch, Redirect} from 'react-router-dom';
import asyncComponent from '../../hoc/asyncComponent';

const AsyncNewPost = asyncComponent(() => import('../Blog/NewPost/NewPost'));

class Blog extends Component {

    state = {
        auth: true
    }

    componentDidMount() {
        // unauth => this.props.history.replace('/posts');
        console.log(this.props);
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
                    {this.state.auth ? <Route path='/new-post' component={AsyncNewPost} /> : null}
                    <Route path='/posts' component={Posts} />
                    <Route render={() => <h1>Not found</h1>} />
                    <Redirect from='/' to='/posts' />
                    <Route path='/' component={Posts} />
                </Switch>
            </div>
        );
    }
}

export default Blog;