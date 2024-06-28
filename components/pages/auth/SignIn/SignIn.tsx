import Card from "@/components/ui/Card";
import SocialLogin from "../Shared/SocialLogin";
import AuthHeader from "../Shared/AuthHeader";
import Divider from "@/components/ui/Divider";

const SignIn = () => {
    return (
        <div className="py-12 grid place-items-center flex-grow">
            <Card
                className="bg-background-100 max-w-2xl grid place-items-center"
            >
                <div className="flex flex-col gap-7 w-full max-w-96">
                    <AuthHeader
                        title="Sign In"
                        description="Your Social Campaigns"
                    />
                    <SocialLogin />
                    <Divider text="Or with Email" />
                </div>
            </Card>
        </div>
    );
};

export default SignIn;