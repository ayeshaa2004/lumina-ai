type MessageHeaderProps = {
  avatar: string;
  name: string;
  avatarColor: string;
};

export default function MessageHeader({
  avatar,
  name,
  avatarColor,
}: MessageHeaderProps) {
  return (
    <div className="mb-2 flex items-center gap-2">
      <div
        className={`flex h-8 w-8 items-center justify-center rounded-full ${avatarColor} text-sm font-semibold text-white`}
      >
        {avatar}
      </div>

      <span className="font-medium text-gray-200">{name}</span>
    </div>
  );
}
