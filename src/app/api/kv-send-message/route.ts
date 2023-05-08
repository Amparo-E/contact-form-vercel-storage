import kv from "@vercel/kv";

export async function POST(request: Request) {
  const { email, name, message } = await request.json();

  if (name == "" || email == "" || message == "") {
    return new Response("Please provide all fields", { status: 400 });
  }

  const uuid = crypto.randomUUID();
  const timestamps = Date.now();

  try {
    await kv.set(`contact-${uuid}`, { name, email, message, timestamps });

    return new Response("message saved", { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Internal error", { status: 500 });
  }
}
