export default function FormattedDate({ date }: { date: string }) {
  const parsedDate = new Date(date);
  return (
    <time dateTime={parsedDate.toISOString()}>
      {parsedDate.toLocaleDateString("en-us", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })}
    </time>
  );
}
