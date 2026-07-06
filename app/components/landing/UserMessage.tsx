import MessageHeader from "./MessageHeader";

type UserMessageProps = {
  avatar: string;
  name: string;
  message: string;
};

export default function UserMessage({
  avatar,
  name,
  message,
}: UserMessageProps) {
  return (
    <div className="">
      <MessageHeader avatar={avatar} name={name} avatarColor="bg-indigo-600" />

      <div className="ml-auto w-fit max-w-md rounded-2xl bg-indigo-600 p-4 text-white">
        {message}
      </div>
    </div>
  );
}
