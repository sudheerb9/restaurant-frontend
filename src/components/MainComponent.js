import React, { Component } from 'react';
import Menu from './MenuComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import Dishdetail from './DishdetailComponent';
import About from './AboutComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { COMMENTS } from './shared/comments';
import { PROMOTIONS } from './shared/promotions';
import { LEADERS } from './shared/leaders';
import { DISHES } from './shared/dishes';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS
    };
  }

  render () {
    const HomePage = () => {
      return(
        <Home 
        dish={this.state.dishes.filter((dish) => dish.featured)[0]}
        promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
        leader={this.state.leaders.filter((leader) => leader.featured)[0]}
    />
      );
    }

    const DishWithId = ({match}) => {
      return(
        <Dishdetail dish={this.state.dishes.filter((dish) => dish.id ===parseInt(match.params.dishId,10))[0]}
         comments={this.state.comments.filter((comments) => comments.dishId ===parseInt(match.params.dishId,10))[0]}

        />
      );
    }

  return (
      <div>
        <Header />
        <Switch>
              <Route path='/home' component={HomePage} />
              <Route path='/aboutus' component={() => <About leaders={this.state.leaders} />} />
              <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
              <Route path='/menu/:dishId' component={DishWithId} />
              <Route exact path='/contactus' component={Contact} />} />
              <Redirect to="/home" />
          </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;