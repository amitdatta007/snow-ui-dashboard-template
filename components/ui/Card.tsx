import { cn } from "@/utils/utils";

interface CardProps
    extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
    className?: string;
}

const Card = ({ children, className }: CardProps) => {
    return (
        <div
            className={cn(
                'bg-primary-light rounded-2xl w-full p-6 ',
                className as string
            )}
        >
            {children}
        </div>
    );
};

export default Card;