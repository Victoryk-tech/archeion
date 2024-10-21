// /app/books/[id]/page.jsx
"use client";

import ChapterNavigation from "@/components/ChapterNavigation";
import { useRouter } from "next/router";
import { AllBlogPosts } from "@/app/api/categories"; // Assuming this is where you have the data
import Image from "next/image";
import { useParams } from "next/navigation";

export default function BookDetails({ params }) {
  const { id } = params; // Get the dynamic book ID from the URL params

  // Find the book by its ID from the dataset
  const book = AllBlogPosts.find((post) => post.id === id);

  if (!book) {
    return <div>Book not found!</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold py-4">{book.title}</h1>
      <p className="text-sm text-customPurple">{book.date}</p>
      <div className="my-4">
        <Image src={book.blogImg} alt={book.title} className="w-full h-auto" />
      </div>
      <div>
        <p className="text-customGrey">{book.title}</p>
        {/* Assuming "content" holds the body of the book */}
      </div>
    </div>
  );
}
