export default function FormattedDate({
  timestamp,
  pubDate,
}: {
  timestamp: string;
  pubDate: string;
}) {
  return <time dateTime={timestamp}>{pubDate}</time>;
}
