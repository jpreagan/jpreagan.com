import { parseISO, format, add } from "date-fns";

export default function Date({ dateString }: { dateString: string }) {
  const adjustedDate = add(parseISO(dateString), {
    minutes: parseISO(dateString).getTimezoneOffset(),
  });
  return (
    <time dateTime={dateString}>{format(adjustedDate, "LLLL d, yyyy")}</time>
  );
}
