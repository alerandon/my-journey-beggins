export default function actualDate(): Date {
    const date = new Date();
    date.setTime(date.getTime() + 3600);

    return date;
}

export function classNames(...classes: string[]): string {
    return classes.filter(Boolean).join(' ');
}