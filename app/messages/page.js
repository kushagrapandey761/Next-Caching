import Messages from "@/components/messages";
import { getMessages } from "@/lib/messages";
// import { unstable_noStore } from 'next/cache';
// export const revalidate = 5;
// export const dynamic = 'force-dynamic' //To avoid caching

export default function MessagesPage() {
  // unstable_noStore(); //Also done to avoid caching
  // const response = await fetch("http://localhost:8080/messages", {
  //   next: {
  //     tags: ["msg"],
  //   },
  // });
  // const messages = await response.json();

  const messages = getMessages();

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
}
