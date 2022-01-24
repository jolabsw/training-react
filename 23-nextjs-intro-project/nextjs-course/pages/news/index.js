// our-domain.com/news

import Link from 'next/link';
import { Fragment } from "react";

function NewsPage() {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/1">Example Link 1</Link>
        </li>
        <li>
          <Link href="/news/2">Example Link 2</Link>
        </li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;
