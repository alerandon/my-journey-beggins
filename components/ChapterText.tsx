interface ChapterTextProps {
    children: React.ReactNode;
}

export default function ChapterText({ children }: ChapterTextProps) {
    return <section className="md:text-lg lg:text-xl leading-relaxed space-y-8">{children}</section>;
}
