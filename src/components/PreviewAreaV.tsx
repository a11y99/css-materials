import React, { ReactNode } from "react";

interface PreviewAreaProps {
    children: ReactNode;
}

export default function PreviewArea({ children }: PreviewAreaProps) {
    return (
        <div className="border p-2.5 rounded-md space-y-2.5 flex flex-col">
            {children}
        </div>
    );
}