interface AuthHeaderProps {
    title?: string;
    description?: string;
}

const AuthHeader = ({ title, description }: AuthHeaderProps) => {
    return (
        <div className="text-center flex flex-col gap-2">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="text-sm text-foreground-40">{description}</p>
        </div>
    );
};

export default AuthHeader;