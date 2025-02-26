// /app/books/[id]/page.jsx
"use client";

import ChapterNavigation from "@/components/ChapterNavigation";
import { useRouter } from "next/router";

import { AllBlogPosts } from "@/app/api/categories"; // Assuming this is where you have the data
import Image from "next/image";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function BookDetails({ params }) {
  const { id } = params; // Get the dynamic book ID from the URL params

  // Find the book by its ID from the dataset
  const book = AllBlogPosts.find(
    (post) => post.id.toString() === id.toString()
  );

  if (!book) {
    return <div>Book not found!</div>;
  }

  return (
    <div className="p-2 md:px-8 lg:px-16 ">
      <div className="p-6">
        <h1 className="text-2xl font-bold">{book.title}</h1>
        <h1 className="ml-24 font-medium pt-4">- {book.date}</h1>
        <Image
          src={book.blogImg}
          alt={book.title}
          className="w-full md:w-80 md:h-80 rounded my-4"
        />
        <div>
          <h4 className="font-semibold">Abstract</h4>
          <p className="text-gray-600 mb-4">{book.abstract}</p>
        </div>
        <h2 className="text-2xl font-semibold mb-4">Chapters</h2>
        <ul className="space-y-4">
          {book.chapters.map((chapter) => (
            <li
              key={chapter.chapterId}
              className="bg-gray-100 p-4 rounded shadow"
            >
              <Link href={`/books/${id}/chapters/${chapter.chapterId}`}>
                <div className="text-blue-500 hover:underline">
                  <h3 className="text-lg font-semibold">
                    {chapter.chapterTitle}
                  </h3>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
