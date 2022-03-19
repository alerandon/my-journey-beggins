interface ChapterTextProps {
    children: React.ReactNode;
}

export default function ChapterText({ children }: ChapterTextProps) {
    return <section className="md:text-lg lg:text-xl leading-relaxed">{children}</section>;
}
