import React from 'react';
import Layout from '../components/Layout';
import { request } from '../lib/datocms';
import useRouter from 'next/router';

export default function about({ data }: any) {
  return (
    <Layout>
      <div>{data.frontpage.title}</div>
    </Layout>
  );
}

const HOMEPAGE_QUERY = `query HomePage {
  frontpage(filter: {slug: {eq: "about"}}) {
    id
    title
    slug
    sections {
      ... on ImageRecord {
        id
        image {
          url
        }
      }
      ... on TextRecord {
        id
        structuredText {
          value
        }
      }
    }
  }
}`;

export async function getStaticProps() {
  const data = await request({
    query: HOMEPAGE_QUERY,
  });
  return {
    props: { data },
  };
}
