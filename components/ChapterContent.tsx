interface ChapterContentProps {
    children: React.ReactNode;
}

export default function ChapterContent({ children }: ChapterContentProps) {
    return <main className="max-w-screen-md px-5 mx-auto mt-40">{children}</main>;
}
