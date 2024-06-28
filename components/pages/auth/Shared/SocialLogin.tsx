import Button from "@/components/ui/Button";
import googleLogo from "@/assets/logo/google.svg";
import appleLogo from "@/assets/logo/apple.svg";
import Image from "next/image";

const SocialLogin = () => {
    return (
        <div className="flex flex-col sm:flex-row gap-4">
            <Button
                size='small'
                styles="outline"
                className="w-full gap-2 h-10"
            >
                <Image src={appleLogo} alt="" className="h-6 w-6" />
                <span>Sign in with Apple</span>
            </Button>
            <Button
                size='small'
                styles="outline"
                className="w-full gap-2 h-10"
            >
                <Image src={googleLogo} alt="" className="h-6 w-6" />
                <span>Sign in with Google</span>
            </Button>
        </div>
    );
};

export default SocialLogin;