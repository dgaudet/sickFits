import React from 'react';
import PaginationStyles from './styles/PaginationStyles';
import Head from 'next/head';
import Link from 'next/link';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { perPage } from '../config';

const PAGINATION_QUERY = gql`
  query PAGINATION_QUERY {
    itemsConnection {
      aggregate {
        count
      }
    }
  }
`;

const Pagination = props => (
  <Query query={PAGINATION_QUERY}>
    {({ data, loading, error }) => {
      const count = data.itemsConnection.aggregate.count;
      const pages = Math.ceil(count / perPage);
      const page = props.page;
      if (loading) return <p>Loading...</p>
      return (
        <PaginationStyles>
          <Head>
            <title>Sick Fits! page {page} of {pages}</title>
          </Head>
          <Link
            prefetch
            href={{
              pathname: 'items',
              query: { page: page - 1}
            }}
          >
            <a className="prev" aria-disabled={page <= 1}>Prev</a>
          </Link>
          <p>Page {page} of {pages}</p>
          <p>{count} items total</p>
          <Link
            prefetch
            href={{
              pathname: 'items',
              query: { page: page + 1}
            }}
          >
            <a className="next" aria-disabled={page >= pages}>Next</a>
          </Link>
        </PaginationStyles>
      );
    }}
  </Query>
)

export default Pagination;