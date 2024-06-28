interface DividerProps {
    text?: string;
}

const Divider = ({ text }: DividerProps) => {
    return (
        <div className="w-full flex gap-4 items-center">
            <div className="flex-grow h-[1px] bg-foreground-10"></div>
            <span className="text-xs text-foreground-40">{text}</span>
            <div className="flex-grow h-[1px] bg-foreground-10"></div>
        </div>
    );
};

export default Divider;