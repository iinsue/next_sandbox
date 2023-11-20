"use client";

import { useState } from "react";
import { Post } from "./_components/post";
import { Posts } from "./_components/posts";

const BasicPage = () => {
  const [postId, setPostId] = useState(-1);

  return (
    <>
      <div className="pl-6">
        <p>
          As you visit the posts below, you will notice them in a loading state
          the first time you load them. However, after you return to this list
          and click on any posts you have already visited again, you will see
          them load instantly and background refresh right before your eyes!{" "}
          <strong>
            (You may neet to throttle your network speed to simulate longer
            loading sequences)
          </strong>
        </p>
        {postId > -1 ? (
          <Post postId={postId} setPostId={setPostId} />
        ) : (
          <Posts setPostId={setPostId} />
        )}
      </div>
    </>
  );
};

export default BasicPage;
