import { Link } from "react-router-dom";

export default function BlogCard({ post }) {
  return (
    <article>
      <Link to="/blog" className="block overflow-hidden rounded-2xl bg-[#f1f1f4]">
        <img
          src={post.img}
          alt=""
          className="aspect-507/362 w-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </Link>

      <p className="mt-8 text-lg font-semibold uppercase" style={{ color: post.color }}>
        {post.cat}
      </p>
      <h4 className="mt-3 text-[1.75rem] font-semibold leading-snug">
        <Link to="/blog" className="transition-colors hover:text-[#f5427f]">
          {post.title}
        </Link>
      </h4>
      <p className="mt-4 text-lg leading-8 text-ink/60">{post.text}</p>
      <p className="mt-5 text-lg text-ink/60">
        <b className="font-semibold text-ink">By {post.author}</b>
        <span className="mx-3">|</span>
        {post.date}
      </p>
    </article>
  );
}