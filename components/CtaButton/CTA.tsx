import Link from "next/link";
import Styles from "./CTA.module.scss";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg" | "fullWidth";
type Alignment = "left" | "center" | "right";

interface BaseProps {
    label: string;
    variant?: Variant;
    size?: Size;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    newTab?: boolean;
    className?: string;
    align?: Alignment;
}

type LinkProps = BaseProps & {
    href: string;
    onClick?: never;
    type?: never;
}

type ButtonProps = BaseProps & {
    href?: undefined;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
}

export type CtaButtonProps = LinkProps | ButtonProps;

export function CtaButton(props: CtaButtonProps) {
    const {
        label,
        variant,
        size,
        leftIcon,
        rightIcon,
        newTab,
        className,
        align,
    } = props;

    const variantClass = 
        variant === "primary"
        ? Styles.variantPrimary
        : variant === "secondary"
        ? Styles.variantSecondary
        : Styles.variantGhost;

    const sizeClass = 
        size === "sm"
        ? Styles.sizeSm
        : size === "lg"
        ? Styles.sizeLg
        : size === "fullWidth"
        ? Styles.fullWidth
        : Styles.sizeMd;

    const alignmentClass = 
        align === "center"
        ? "u-justify-center"
        : align === "right"
        ? "u-justify-right"
        :"u-justify-left";

    const combinedClassName = [
        Styles.button,
        variantClass,
        sizeClass,
        className,
    ]
    .filter(Boolean)
    .join(" ");

    if ("href" in props && props.href) {
        const { href } = props;
        const rel = newTab ? "noopener noreferrer" : undefined;
        const target = newTab ? "_blank" : undefined;

        return (
            <div className={alignmentClass}>
                <Link href={href} className={combinedClassName} target={target} rel={rel}>
                    {leftIcon}
                    <span>{label}</span>
                    {rightIcon}
                </Link>
            </div>
            
        )
    }

    const { onClick, type = "button" } = props;

    return (
        <div className={alignmentClass}>
            <button type={type} onClick={onClick} className={combinedClassName}>
                {leftIcon}
                <span>{label}</span>
                {rightIcon}
            </button>
        </div>
    )
}