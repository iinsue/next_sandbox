"use client";

import { useQueryClient } from "@tanstack/react-query";
import { usePosts } from "../_hooks/usePosts";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface PostsProps {
  setPostId: (postId: number) => void;
}

interface PostProps {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export function Posts({ setPostId }: PostsProps) {
  const queryClient = useQueryClient();
  const { status, data, error, isFetching } = usePosts();

  return (
    <>
      <h1>Posts</h1>
      <div>
        {status === "pending" ? (
          "Loading..."
        ) : status === "error" ? (
          <span>Error: {error.message}</span>
        ) : (
          <>
            <div>
              {data.map((post: PostProps) => (
                <p key={post.id}>
                  <Link
                    href="#"
                    onClick={() => setPostId(post.id)}
                    className={cn(
                      queryClient.getQueryData(["post", post.id])
                        ? "text-lg text-green-600"
                        : ""
                    )}
                  >
                    {post.title}
                  </Link>
                </p>
              ))}
            </div>
          </>
        )}
      </div>
      <div>{isFetching ? "Background Updating..." : " "}</div>
    </>
  );
}
