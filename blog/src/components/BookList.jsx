import Link from "next/link";
import { RecentBlogPosts, AllBlogPosts } from "@/app/api/categories";
import Image from "next/image";
const books = [
  { id: "1", title: "Book One" },
  { id: "2", title: "Book Two" },
];

export default function BookList() {
  return (
    <div>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <Link href={`/books/${book.id}`}>
              <p>{book.title}</p>
            </Link>
          </li>
        ))}
      </ul>

      <section className="md:p-0 my-[3rem]">
        <h1 className="py-[2rem] text-xl font-bold">
          {AllBlogPosts[0].category}
        </h1>
        <article className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 ">
          {AllBlogPosts.map((post) => (
            <div key={post.id}>
              <div className="w-full">
                <Image
                  src={post.blogImg}
                  alt="blog news"
                  width={120}
                  height={120}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <p className="text-customPurple font-bold text-xs mt-4">
                  {post.date}
                </p>
                <h1 className="text-xl font-bold py-[10px] ">{post.title}</h1>
                <p className="text-customGrey">{post.headingExcept}</p>
              </div>

              <Link href={`/books/${post.id}`}>
                <p>{post.title}</p>
              </Link>
            </div>
          ))}
        </article>
      </section>
    </div>
  );
}
