'use client';
import BlogRenderer from './BlogRenderer';
import content from '../../../../data/blog/rezevici-monastery';

export default function RezeviciMonastery() {
  return <BlogRenderer content={content} />;
}
