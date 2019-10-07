import React from 'react';
import NewsSlider from '../Widgets/NewsSlider/slider';
import NewsList from '../Widgets/NewsList/newsList';
import { Row, Col } from 'react-bootstrap';
const Home = () => {
    return (
        <Row>
            <Col md={12}>
                <NewsSlider
                    type="featured"
                    start={0}
                    amount={3}
                    settings={{
                        dots: false
                    }}
                />
                <NewsList
                    type="card"
                    loadmore={true}
                    start={3}
                    amount={3} />
            </Col>


        </Row>
    )
}

export default Home;