import type { NextPage } from 'next';
import Layout from '../components/Layout';
import { request } from '../lib/datocms';
import Link from 'next/link';

const Home: NextPage = ({ data }: any) => {
  return (
    <Layout>
      <div className="p-2">
        {data.allFrontpages.map((pages: any) => (
          <div key={pages.id} className="p-2 hover:text-red-500">
            <Link href={`/${pages.slug}`}>
              <a>{pages.title}</a>
            </Link>
          </div>
        ))}
      </div>
      {console.log(JSON.stringify(data.allFrontpages[0].title))}
    </Layout>
  );
};

export default Home;

const HOMEPAGE_QUERY = `query HomePage {
  allFrontpages {
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
