"use client";

import { AllBlogPosts } from "@/app/api/categories";
import { useParams, useRouter } from "next/navigation";

export default function ChapterPage() {
  const router = useRouter();
  const { id, chapterId } = useParams(); // Fetch id and chapterId from the params

  // Find the corresponding book and chapter
  const book = AllBlogPosts.find((book) => book.id === id);
  const chapter = book?.chapters.find(
    (chap) => chap.chapterId.toString() === chapterId
  );

  if (!book || !chapter) {
    return <p>Chapter not found</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">
        {book.title} - {chapter.chapterTitle}
      </h1>
      <ul className="space-y-4">
        {chapter.verses.map((verse) => (
          <li key={verse.verseId} className="bg-gray-100 p-4 rounded shadow">
            <p className="font-semibold">Verse {verse.verseId}</p>
            <p>{verse.text}</p>
          </li>
        ))}
      </ul>
      <button
        className="mt-6 bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => router.back()} // Back button to navigate to previous page
      >
        Back to Chapters
      </button>
    </div>
  );
}
