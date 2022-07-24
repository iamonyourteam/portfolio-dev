import React from "react";
import '../../../App.css';
import { client } from "./client";
import Posts from './Posts';

class Blog extends React.Component {

    state = {
        articles: []

    }

    componentDidMount() {
        client.getEntries()
        .then((response) => { 
            console.log(response)
            this.setState({ 
                articles: response.items
            })
        })
        .catch(console.error)
    }

        render() {
           return (
            <>
            <Posts posts={this.state.articles}/>
            </>
           )}


           
}

export default Blog;