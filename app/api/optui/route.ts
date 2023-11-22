import { NextResponse } from "next/server";

type Todo = {
  id: string;
  text: string;
};

const items = [] as Todo[];

export async function POST(request: Request) {
  await new Promise((result) => setTimeout(result, 1000));
  const json = await request.json();
  const { text } = json;

  if (Math.random() > 0.7) {
    return NextResponse.json({ error: "Could not add item!" }, { status: 500 });
  }

  const newTodo = {
    id: Math.random().toString(),
    text: text.toUpperCase(),
  };

  items.push(newTodo);
  return NextResponse.json(newTodo);
}

export async function GET() {
  await new Promise((result) => setTimeout(result, 1000));
  return NextResponse.json({
    ts: Date.now(),
    items,
  });
}
