import { Button } from "@/components/ui/button";
import Link from "next/link";

function LandingPage() {
  return (
    <div>
      <p>Landing Page (Unprotected)</p>

      <div>
        <Link href={"/sign-in"}>
          <Button>Login</Button>
        </Link>

        <Link href={"/sign-up"}>
          <Button>Register</Button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;