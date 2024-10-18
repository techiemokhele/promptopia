"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import ProfileComponent from "@components/ProfileComponent";

const ProfilePage = () => {
  const { data: session } = useSession();

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/posts`);

      const data = await response.json();

      setPosts(data);
    };

    if (session?.user.id) fetchPost();
  }, []);

  const handleEdit = () => {};

  const handleDelete = async () => {};

  return (
    <ProfileComponent
      name="My"
      desc="Welcome to your personalised profile page. Share your exceptional prompts and inspire others with the power of your imagination."
      data={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default ProfilePage;
