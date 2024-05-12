export interface SwitchProps {
    onChange(item: SwitchProps['items'][0 | 1]): void;
    items: [SwitchItemType, SwitchItemType]
}

type SwitchItemType = {
    text: string;
    key: string;
};