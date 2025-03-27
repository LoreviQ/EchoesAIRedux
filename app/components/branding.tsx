import { Link } from "@remix-run/react";

export function TypefaceOutlined({ text, path, outlineColour }: { text: string, path: string, outlineColour: string }) {
    return (
        <Link
            to={path}
            className="text-5xl font-custom flex items-center justify-center"
            style={{
                WebkitTextStroke: `2px ${outlineColour}`,
                color: 'transparent'
            }}
        >
            {text}
        </Link>
    );
}