import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import { format } from 'date-fns';
import { formatDistance } from 'date-fns';
import Link from 'next/link';
import styled from 'styled-components';
import Head from 'next/head';
import gql from 'graphql-tag';
import formatMoney from '../lib/formatMoney';
import Error from './ErrorMessage';
import OrderItemStyles from './styles/OrderItemStyles';

const MULTIPLE_ORDER_QUERY = gql`
  query MULTIPLE_ORDER_QUERY {
    orders(orderBy: createdAt_DESC) {
      id
      total
      createdAt
      items {
        id
        title
        description
        price
        image
        quantity
      }
    }
  }
`;

const OrderUl = styled.ul`
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(auto-fit, minmax(40%, 1fr));
`;

class Orders extends React.Component {
  render() {
    return (
      <Query query={MULTIPLE_ORDER_QUERY}>
        {({data: {orders}, error, loading}) => {
          if(error) return <Error error={error} />;
          if(loading) return <p>Loading ...</p>;

          return (
            <div>
              <OrderUl>
                {orders.map(order => (
                  <OrderItemStyles key={order.id}>
                    <Link href={{
                      pathname: '/order',
                      query: { id: order.id }
                    }}>
                      <a>
                        <div className="order-meta">
                          <p>{order.items.reduce((a, b) =>a + b.quantity, 0)} Items</p>
                          <p>{order.items.length} Products</p>
                          <p>{formatDistance(order.createdAt, new Date())}</p>
                          <p>{formatMoney(order.total)}</p>
                        </div>
                        <div className="images">
                          {order.items.map(item => (
                            <img key={item.id} src={item.image} alt={item.title} />
                          ))}
                        </div>
                      </a>
                    </Link>
                  </OrderItemStyles>
                ))}
              </OrderUl>
            </div>
          );
        }}
      </Query>
    );
  }
}

export default Orders;
