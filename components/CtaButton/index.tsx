import { CtaButtonBlock } from "@/lib/cms/queries/pageBySlug";
import { CtaButton } from "./CTA";

interface Props {
    block: CtaButtonBlock;
}

export function CtaBlock({ block }: Props) {
    const {
        label,
        href,
        align,
        variant,
        size,
        newTab,
    } = block;

    if (!label || !href) return null;

return (
        <CtaButton 
            label={label}
            href={href}
            variant={
                variant === "secondary"
                ? "secondary"
                : variant === "ghost"
                ? "ghost"
                : "primary"
            }
            size={
                size === "sm"
                ? "sm"
                :size === "lg"
                ? "lg"
                :size === "fullWidth"
                ? "fullWidth"
                :"md"
            }
            align={
                align === "center"
                    ? "center"
                    : align === "right"
                    ? "right"
                    : "left"
            }
            newTab={newTab ?? false}
        />
    )
}