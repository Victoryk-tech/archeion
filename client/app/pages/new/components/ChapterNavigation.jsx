import Link from "next/link";

export default function ChapterNavigation({ bookId, currentChapter }) {
  const prevChapter = currentChapter > 1 ? currentChapter - 1 : null;
  const nextChapter = currentChapter < 2 ? currentChapter + 1 : null; // Assuming 2 chapters per book

  return (
    <div>
      {prevChapter && (
        <Link href={`/books/${bookId}/${prevChapter}`}>
          <a>Previous Chapter</a>
        </Link>
      )}
      {nextChapter && (
        <Link href={`/books/${bookId}/${nextChapter}`}>
          <a>Next Chapter</a>
        </Link>
      )}
    </div>
  );
}
