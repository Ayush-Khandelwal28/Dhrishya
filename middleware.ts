import { authMiddleware } from "@clerk/nextjs";

const protectedRoutes = (["/", "/previous", "/upcoming", "/recordings", "/personalRoom", "/meeting(.*)"]);

export default authMiddleware({
    // publicRoutes: ["/"]
});

export const config = {
    matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};