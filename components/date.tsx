import { parseISO, format } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";

type Props = {
  dateString: string;
};

export default function Date({ dateString }: Props) {
  const date = parseISO(dateString);
  const zonedDate = utcToZonedTime(date, "Pacific/Honolulu");
  return <time dateTime={dateString}>{format(zonedDate, "LLLL d, yyyy")}</time>;
}
