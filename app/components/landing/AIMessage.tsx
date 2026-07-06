import MessageHeader from "./MessageHeader";

type AIMessageProps = {
  avatar: string;
  name: string;
  title: string;
  explanation: string;
};

export default function AIMessage({
  avatar,
  name,
  title,
  explanation,
}: AIMessageProps) {
  return (
    <div className="">
      <MessageHeader avatar={avatar} name={name} avatarColor="bg-emerald-500" />
      <div className="max-w-2xl rounded-2xl border border-white/10 bg-zinc-800/80 p-5 backdrop-blur-md text-left">
        <h4 className="mb-3 font-semibold text-white">{title}</h4>

        <p className="leading-7 text-gray-300">{explanation}</p>
      </div>
    </div>
  );
}
