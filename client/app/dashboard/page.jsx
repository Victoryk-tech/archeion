import { redirect } from "next/navigation";

export default async function Dashboard() {
  redirect("/dashboard/posts");
}



  // Handle post edit (opens a form for editing)
  // const handleEdit = (id) => {
  //   if (selectedPost) {
  //     router.push(`/dashboard/posts?id=${selectedPost._id}`);
  //   }
  // };