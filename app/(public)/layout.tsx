import { cn } from "@/utils/utils";

const PublicLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <main
            className={cn(
                'bg-primary-light w-full min-h-screen px-4 md:px-7 flex flex-col'
            )}
        >
            <header>
                <nav>
                    navbar
                </nav>
            </header>
            {children}
        </main>
    );
};

export default PublicLayout;