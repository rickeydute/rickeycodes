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
        ? Styles.h1
        : element === "h2"
        ? Styles.h2
        : element === "h3"
        ? Styles.h3
        : element === "h4"
        ? Styles.h4
        : element === "h5"
        ? Styles.h5
        : element === "h6"
        ? Styles.h6
        : Styles.p;

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