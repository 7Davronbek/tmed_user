
export class TimeFormatter {
    public static timeFormatterFn = (time: string, locale: string): string => {
        const parsedDate = new Date(time);
        return parsedDate.toLocaleString(locale, {
            hour: 'numeric',
            minute: 'numeric',
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        })
    }
}