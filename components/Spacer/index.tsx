import { SpacerBlock, MarginSize } from "@/lib/cms/queries/pageBySlug";
import Styles from "./Spacer.module.scss";

function getSpaceFromMarginSize(size: MarginSize): number {
    const numeric = parseInt(size.slice(1), 10);
    if (Number.isNaN(numeric)) return 40;

    return numeric;
}

interface Props {
    block: SpacerBlock;
}

export function Spacer({ block }: Props) {
    const { marginSize, showDivider } = block;

    const effectiveSize: MarginSize =  marginSize ?? "M40";
    const space = getSpaceFromMarginSize(effectiveSize);

    return (
        <div className={Styles.spacer} style={{ paddingTop: space, paddingBottom: space, }} >
            {showDivider && <div className={Styles.divider} />}
        </div>
    );
}