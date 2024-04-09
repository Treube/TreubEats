import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";
import { NextApiResponse } from 'next';
import { NextResponse } from "next/server";

export default authMiddleware({
  // Routes that can be accessed while signed out
  publicRoutes: ["/"],
  // Routes that can always be accessed, and have
  // no authentication information
  ignoredRoutes: [""],
  apiRoutes: ['/(api|trpc)(.*)'],
   // Allow matched api/public requests
   afterAuth(auth, req, evt) {
    // Allow matched api/public requests
      if (auth.isApiRoute ) {
        return NextResponse.next();
      }
    // handle users who aren't authenticated
    if (!auth.userId && !auth.isPublicRoute) {
      return redirectToSignIn({ returnBackUrl: req.url });
    }
    // Ex. // redirect them to organization selection page
    // if (auth.userId && !auth.orgId && req.nextUrl.pathname !== "/org-selection"){
    //   const orgSelection = new URL('/org-selection', req.url)
    //   return NextResponse.redirect(orgSelection)
    // }
  }
});

export const config = {
  // Protects all routes, including api/trpc.
  // See https://clerk.com/docs/references/nextjs/auth-middleware
  // for more information about configuring your Middleware
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};

