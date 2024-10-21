import { useRouter } from "next/router";
import ChapterNavigation from "@/components/ChapterNavigation";

const chapters = {
  1: {
    1: "This is the content for Chapter 1 of Book 1.",
    2: "This is the content for Chapter 2 of Book 1.",
  },
  2: {
    1: "This is the content for Chapter 1 of Book 2.",
    2: "This is the content for Chapter 2 of Book 2.",
  },
};

export default function Chapter() {
  const router = useRouter();
  const { bookId, chapterId } = router.query;

  const content = chapters[bookId]?.[chapterId] || "Chapter not found";

  return (
    <div>
      <h1>
        Chapter {chapterId} of Book {bookId}
      </h1>
      <p>{content}</p>
      <ChapterNavigation bookId={bookId} currentChapter={parseInt(chapterId)} />
    </div>
  );
}
