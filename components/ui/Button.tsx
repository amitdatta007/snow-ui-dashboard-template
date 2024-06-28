import { cn } from "@/utils/utils";
import { VariantProps, cva } from "class-variance-authority";

const buttonVariants = cva(
    "border border-transparent disabled:text-foreground-20 flex justify-center items-center",
    {
        variants: {
            size: {
                small: "px-2 py-1 text-sm rounded-lg gap-1",
                medium: "px-4 py-2 text-lg leading-6 rounded-xl gap-2",
                large: "px-6 py-4 text-lg leading-6 rounded-2xl gap-2",
            },
            styles: {
                borderless: "hover:bg-foreground-5 disabled:hover:bg-transparent",
                outline: "border-foreground-10 hover:border-foreground-40 disabled:hover:border-foreground-10",
                muted: "bg-foreground-5 hover:bg-foreground-10 disabled:bg-foreground-5",
                filled: "bg-primary text-background-100 hover:bg-foreground-80 disabled:bg-foreground-5"
            }

        },
        defaultVariants: {
            size: "medium",
            styles: "filled",
        },
    }
)

interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    children: React.ReactNode;
    className?: string;
}

const Button = ({ children, size, styles, className, ...props }: ButtonProps) => {
    return (
        <button className={cn(
            buttonVariants({ styles, size, className }),
        )}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;