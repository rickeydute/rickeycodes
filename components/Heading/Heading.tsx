import { ReactNode } from "react";
import Styles from "./Heading.module.scss";

type HeadingElement = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
type HeadingAlign = "left" | "center" | "right";

interface HeadingProps {
    element?: HeadingElement;
    align?: HeadingAlign;
    children: ReactNode;
    className?: string;
}

export function Heading({
    element = "h1", 
    align = "center", 
    children,
    className,
}: HeadingProps) {
    const Tag = element;
    const alignClass =
        align === "center"
        ? "u-text-center"
        : align === "right"
        ? "u-text-right"
        : "u-text-left";

    const levelClass =
        element === "h1"
        ? "h1"
        : element === "h2"
        ? "h2"
        : element === "h3"
        ? "h3"
        : element === "h4"
        ? "h4"
        : element === "h5"
        ? "h5"
        : element === "h6"
        ? "h6"
        : "p";

    const combinedClassName = [
        Styles.heading,
        levelClass,
        alignClass,
        className,
    ]
    .filter(Boolean)
    .join(" ");

    return <Tag className={combinedClassName}>{children}</Tag>
}