"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { Suspense } from "react";

function getBaseURL() {
  if (typeof window !== "undefined") {
    return "";
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return "http://localhost:3000";
}

const baseUrl = getBaseURL();

// useWaitQuery Hook
function useWaitQuery(props: { wait: number }) {
  const query = useSuspenseQuery({
    queryKey: ["wait", props.wait],
    queryFn: async () => {
      const path = `/api/wait?wait=${props.wait}`;
      const url = baseUrl + path;

      console.log("fetching", url);
      const res: string = await (
        await fetch(url, {
          cache: "no-store",
        })
      ).json();
      return res;
    },
  });

  return [query.data as string, query] as const;
}

// 사용할 컴포넌트
function MyComponent(props: { wait: number }) {
  const [data] = useWaitQuery(props);
  return <div>result: {data}</div>;
}

const QueryPage = () => {
  return (
    <>
      <Suspense fallback={<div>waiting 100.....</div>}>
        <MyComponent wait={100} />
      </Suspense>
      <Suspense fallback={<div>waiting 200.....</div>}>
        <MyComponent wait={200} />
      </Suspense>
      <Suspense fallback={<div>waiting 300.....</div>}>
        <MyComponent wait={300} />
      </Suspense>

      <fieldset>
        <legend>
          Combined <code>Suspense</code>-Container
        </legend>
        <Suspense
          fallback={
            <>
              <div>waiting 800.....</div>
              <div>waiting 900.....</div>
              <div>waiting 1000.....</div>
            </>
          }
        >
          <MyComponent wait={800} />
          <MyComponent wait={900} />
          <MyComponent wait={1000} />
        </Suspense>
      </fieldset>
    </>
  );
};

export default QueryPage;
