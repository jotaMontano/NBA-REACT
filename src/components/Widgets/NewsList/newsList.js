import * as React from 'react';
import { Link } from 'react-router-dom';
import { getArticles } from '../../Services/services';
import { Card } from 'react-bootstrap';
import styles from './newsList.css'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Button from '../Buttons/buttons';

class NewsList extends React.Component<any, any> {

    state = {
        items: [],
        start: this.props.start,
        end: (this.props.start + this.props.amount),
        amount: this.props.amount
    }

    componentWillMount = async () => {
        this.request(this.state.start, this.state.end)
    }

    request = async (start, end) => {
        this.setState({
            items: [... this.state.items,
            ...await getArticles(start, end)]
        });
    }

    loadMore = () => {
        let end = this.state.end + this.state.amount;
        this.request(this.state.end, end)
    }
    renderNews = (type) => {
        let template = null;

        switch (type) {
            case ('card'):
                template = this.state.items.map((item, i) => (
                    <CSSTransition
                        classNames={{
                            enter: 'newsListWrapper',
                            enterActive: 'newsListWrapperEnter'
                        }}
                        timeout={500}
                        key={i}
                    >
                        <Card>
                            <Card.Body className="newsListItem">
                                <Link to={`/articles/${item.id}`}>
                                    teams
                                    <h2>{item.title}</h2>
                                </Link>
                            </Card.Body>
                        </Card>
                    </CSSTransition>

                ))
                break;
            default:
                template = null;
        }
        return template;
    }
    render() {
        return (
            <div>
                <TransitionGroup
                    component="div"
                    className="list">
                    {this.renderNews(this.props.type)}
                </TransitionGroup>
                <Button
                    type="loadmore"
                    loadMore={(() => this.loadMore())}
                    cta="Load More News"
                />
            </div>
        )
    }

}

export default NewsList;