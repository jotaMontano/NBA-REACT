import React, { Component } from 'react';
import SliderTemplates from './sliderTempleate';
import { getArticles } from '../../Services/services';

class NewsSlider extends Component {

    state = {
        news: [],

    }  

    componentWillMount = async () => {
        this.setState({
            news: await getArticles(this.props.start, this.props.amount)
        });
    }
    
    render() {
        return (
            <SliderTemplates
                data={this.state.news}
                type={this.props.type}
                settings={this.props.settings} />
        )
    }
}

export default NewsSlider;